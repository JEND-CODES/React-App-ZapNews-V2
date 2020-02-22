import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { InfoProvider } from './components/context';

import * as serviceWorker from './serviceWorker';

// Après le Router Import mentionner ici l'import BrowserRouter 
import { BrowserRouter as Router } from 'react-router-dom';



// Retravailler le scroll on top pour chaque transition vers une page ou article ? react-router scroll to top on every transition ? Cf. https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition / Cf. https://www.npmjs.com/package/react-router-scroll-top / Cf. https://stackoverflow.com/questions/51009130/scroll-to-top-on-react-react-router-dom-page-change

ReactDOM.render(
    <InfoProvider>

    <Router>
        <App />
    </Router>

    </InfoProvider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
