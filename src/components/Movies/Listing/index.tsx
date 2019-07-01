import React from 'react';
import { connect } from 'react-redux';
import { Card, Col, Row, Spinner, Badge } from 'react-bootstrap';
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
    showLoading = () => {
        return (
            <Spinner className="mx-auto" animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        );
    }

    showMoviesList = () => {
        const moviesList = this.props.data.map((e: Movie, i) => (
            <Col key={i} xs={6} lg={3} className="movie-item">
                <Card style={{ marginBottom: 20 }}>
                    <Card.Img variant="top" src={e.poster} />
                    <Card.Body>
                        <Card.Title>{e.title}</Card.Title>
                        <Card.Subtitle>{e.year}</Card.Subtitle>
                        <Card.Text>
                            <Badge variant="danger">{e.likes}</Badge>
                            <Badge variant="warning">{e.rating}</Badge>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        ));

        return moviesList;
    }

    render() {
        

        return (
            <Row>
                {this.props.loading ? this.showLoading() : this.showMoviesList()}
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