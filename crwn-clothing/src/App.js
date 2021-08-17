import React, {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom'

import './App.css';

import HomePage from './components/pages/homepage/homepage.component'
import ShopPage from './components/pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInUpPage from './components/pages/sign-in-up/sign-in-up.component'
import {auth, createUserProfileDocument} from './components/firebase/firebase.utils'


function App() {
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
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
            <Header currentUser={currentUser}/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/shop' component={ShopPage}/>
                <Route path='/signin' component={SignInUpPage}/>
            </Switch>
        </div>
    );
}

export default App;
