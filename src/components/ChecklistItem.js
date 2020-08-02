import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

class ChecklistItem extends React.Component {
    render() {
        return (
        <ListGroup.Item>
            <Form.Check type="checkbox" id={this.props.id} custom>
                <Form.Check.Input type="checkbox" defaultChecked={this.props.completed}/>
                <Form.Check.Label className="active">{this.props.label}</Form.Check.Label>
            </Form.Check>
        </ListGroup.Item>
        );
    }
}

export default ChecklistItem;