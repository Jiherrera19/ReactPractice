import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

function ChecklistItem(props) {
    return (
        <ListGroup.Item>
            <Form.Check type="checkbox" id={props.id}>
                <Form.Check.Input type="checkbox"/>
                <Form.Check.Label>{props.label}</Form.Check.Label>
            </Form.Check>
        </ListGroup.Item>
    );
}

export default ChecklistItem;