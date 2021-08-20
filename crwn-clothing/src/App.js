import React, {useEffect} from 'react';
import {Route, Switch} from 'react-router-dom'
import {connect} from "react-redux";

import './App.css';

import HomePage from './components/pages/homepage/homepage.component'
import ShopPage from './components/pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInUpPage from './components/pages/sign-in-up/sign-in-up.component'
import {auth, createUserProfileDocument} from './components/firebase/firebase.utils'
import {setCurrentUser} from './redux/user/user.actions'


function App() {
    useEffect(() => {
        console.log('effect')
        const unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
            if (user) {
                const userRef = await createUserProfileDocument(user)

                userRef.onSnapshot(snapshot => {
                    setCurrentUser({id: snapshot.id, ...snapshot.data()})
                })
            } else {
                setCurrentUser(null)
            }
        })
        return function cleanup() {
            unsubscribeFromAuth()
        }
    })
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

const maxDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, maxDispatchToProps)(App);
