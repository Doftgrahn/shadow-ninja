import React, {useEffect} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
//import styles
import './styles/main.scss';
//Header and Footer
import Header from './containers/general/header/header';
import Footer from './containers/general/footer/footer';
//Routes
import Routes from './routes/routes';

const App = (props) => {

    useEffect(() => {
        console.log(props);
    })

console.log(props);
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
