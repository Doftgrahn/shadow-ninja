import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
//import styles
import './styles/main.scss';
//Header and Footer
import Header from './components/general/header/header';
import Footer from './components/general/footer/footer';
//Routes
import Routes from './routes/routes';

const App = () => {
    return (<div className="App">
        <Router>
            <Header/>
            <main className="route_wrapper">
                <Routes/>
            </main>
            <Footer/>
        </Router>
    </div>);
}

export default App;
