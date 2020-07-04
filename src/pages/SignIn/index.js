import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'; 
import {signIn} from './SignInActions';

const SignIn = (props) => {
    const {account, signIn} = props;

    const submitHandler = e => {
        e.preventDefault();

        signIn({email: 'alex@testee.com', password: '123445'});
    }

    console.log('*** SignIn.account', account);

    return (
        <div className="container h-100 pt-5">
            <h1>Efetue seu login</h1>

            <div className="d-flex flex-column h-100">
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Senha</label>
                        <input type="password" className="form-control" />
                    </div>

                    <div>
                        <button type="submit" className="btn btn-info btn-round">Entrar</button>
                    </div>
                </form>

                <div className="container text-center fixed-bottom pb-5">
                    <div className="text-muted">Você ainda não tem uma conta?</div>
                    <Link to="/sign-up">Se cadastrar</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {account: state.signIn.account}
}

export default connect(mapStateToProps, {signIn})(SignIn);