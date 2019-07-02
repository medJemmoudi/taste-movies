import React, { Component } from 'react'
import { MovieDetailsState, Comment } from '../../../store/details/types';
import { ApplicationState } from '../../../store';
import { fetchMovieDetails } from '../../../store/details/actions';
import { connect } from 'react-redux';
import { Row, Col, Image, Card, CardColumns } from 'react-bootstrap';
import Loading from '../../Common/Loading';
import _ from 'lodash';

interface IShowMovieDetailsProps {
    title: string;
    fetchMovieDetails: Function;
    selectedMovie: MovieDetailsState
}

class ShowMovieDetails extends Component<IShowMovieDetailsProps> {
    componentDidMount() {
        this.props.fetchMovieDetails(this.props.title);
    }

    fromatMovieTitle = () => {
        let splits = _.split(this.props.title, '-');
        let mapped = _.map(splits, (s) => _.capitalize(s));
        return mapped.join(' ');
    }

    showMovie = () => {
        const { details } = this.props.selectedMovie;
        return (
            <>
                <Col xs={12} sm={12} className="movie-thumbnail">
                    <Image src={details.poster} rounded />
                </Col>
                <Col xs={12} sm={6}>
                    <h4>{ this.fromatMovieTitle() }</h4>
                    <ul>
                        <li><strong>Rating:</strong> { details.rating }</li>
                        <li><strong>Genre:</strong> { details.genre }</li>
                        <li><strong>Directed by:</strong> { details.directed_by }</li>
                        <li><strong>Written by:</strong> { details.written_by }</li>
                        <li><strong>Studio:</strong> { details.studio }</li>
                        <li><strong>Box office:</strong> { details.box_office }</li>
                    </ul>
                </Col>
                <Col xs={12}>
                    <CardColumns>
                        {details.comments.map((c: Comment) => (
                            <Card>
                                <Card.Body>
                                    <Card.Title>{ c.author }</Card.Title>
                                    <Card.Text>{ c.message }</Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </CardColumns>
                </Col>
            </>
        );
    }

    render() {
        return (
            <Row>
                {this.props.selectedMovie.loading ? <Loading /> : this.showMovie()}
            </Row>
        )
    }
}

const mapStateToProps = ({ selectedMovie }: ApplicationState) => ({
    selectedMovie
});

const mapActionsToProps = { fetchMovieDetails }

export default connect(mapStateToProps, mapActionsToProps)(ShowMovieDetails);