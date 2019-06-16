import React, { Component } from 'react';
import socket from 'socket.io-client';
import api from "../services/api";

import "./Home.css";

import Movie from "../components/Movie";

export default class pages extends Component {

    state = {
        movies: [],
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


    render() {
        return (
            <div className = "timeline-wrapper">
                <ul className = "tweet-list">
                    { this.state.movies.map( movie => (
                        <Movie key = {movie._id} movie = { movie } />
                    ))}
                </ul>
            </div>
        );
    }
}
