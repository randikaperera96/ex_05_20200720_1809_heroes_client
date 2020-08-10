import React, { Component } from "react";
import Hero from "./Hero";
import axios from "axios"


class Heroes extends Component {
    state = {
        allAvengers:
            [
                //     { id: 1, likeCount: 5 },
                //     { id: 2, likeCount: 10 },
                //     { id: 3, likeCount: 15 }
            ]
    };
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.allAvengers.map((avenger => (
                        <div className="col" key={avenger.id}>
                            <Hero
                                key={avenger.id}
                                // name={avenger.name}
                                // likeCount={avenger.likeCount}
                                // movie={["Movie 1", "Movie 22", "Movie 99"]}
                                // imgURL={avenger.imgURL}
                                avenger={avenger}
                            />
                        </div>
                    )))}
                </div>
            </div>
        );
    }

    async componentDidMount() {
        // let result = await axios.get("http://localhost:5000/api/heroes");
        // console.log(result);
        let { data } = await axios.get("http://localhost:5000/api/heroes");
        console.log(data);

        let avengers = data.map(avenger => {
            return {
                id: avenger._id,
                name: avenger.name,
                birthName: avenger.birthName,
                likeCount: avenger.likeCount,
                deceased: avenger.deceased,
                movies: avenger.movies,
                imgURL: avenger.imgURL,
                v: avenger.__v
            }
        });

        this.setState({ allAvengers: avengers });

    }
}

export default Heroes;