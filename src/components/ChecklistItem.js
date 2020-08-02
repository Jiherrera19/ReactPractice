import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

class ChecklistItem extends React.Component {
    render() {
        const stylesCompleted = {
            color: "gray",
            textDecoration: "line-through",
            fontStyle: "italic"
        }
        return (
        <ListGroup.Item>
            <Form.Check type="checkbox" id={this.props.todo.id} custom>
                <Form.Check.Input checked={this.props.todo.completed} onChange={() => this.props.handler(this.props.todo.id)}/>
                <Form.Check.Label style = {this.props.todo.completed ? stylesCompleted : null} type="checkbox" className="active">{this.props.todo.text}</Form.Check.Label>
            </Form.Check>
        </ListGroup.Item>
        );
    }
}

export default ChecklistItem;