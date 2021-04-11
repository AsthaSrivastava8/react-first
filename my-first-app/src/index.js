import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counter'
import Counter2 from './components/counter2';

ReactDOM.render(<Counter2 />, document.getElementById('root'));
