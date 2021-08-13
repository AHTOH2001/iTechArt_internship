import React from 'react';
import {Route, Switch} from 'react-router-dom'

import './App.css';

import HomePage from './components/pages/homepage/homepage.component'
import ShopPage from './components/pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInUpPage from './components/pages/sign-in-up/sign-in-up.component'


function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/shop' component={ShopPage}/>
                <Route path='/signin' component={SignInUpPage}/>
            </Switch>
        </div>
    );
}

export default App;
