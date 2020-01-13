import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import './styles/main.scss';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
