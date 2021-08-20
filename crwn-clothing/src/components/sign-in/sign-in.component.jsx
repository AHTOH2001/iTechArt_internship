import React from 'react'

import FormInput from "../form-input/form-input.component";

// import './sign-in.styles.scss'
import './sign-in.styles.scss'
import '../custom-button/custom-button.component'
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle, auth} from '../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()

        const {email, password} = this.state
        try {
            auth.signInWithEmailAndPassword(email, password)
            this.setState({email: '', password: ''})
        } catch (error) {
            console.error(error)
        }


    }

    handlechange = event => {
        const {value, name} = event.target

        this.setState({[name]: value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' label='email' handleChange={this.handlechange}
                               value={this.state.email} required/>
                    <FormInput name='password' type='password' label='password' handleChange={this.handlechange}
                               value={this.state.password}
                               required/>
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton type='button' className='google-sign-in' onClick={signInWithGoogle}>Sign In with
                            google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}


export default SignIn
