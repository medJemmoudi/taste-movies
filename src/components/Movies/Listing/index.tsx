import React, { Component } from 'react'
import _ from 'lodash';
import { Card, Button, Col, Row } from 'react-bootstrap';

export default class MoviesList extends Component {
    render() {
        return (
            <Row>
                {(_.range(1, 12)).map((e, i) => (
                    <Col key={i} xs={3}>
                        <Card style={{ marginBottom: 20 }}>
                            <Card.Img variant="top" src="https://picsum.photos/115" />
                            <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        )
    }
}
