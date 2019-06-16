import React, { Component } from 'react';
import del from "../delete.svg";
import api from "../services/api";
import "./Movie.css";

var imgStyle = {

    width: '15px',
    height: '15px'
}


export default class Movie extends Component {

    handleDelete = async (id) => {
        
        const response = await api.delete('movies/' + id + '');

    }

    render() {
        const { movie } = this.props;

        return (
            <li className = "tweet">
            <strong>{ movie.title }</strong>
            <p>{movie.year}</p>
            <p>{movie.copies} copies</p>
            <button type = "button" onClick = {() => this.handleDelete(movie._id)} >
                <img src = {del} alt = "delete" style = {imgStyle} />
            </button>
            </li>
        )
    }
}
