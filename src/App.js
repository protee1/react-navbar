import React from 'react';
import Navbar from './components/Navbar'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Productcs';
import Consulting from './components/pages/Consulting';
import ContactUs from './components/pages/ContactUs';
import Signup from './components/pages/SignUp';
import Marketing from './components/pages/Marketing';
import Design from './components/pages/Design';
import Development from './components/pages/Development';

function App(){
return(
    <Router>
    <Navbar/>
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={Services} />
        <Route path='/products' exact component={Products} />
        <Route path='/consulting' exact component={Consulting} />
        <Route path='contact-us' exact component={ContactUs} />
        <Route path='/sign-up' exact component={Signup} />
        <Route path='/marketing' exact component={Marketing} />
        <Route path='/design' exact component={Design} />
        <Route path='/design' exact component={Marketing} />
        <Route path='/development' exact component={Development} />
    </Switch>
    </Router>
)
}
export default App