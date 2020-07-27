import React, { Component } from "react";

class Hero extends Component {
    state = {
        heroId: -568,
        imgURL: "https://i.pinimg.com/236x/9b/76/75/9b767505f5a5df3df348a898ba4ae8bb.jpg",
        movies: this.props.movie,
        likeCount: this.props.likeCount
    };
    render() {
        // return <h1>Avengers incoming...</h1> //'()' not required for single element
        // return <div><h1>Avengers incoming...</h1><button>Click Here</button></div>  //'<React.Fragment></React.Fragment>' Or '<></>' can be used instead of <div></div>
        return (
            <React.Fragment>
                {/* <h1 style="width:'18px'">Avengers incoming...</h1> // when using inline CSS we should use JS obects instesd of plain CSS */}
                {/* <h1 style={{ width: "18rem", fontSize: "90px" }}>Avengers incoming...</h1> */}
                {/* <button>Click Here {this.state.heroId}</button> */}
                {/* <button type="button" className="btn btn-primary">
                    Click on Avenger
                </button>
                <br />
                <p>{this.isHero()}</p>
                <br />
                <br /> */}
                <div>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={this.state.imgURL} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Avenger Name</h5>
                            <p className="card-text"></p>
                            <ul>
                                {this.showMovies()}
                                {/* {this.state.movies.map(movie => <li>{movie}</li>)} */}
                            </ul>
                            <button className="btn btn-primary" onClick={() => { this.likeAvenger(2) }} >
                                Like <span className="badge badge-light">                                    {this.state.likeCount}                                </span>
                            </button>
                            {this.props.likeCount}
                            {/*[ this.likeAvenger() ]-calls method on render [ this.likeAvenger ] method reference */}
                            {/* To pass value to method */}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    isHero() {
        return (this.state.heroId > 0) ? "Is an Avenger" : "Not an Avenger";
    }

    showMovies() {
        // return this.state.movies.map(movie => <li>{movie}</li>);
        // this.state.movies = [];
        if (this.state.movies.length === 0) return <p>No movies available</p>
        return this.state.movies.map((movie, i) => <li key={i}>{movie}</li>);
    }

    // likeAvenger = () => {
    //     this.setState({ likeCount: ++this.state.likeCount });
    //     console.clear();
    //     console.log("Like Count: " + this.state.likeCount);
    // }


    likeAvenger = (likeIncrementStep) => {
        this.setState({ likeCount: this.state.likeCount + likeIncrementStep });
        console.clear();
        console.log("Like Count: " + this.state.likeCount);
    }
}

export default Hero;