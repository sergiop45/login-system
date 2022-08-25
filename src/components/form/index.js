import React, { Component } from 'react';
import './style.css'

class Form extends Component {

    constructor(props) {
        
        super(props);
        
        this.state = {
            user: "",
            pass: ""
        }

        this.login = this.login.bind(this);

    }

    login(e) {
        e.preventDefault();
        let usuario = this.state.user;
        let senha = this.state.pass;
        alert("user: " + usuario + " senha: " + senha);
    }


    render() {

        return(

            <div className='tela'>
                
                <form className='formLogin'  >

                    <h2>Fazer Login</h2>

                    <label>Usuario</label>
                    <input type="text" onChange={(e) => this.setState({user: e.target.value})} />

                    <label>Senha</label>
                    <input type="password" onChange={(e) => this.setState({pass: e.target.value})}/>

                    <button onClick={(e) => this.login(e)}>Entrar</button>

                    <a href='#'>Não é usuario? Faça seu cadastro aqui.</a>

                </form>

            </div>

        );
    }

}

export default Form;