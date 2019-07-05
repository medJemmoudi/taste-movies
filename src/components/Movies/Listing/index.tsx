import React from 'react';
import { connect } from 'react-redux';
import { Card, Col, Row, Badge } from 'react-bootstrap';
import { Movie } from '../../../store/movies/types';
import { fetchSimilarMovies } from '../../../store/movies/actions';
import { ApplicationState } from '../../../store';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import Loading from '../../Common/Loading';

interface MoviesListProps {
    readonly data: Movie[];
    readonly loading: boolean;
    readonly error: string;
    fetchSimilarMovies: Function;
}

class MoviesList extends React.Component<MoviesListProps> {
    showMoviesList = () => {
        const moviesList = this.props.data.map((e: Movie, i) => (
            <Col key={i} xs={6} lg={3} className="movie-item">
                <Card style={{ marginBottom: 20 }}>
                    <Card.Img variant="top" src={e.poster} />
                    <Card.Body>
                        <Card.Title>
                            <Link to={`/details/${_.kebabCase(e.title)}`}>{e.title}</Link>
                        </Card.Title>
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
                {this.props.loading ? <Loading /> : this.showMoviesList()}
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