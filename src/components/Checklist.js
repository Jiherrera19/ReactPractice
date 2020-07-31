import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ChecklistItem from './ChecklistItem';


function Checklist() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <ListGroup >
                            <ChecklistItem id="check1" label="Check me"/>
                            <ChecklistItem id="check2" label="Check me"/>
                            <ChecklistItem id="check3" label="Check me"/>
                            <ChecklistItem id="check4" label="Check me"/>
                            <ChecklistItem id="check5" label="Check me"/>
                            <ChecklistItem id="check6" label="Check me"/>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Checklist;