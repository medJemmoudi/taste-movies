import React from 'react';
import { RouteComponentProps } from 'react-router';

interface IDetailsParams {
    movieName: string;
}

function Details ({ match }: RouteComponentProps<IDetailsParams>) {
    return (
        <p>{`The movie you're looking for is: ${match.params.movieName}`}</p>
    );
}

export default Details;