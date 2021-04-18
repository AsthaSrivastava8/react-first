import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counter'
import Counters from './components/counters';
import PropTypes from 'prop-types';

 ReactDOM.render(<Counters />, document.getElementById('root'));

