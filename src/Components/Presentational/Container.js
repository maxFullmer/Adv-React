import React, { Component } from 'react';
import axios from 'axios';
import './Presentational.scss'
import Display from './Display'
// https://picsum.photos/v2/list

class Container extends Component{
    constructor(){
        super();
        this.state = {
            photos: []
        }
    }

    componentDidMount() {
        axios.get("https://picsum.photos/v2/list").then(res => {
            console.log(res.data)
            this.setState({
                photos: res.data
            })
        })
    }
    render(){
        return (
            <div>
                <Display data={this.state.photos} />
            </div>
        )
    }
}

export default Container;