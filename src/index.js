import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ProneApp from './component/ProneApp.js'
import FavouriteTeam from './component/FavouriteTeam.js'
import Select from './component/MultipleSelect.js'
// ProneApp
// FavouriteTeam
ReactDOM.render(<Select />, document.getElementById('root'));
registerServiceWorker();
