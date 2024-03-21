import React, { Component } from 'react';
import background from './1641194342131.png'

class Background extends Component {
    render() {
        const myStyle = {
            backgroundImage: `url(${background})`,
            height: "100vh",
            marginTop: "-70px",
            fontSize: "50px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        };
        return (
            <div style={myStyle}>
                <h1>GeeksForGeeks</h1>
            </div>
        );
    }
}

export default Background;
