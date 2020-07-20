import React, { Component } from "react";

class Hero extends Component {
    state = {
        heroId: 99
    };
    render() {
        // return <h1>Avengers incoming...</h1> //'()' not required for single element
        // return <div><h1>Avengers incoming...</h1><button>Click Here</button></div>  //'<React.Fragment></React.Fragment>' Or '<></>' can be used instead of <div></div>
        return (
            <React.Fragment>
                <h1>Avengers incoming...</h1>
                <button>Click Here {this.state.heroId}</button>
            </React.Fragment>
        );
    }
}

export default Hero;