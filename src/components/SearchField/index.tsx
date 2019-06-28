import React from 'react';
import { Row, Col, Jumbotron, Form, Button } from 'react-bootstrap';

class SearchField extends React.Component {
    render() {
        return (
            <Row>
                <Col xs={12}>
                    <Jumbotron>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>What are you looking for today?</Form.Label>
                                <Form.Control type="text" placeholder="favorite movie title..." />
                                <Form.Text className="text-muted">
                                    We'll try hard to find something similar to it =)
                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Jumbotron>
                </Col>
            </Row>
        );
    }
}

export default SearchField;