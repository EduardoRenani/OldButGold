import React, { Component } from 'react';
import socket from 'socket.io-client';
import api from "../services/api";
import "./Home.css";
import Movie from "../components/Movie";


export default class pages extends Component {

    state = {
        movies: [],
        newMovieTitle: '',
        newMovieYear: ''
    };

    async componentDidMount() {
        this.subscribeToEvents();

        const response = await api.get("movies");

        this.setState({ movies: response.data });
    }

    subscribeToEvents = () => {
        const io = socket('http://localhost:3000');

        io.on('newMovie', data => {
            this.setState({ movies: [data, ...this.state.movies] });
        });

        io.on('newMovieAddCopy', data => {
            var { movies } = this.state;
            var _movies = movies.map ( (movie) => {
                if (movie._id == data._id) {
                    movie.copies += 1;
                }
                return movie
            });

            this.setState({ movies: _movies });
            
        });

        io.on('removeMovie', data => {
            var { movies } = this.state;
            var filtered = movies.filter(function(movie, index, arr){

                return movie._id != data._id;
            
            });

            this.setState({ movies: filtered });
            
        });

        io.on('removeMovieCopy', data => {
            var { movies } = this.state;
            var _movies = movies.map ( (movie) => {
                if (movie._id == data._id) {
                    movie.copies -= 1;
                }
                return movie
            });

            this.setState({ movies: _movies });
            
        });
    }

    handleChangeTitle = e => {
        this.setState({ newMovieTitle: e.target.value})
    }

    handleChangeYear = e => {
        this.setState({ newMovieYear: e.target.value})
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const response = await api.post(
            "movies", 
            {
                "title": this.state.newMovieTitle,
                "year": this.state.newMovieYear
            }
        )
    }     

    render() {
        return (
            <div className = "timeline-wrapper">
                <div className = "login-wrapper">
                    <form onSubmit = {this.handleSubmit} >
                        <input 
                            placeholder = "Title" 
                            value = {this.state.newMovieTitle}
                            onChange = {this.handleChangeTitle.bind(this)}
                        />
                        <input 
                            placeholder = "Year" 
                            value = {this.state.newMovieYear}
                            onChange = {this.handleChangeYear.bind(this)}
                            />
                        <button type = "submit">Adcionar</button>
                    </form>
                </div>
                <ul className = "tweet-list">
                    { this.state.movies.map( movie => (
                        <Movie key = {movie._id} movie = { movie } />
                    ))}
                </ul>
            </div>
        );
    }
}
