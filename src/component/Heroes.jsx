import React, { Component } from "react";
import Hero from "./Hero";


class Heroes extends Component {
    state = {
        allAvengers: [
            { id: 1, likeCount: 5 },
            { id: 2, likeCount: 10 },
            { id: 3, likeCount: 15 }
        ]
    };
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.allAvengers.map((avenger => (
                        <div className="col" key={avenger.id}>
                            <Hero key={avenger.id} likeCount={avenger.likeCount} movie={["Movie 1","Movie 22","Movie 99"]}/>
                        </div>
                    )))}
                </div>
            </div>
        );
    }
}

export default Heroes;