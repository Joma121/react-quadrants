import React, { Component } from "react";
import Loader from "./Loader";

const contentStyles = {
	position: "relative",
	top: "50%",
	transform: "translateY(-50%)",
	margin: "0 auto",
	textAlign: "center",
};

class Joke extends Component {
	state = {
		data: [],
    };
    
    setData = (apiData) => {
        this.setState({ data: apiData})
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.apiData !== this.props.apiData){
            this.setData(this.props.apiData[0]);
        }
    }

	generateContent = () => {
        if(this.state.data.length === 0 && this.props.apiData.length){
            this.setData(this.props.apiData[0]);
			return <Loader styles={contentStyles} />;
        }
        return (
            <div style={contentStyles}>
                <h3>{this.state.data.setup}</h3>
                <p>{this.state.data.punchline}</p>
            </div>
        )
	};

	render() {
		return (
			<section className="section">
				{this.generateContent()}
			</section>
		);
	}
}

export default Joke;
