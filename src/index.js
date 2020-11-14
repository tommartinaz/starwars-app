import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import App from './components/App';
import Home from './components/Home';
import Movies from './components/Movies';
import store from './store';

ReactDOM.render(
    <Provider store={store()}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/movies" exact component={Movies} />
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
)
