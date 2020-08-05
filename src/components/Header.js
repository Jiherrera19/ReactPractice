import React from 'react';
import Background from '../img/pepe.jpg';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

class Header extends React.Component {
    render() {
        const headerStyle = {
            backgroundImage: `url(${Background})`,
            backgroundPosition: "bottom center",
            height: 200, textAlign: "center",
            paddingTop: 10,
            fontFamily: `'Titillium Web', sans-serif`
        };
        return (
            <div>
                <link href="https://fonts.googleapis.com/css?family=Titillium+Web:300,400,700" rel="stylesheet"/>
                <Jumbotron style={headerStyle} fluid>
                    <Container fluid>
                        <h1>Meme Generator</h1>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default Header;