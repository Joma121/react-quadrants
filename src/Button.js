import React, { Component } from "react";
import Loader from "./Loader";

const contentStyles = {
	position: "relative",
	top: "50%",
	transform: "translateY(-50%)",
	margin: "0 auto",
	textAlign: "center",
};

class Button extends Component {
	state = {
		data: "",
	};

	fetchRefresh = () => {
        ;
    }

	render() {
		return (
			<div className="section" >
                <button onClick={this.props.newFetch}>Refresh APIs</button>
			</div>
		);
	}
}

export default Button;
