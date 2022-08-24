import React, { Component } from 'react';
import Form from '../form';
import './style.css';

class Login extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='telaLogin'>
               
                <Form />

            </div>
        );
    }

}

export default Login;