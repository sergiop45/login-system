import React, { Component } from 'react';
import './style.css'

class Form extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(

            <div className='tela'>
                
                <form className='formLogin'>

                    <h2>Fazer Login</h2>

                    <label>Usuario</label>
                    <input type="text" />

                    <label>Senha</label>
                    <input type="password" />

                    <button>Entrar</button>

                    <a href='#'>Não é usuario? Faça seu cadastro aqui.</a>

                </form>

            </div>

        );
    }

}

export default Form;