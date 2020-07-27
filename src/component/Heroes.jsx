import React, { Component } from "react";
import Hero from "./Hero";


class Heroes extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <Hero />
                </div>
                <div>
                    <Hero />
                </div>
                <div>
                    <Hero />
                </div>
            </React.Fragment>
        )
    }
}

export default Heroes;