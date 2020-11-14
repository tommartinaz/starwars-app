import React, { Component } from 'react';
import { connect } from 'react-redux';

const MoviesList = ({ movies }) => {
    return (
        <ol>
            {movies.map(movie => <li>{movie.title}</li>)}
        </ol>
    );
};

const mapStateToProps = state => ({
    movies: Object.values(state.movies),
});

export default connect(mapStateToProps)(MoviesList);