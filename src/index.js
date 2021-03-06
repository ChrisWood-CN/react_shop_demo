/*eslint-disable*/
import 'babel-polyfill';
import 'url-search-params-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import RouterComponent from './route/router';
import "./assets/css/common/public.css";
import './assets/js/conf/global.js';
import {Provider} from 'react-redux'
import store from './store'
import * as serviceWorker from './serviceWorker';

class Index extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Provider store={store}>
                    <RouterComponent/>
                </Provider>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Index/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
