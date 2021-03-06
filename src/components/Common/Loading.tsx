import React from 'react'
import { Spinner } from 'react-bootstrap';

export default function Loading() {
    return (
        <div className="loading">
            <Spinner className="mx-auto" animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    )
}
