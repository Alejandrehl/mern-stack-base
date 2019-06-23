import React, { Fragment, useState, useContext, useEffect } from 'react'
import AlertContext from '../../context/alert/alertContext'
import AuthContext from '../../context/auth/authContext'

const Login = props => {
    const authContext = useContext(AuthContext)
    const { login, error, clearErrors, isAuthenticated } = authContext

    const alertContext = useContext(AlertContext)
    const { setAlert } = alertContext

    useEffect( () => {
        if (isAuthenticated) {
            props.history.push('/home')
        }

        if (error === 'Invalid Credentials') {
            setAlert(error, 'red')
            clearErrors()
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history])

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const { email, password } = user

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value})

    const onSubmit = e => {
        e.preventDefault()
        if (email === '' || password === '') {
            setAlert('Por favor completa todos los campos.', 'red')
        } else {
            login({
                email,
                password
            }) 
        }
    }

    return (
        <Fragment>
            <div className="col s12  m8 l8 offset-l2">
                <div className="card">
                    <div className="card-content center">
                        <span className="card-title">
                            <h3>Account Login</h3>
                        </span>
                        <form
                            className="container"
                            onSubmit={onSubmit} >
                            <div className="row">
                                <div className="input-field">
                                    <input 
                                        id="email" 
                                        name="email" 
                                        type="email" 
                                        className="validate"
                                        value={email}
                                        onChange={onChange}
                                        required />
                                    <label htmlFor="email">Correo electrónico</label>
                                </div>
                                <div className="input-field">
                                    <input 
                                        id="password" 
                                        name="password" 
                                        type="password" 
                                        className="validate"
                                        value={password}
                                        onChange={onChange}
                                        required />
                                    <label htmlFor="password">Contraseña</label>
                                </div>
                                <div className="input-field">
                                    <button className="btn waves-effect waves-light" type="submit" name="action">
                                        Confirmar <i className="material-icons right">send</i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Login
