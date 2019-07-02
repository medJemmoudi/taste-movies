import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Container } from 'react-bootstrap';
import ShowMovieDetails from '../components/Movies/Details';

interface IDetailsParams {
    movieName: string;
}

function Details ({ match }: RouteComponentProps<IDetailsParams>) {
    return (
        <Container>
            <ShowMovieDetails title={match.params.movieName} />
        </Container>
    );
}

export default Details;