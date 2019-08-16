import React, { Component } from "react";
import Axios from "axios";
// import axios from "axios";

export default class DataFetcher extends Component {
	constructor() {
		super();
		this.state = {
			data: null
		}
	}

	fetchData = () => {
		Axios.get(this.props.url)
		.then(res => {
			this.setState({
				data: res.data
			})
		})
	}
	
	render() {
		return <div>
			{
				this.state.data
				?
				this.props.renderMyComponent(this.state.data)
				:
				this.fetchData()
			}
		</div>;
	}
}