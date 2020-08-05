import React from 'react';
import { Form, Container, Button, Row, Col } from 'react-bootstrap';

import Meme from './Meme';

class MemeGenerator extends React.Component {
    constructor() {
        super();
        this.state = {
            topText: '',
            bottomText: '',
            randomImage: '',
            allMemeImgs: []
        };
        this.hangleChange = this.hangleChange.bind(this);
        this.setRandomImg = this.setRandomImg.bind(this);
    }

    componentDidMount()
    {
        const apiUrl = "https://api.imgflip.com/get_memes";

        fetch(apiUrl)
            .then(response => response.json())
            .then(response => {
                this.setState({allMemeImgs: response.data.memes});
                let url = response.data.memes[Math.floor(Math.random() * response.data.memes.length)].url;
                this.setRandomImg(url);
            });
    }

    hangleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name] : value
        });
    }

    setRandomImg(url) {
        let callback;
        if (typeof url === "string") {
            callback = { randomImage: url };
        } else {
            callback = prevState => {
                return {
                    randomImage: prevState.allMemeImgs[Math.floor(Math.random() * prevState.allMemeImgs.length)].url
                };
            }
        }

        this.setState(callback);
    }

    render() {
        return (
            <>
            <Container>
                <Row>
                    <Container>
                        <Form>
                            <Row>
                                <Col xs={9}>
                                    <Form.Group>
                                        <Form.Control value={this.state.topText} type="text" name="topText" placeholder="Top Text" onChange={this.hangleChange}/>
                                        <Form.Control value={this.state.bottomText} type="text" name="bottomText" placeholder="Bottom Text" onChange={this.hangleChange}/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <div style={
                                            {height: "100%", position: "relative"}
                                        }>
                                            <Button style={
                                                {position: "absolute", top: "50%", transform: "translateY(50%)"}
                                            } onClick={this.setRandomImg}>Generate New Img</Button>
                                        </div>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                </Row>
                <Row>
                    <Meme ref={this.props.memeRef} randomImage={this.state.randomImage} topText={this.state.topText} bottomText={this.state.bottomText}/>
                </Row>

            </Container>
            </>
        );
    }
}

export default MemeGenerator;