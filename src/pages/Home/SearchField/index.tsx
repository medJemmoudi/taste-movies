import React from 'react';
import { Row, Col, Jumbotron, Form, Button } from 'react-bootstrap';
import { fetchSimilarMovies } from '../../../store/movies/actions';
import { ApplicationState } from '../../../store';
import { connect } from 'react-redux';
import _ from 'lodash';

interface ISearchFieldProps {
    fetchSimilarMovies: Function;
}

class SearchField extends React.Component<ISearchFieldProps> {
    handleUserSearch = (e: any) => {
        const searchField = document.querySelector('.searchValue') as HTMLInputElement;
        let movieTitle: string = (searchField) ? searchField.value : '';
        if (!_.isEmpty(movieTitle)) {
            this.props.fetchSimilarMovies(movieTitle);
        }
        // don't send form
        e.preventDefault();
    }

    render() {
        return (
            <Row>
                <Col xs={12}>
                    <Jumbotron>
                        <Form onSubmit={this.handleUserSearch}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>What are you looking for today?</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="favorite movie title..."
                                    className="searchValue"
                                />
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

const mapStateToProps = (state: ApplicationState) => ({
    // fetch some props here
});

const mapActionsToProps = { fetchSimilarMovies }

export default connect(mapStateToProps, mapActionsToProps)(SearchField);