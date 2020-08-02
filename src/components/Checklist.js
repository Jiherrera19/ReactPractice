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
        this.handleItemClicked = this.handleItemClicked.bind(this);
    }

    handleItemClicked(id) {
        this.setState(state => {
            const updatedTodos = state.todosData.map(todo => {
                if (todo.id === id) {
                    return {...todo, completed: !todo.completed}
                };
                return todo;
            });
            return {todosData: updatedTodos}
        });
    }

    render() {
        const checklistItems = this.state.todosData.map(item => {
            return <ChecklistItem key={item.id} todo={item} handler={this.handleItemClicked}/>;
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