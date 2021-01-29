import React, { Component } from "react";
import ReactDOM from "react-dom";
import Joke from "./Joke";
import Berry from "./Berry";
import Button from "./Button";
import {Cat} from 'react-kawaii';

import "./styles.css";

const fetchJoke = `https://official-joke-api.appspot.com/jokes/programming/random`;
const fetchBerries =`https://pokeapi.co/api/v2/berry/`;


class ArtApi extends Component {
	state = {
		berryData: [],
		jokeData: [],
		mood: "sad",
	};

	componentDidMount() {
		this.goFetch();
	};

	goFetch = () => {
		fetch(fetchBerries)
			.then((res) => res.json())
			.then((json) => this.setState({ berryData: json.results }));
		fetch(fetchJoke)
			.then((res) => res.json())
			.then((json) => this.setState({ jokeData: json }));
	};

	componentDidUpdate() {
		if(this.state.berryData && this.state.jokeData && this.state.mood !== "happy"){
			return this.setState({mood: "happy"});
		}
		return "sad";
	}

	render() {
		console.log(this.state.berryData)
		console.log(this.state.jokeData)
		return (
			<div className="main">
				<Cat size={320} mood={this.state.mood} color="#596881" />
				<Berry apiData={this.state.berryData} />
				<Joke apiData={this.state.jokeData} />
				<Button newFetch={this.goFetch}/>
			</div>
		);
	};
}

export default ArtApi;

const rootElement = document.getElementById("root");
ReactDOM.render(<ArtApi />, rootElement);
