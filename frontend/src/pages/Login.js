import React, { Component } from 'react';
import "./Login.css";

export default class pages extends Component {

    state = {
        username: "",
    };

    handleInputChange = (e) => {
        this.setState({ username: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();

        const { username } = this.state;

        if(username.length === 0) return;

        localStorage.setItem("@OldButGold:username", username);
        if ( username !== "Admin")
            this.props.history.push("/home");
        else 
            this.props.history.push("/manager");

    }

    render() {
        return (
            <div className = "login-wrapper">
                <h1>Old But Gold...</h1>
                <form onSubmit = {this.handleSubmit}  >
                    <input
                        value = {this.state.username}
                        onChange = {this.handleInputChange}
                        placeholder = "Nome de usuario"
                    />
                    <button type = "submit">Entrar</button>
                </form>
            </div>
        );
    }
}
