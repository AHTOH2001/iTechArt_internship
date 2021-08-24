import React, {useEffect} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import {connect} from "react-redux";

import './App.css';

import HomePage from './components/pages/homepage/homepage.component'
import ShopPage from './components/pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInUpPage from './components/pages/sign-in-up/sign-in-up.component'
import {auth, createUserProfileDocument} from './components/firebase/firebase.utils'
import {setCurrentUser} from './redux/user/user.actions'


function App(props) {
    const {setCurrentUser, currentUser} = props
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
                <Route exact path='/signin' render={currentUser ? (<Redirect to='/'/>) : (<SignInUpPage/>)}/>
            </Switch>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
