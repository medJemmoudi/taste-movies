import React from 'react';
import { Container } from "react-bootstrap";
import SearchField from './SearchField';
import MoviesList from './MoviesList';

const Home: React.SFC = () => (
    <Container>
        <SearchField />
        <MoviesList />
    </Container>
);

export default Home;