import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

function ChecklistItem(props) {
    return (
        <ListGroup.Item>
            <Form.Check type="checkbox" id={props.id} custom>
                <Form.Check.Input type="checkbox" defaultChecked={props.completed}/>
                <Form.Check.Label className="active">{props.label}</Form.Check.Label>
            </Form.Check>
        </ListGroup.Item>
    );
}

export default ChecklistItem;