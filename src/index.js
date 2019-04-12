import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import WasmoRouter from './routes';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<WasmoRouter />, document.getElementById('root'));

serviceWorker.register();
