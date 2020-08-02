import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ChecklistItem from './ChecklistItem';
import todosData from '../todosData';


class Checklist extends React.Component {
    constructor() {
        super();
        this.state = {
            todosData: todosData
        };
    }

    render() {
        const checklistItems = this.state.todosData.map(todo => {
            return <ChecklistItem id={"custom-" + todo.id} key={"custom-" + todo.id} label={todo.text} completed={todo.completed}/>;
        });
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <ListGroup >
                                {checklistItems}
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Checklist;