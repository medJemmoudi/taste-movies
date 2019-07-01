import React from 'react';
import { Container } from "react-bootstrap";
import SearchField from "../components/SearchField";
import MoviesList from "../components/Movies/Listing";

const Home: React.SFC = () => (
    <Container>
        <SearchField />
        <MoviesList />
    </Container>
);

export default Home;