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
                {/* <h1 style="width:'18px'">Avengers incoming...</h1> // when using inline CSS we should use JS obects instesd of plain CSS */}
                <h1 style={{ width: "18rem", fontSize: "90px" }}>Avengers incoming...</h1>
                {/* <button>Click Here {this.state.heroId}</button> */}
                <button type="button" className="btn btn-primary">
                    Click on Avenger
                </button>
                <br />
                <p>{this.isHero()}</p>
            </React.Fragment>
        );
    }

    isHero() {
        return (this.state.heroId > 0) ? "Is an Avenger" : "Not an Avenger";
    }
}

export default Hero;