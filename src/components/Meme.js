import React from 'react';
import { Container, Image } from 'react-bootstrap';

class Meme extends React.Component {
    render() {
        const meme = {
            margin: "auto",
            textAlign: "center",
            position: "relative",
            backgroundSize: "100%"
          };
        const h2 = {
            position: "absolute",
            left: 0,
            right: 0,
            margin: "15px 0",
            padding: "0 5px",
            fontFamily: "impact",
            fontSize: "2.5em",
            textTransform: 'uppercase',
            color: "white",
            letterSpacing: "1px",
            textShadow: `2px 2px 0 #000,
            -2px -2px 0 #000,
            2px -2px 0 #000,
            -2px 2px 0 #000,
            0px 2px 0 #000,
            2px 0px 0 #000,
            0px -2px 0 #000,
            -2px 0px 0 #000,
            2px 2px 5px #000`
          };

        const top = {
            top: "25px",
            ...h2
        }

        const bottom = {
            bottom: "15px",
            ...h2
        }
        return (
            <>
                <Container style={meme}>
                    <Image style={{maxWidth: "50%"}} src={this.props.randomImage} alt=""/>
                    <div style={top}>{this.props.topText}</div>
                    <div style={bottom}>{this.props.bottomText}</div>
                </Container>
            </>
        );
    }
}

export default Meme;