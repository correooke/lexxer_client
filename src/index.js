import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';
import appState from './store';

const app = () => (
    <Provider store={appState} >
        <App />
    </Provider>
);
ReactDOM.render(app(), document.getElementById('root'));
registerServiceWorker();


