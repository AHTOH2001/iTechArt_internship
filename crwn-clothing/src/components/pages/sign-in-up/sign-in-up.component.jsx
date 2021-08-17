import React from 'react'

import SignIn from '../../sign-in/sign-in.component'
import SignUp from "../../sign-up/sign-up.component";

import './sign-in-up.styles.scss'


class SignInUpPage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='sign-in-up'>
                <SignIn/>
                <SignUp/>
            </div>
        )
    }

}

export default SignInUpPage