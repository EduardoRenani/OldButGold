const Movie = require("../models/Movies");

module.exports = {
    async index(req, res){
        const movies = await Movie.find({}).sort("-year");  //pega todos filmes
    
        return res.json(movies);
    },

    async store(req, res) {
        var movie;
        try {
            movie = await Movie.findOneAndUpdate(
                { title: req.body.title }, 
                { 
                    $inc: 
                        {
                            copies: 1 
                        },
                },
            );
            if( movie === null) throw "null"

            req.io.emit("newMovieAddCopy", movie);
        }
        catch(err) {

            movie = await Movie.create(req.body);
            req.io.emit("newMovie", movie);

        }

        return res.json(movie);
    
    },

    async delete(req, res) {
    
        const movie = await Movie.findById(req.params.id);
        
        if( movie.copies > 1 ) {

            movie.set({ copies: (movie.copies - 1) });

            req.io.emit("removeMovieCopy", movie);

        }
        else {

            movie.delete();
            req.io.emit("removeMovie", movie);

        }

        await movie.save();

        return res.json(movie);

    }
};