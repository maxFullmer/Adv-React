import React from 'react';
import Axios from 'axios';
// import axios from 'axios';

function myHOC(Component, url) {
    return class extends React.Component {
        constructor() {
            super();
            this.state = {
                data: null
            }
        }
        
        getData = () => {
            Axios.get(url).then(res => {
                console.log(res)
                this.setState({
                    data: res.data
                })
            })
        }

        render() {
            return (
                <div>
                    {
                        this.state.data
                        ?
                        <Component 
                            {...this.props}
                            data={this.state.data}
                        />
                        :
                        this.getData()
                    }
                </div>
            )
        }
    }
}

export default myHOC;