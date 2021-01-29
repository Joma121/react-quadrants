import React, { Component } from "react";
import Loader from "./Loader";

const contentStyles = {
	position: "relative",
	top: "50%",
	transform: "translateY(-50%)",
	margin: "0 auto",
	textAlign: "center",
};

class Berry extends Component {
	state = {
		data: [],
	};

	// getRandomImage = (arr) => {
	// 	const rand = Math.random() * arr.length;
	// 	const index = Math.floor(rand);
	// 	const url = arr[index].images.preview_gif.url;
	// 	this.setState({ data: url });
	// };

	getRandomBerry = (arr) => { 
		const rand = Math.floor(Math.random() * arr.length);
        const url = arr[rand].url;
        fetch(url)
            .then((res) => res.json())
            .then((json) => this.setState({ data: json}));
    };

	handleOnClick = () => this.getRandomBerry(this.props.apiData);

    componentDidUpdate(prevProps) {
        if(prevProps.apiData !== this.props.apiData){
            this.getRandomBerry(this.props.apiData);
        }
    }

	generateContent = () => {
		if (this.state.data.length === 0 && this.props.apiData.length) {
            this.getRandomBerry(this.props.apiData);
            return <Loader styles={contentStyles} />;
		} else {
			return (
				<div style={contentStyles}>
                    <h2>Random PokeBerry</h2>
                    <h3>{this.state.data.name}</h3>
                    <p>{this.state.data.size}mm - {this.state.data.growth_time}hrs</p>
				</div>
			);
		}
	};

	render() {
		return (
			<section className="section" onClick={this.handleOnClick}>
				{this.generateContent()}
			</section>
		);
	}
}

export default Berry;
