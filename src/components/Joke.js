import React from 'react';


import Card from 'react-bootstrap/Card';

function Joke(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title style={{display: !props.title && "none"}}>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Joke;