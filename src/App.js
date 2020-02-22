import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
/*
import Navbar from './components/layouts/Navbar';
*/
import Footer from './components/layouts/Footer';

import Hamburger from './components/layouts/Hamburger';

// React Router Import
import { Switch, Route } from 'react-router-dom';

// Import Pages
/*
import Home from './components/pages/Home';

import Contacts from './components/pages/Contacts';

import Details from './components/pages/Details';

import News from './components/pages/News';
*/
import NotFoundPage from './components/pages/NotFoundPage';
/*
import ApiTest from './components/pages/ApiTest';

import ApiNews from './components/pages/ApiNews';

import ApiNewsLoops from './components/pages/ApiNewsLoops';
*/
import ApiMapNews from './components/pages/ApiMapNews';
/*
import SliderTest from './components/pages/SliderTest';

import JqueryTests from './components/pages/JqueryTests';
*/
import UsaNews from './components/pages/UsaNews';

import UKNews from './components/pages/UKNews';


// A l'intérieur du Switch -> dans le Route component NotFoundPage -> on n'indique pas de chemin : cela permet de renvoyer par défaut les URLs erronées vers la page erreur 404
// La mention exact path définit par défaut la route de la homepage
function App() {
  return (
    <div>
      {/*<Navbar />*/}

      <Hamburger />

      <Switch>
        
        {/*<Route path="/museum-blog" component={Home} />*/}

        {/*<Route path="/news" component={News} />*/}

        {/*<Route path="/contacts" component={Contacts} />*/}

        {/*<Route path="/details" component={Details} />*/}

        {/*<Route path="/apiTest" component={ApiTest} />*/}

        {/*<Route path="/sliderTest" component={SliderTest} />*/}

        {/*<Route path="/jquerytests" component={JqueryTests} />*/}

        {/* Route vers l'Api News.org*/}
        {/*<Route path="/apiNews" component={ApiNews} />*/}

        {/* Route vers l'Api Loops 2*/}
        {/*<Route path="/apiNewsLoops" component={ApiNewsLoops} />*/}

        {/* Route vers l'Api Loops 3*/}
        <Route exact path="/" component={ApiMapNews} />

        <Route path="/usa-news" component={UsaNews} />

        <Route path="/uk-news" component={UKNews} />

        <Route component={NotFoundPage} />

      </Switch>

      <Footer />
      
    </div>
  );
}

export default App;
