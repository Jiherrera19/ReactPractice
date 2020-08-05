import React from 'react';
import { Container, Image } from 'react-bootstrap';

import './Meme.css';

class Meme extends React.Component {
    render() {
        return (
            <>
                <Container className="meme">
                    <Image style={{maxWidth: "50%"}} src={this.props.randomImage} alt=""/>
                    <h2 className="top">{this.props.topText}</h2>
                    <h2 className="bottom">{this.props.bottomText}</h2>
                </Container>
            </>
        );
    }
}

export default Meme;