import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Card, Button, Col, Row } from 'react-bootstrap';
import { Movie } from '../../../store/movies/types';
import { fetchSimilarMovies } from '../../../store/movies/actions';
import { ApplicationState } from '../../../store';

interface MoviesListProps {
    readonly data: Movie[];
    readonly loading: boolean;
    readonly error: string;
    fetchSimilarMovies: Function;
}

class MoviesList extends React.Component<MoviesListProps> {
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

const mapStateToProps = ({ movies }: ApplicationState) => ({
    data: movies.data,
    loading: movies.loading,
    error: movies.error
});

const mapActionsToProps = { fetchSimilarMovies };

export default connect(mapStateToProps, mapActionsToProps)(MoviesList);