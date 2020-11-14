import React from 'react';
import { connect } from 'react-redux';
import { setMovies } from '../redux/actions/movieActions';
import { baseURL } from '../utils/urls';
import { getClient } from '../utils/api';
import Header from './Header';

class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.getClient = getClient;
    }
    componentDidMount = () => {
        const { setMovies } = this.props;
        this.getClient(`${baseURL}/films`)
            .then(res => setMovies(res.data));
    }

    render() {
        const { children } = this.props;
        return (
            <div className="ui container">
                <Header />
                {children}
            </div>
        );
    }
}

export default connect(null, { setMovies })(AppComponent);