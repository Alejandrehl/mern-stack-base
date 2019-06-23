import React, { Fragment, useState, useContext, useEffect } from 'react'
import AlertContext from '../../context/alert/alertContext'
import AuthContext from '../../context/auth/authContext'

const Register = props => {
    const authContext = useContext(AuthContext)
    const { register, error, clearErrors, isAuthenticated } = authContext

    const alertContext = useContext(AlertContext)
    const { setAlert } = alertContext

    useEffect( () => {
        if (isAuthenticated) {
            props.history.push('/home')
        }

        if (error === 'User already exists.') {
            setAlert(error, 'red')
            clearErrors()
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history])

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    })

    const { name, email, password, passwordConfirmation } = user

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value})

    const onSubmit = e => {
        e.preventDefault()
        if (name === '' || email === '' || password === '') {
            setAlert('Por favor completa todos los campos.', 'red')
        } else if (password !== passwordConfirmation) {
            setAlert('Tus contraseñas no coinciden.', 'red')
        } else {
            register({ name, email, password })
        }
    }

    return (
        <Fragment>
            <div className="col s12  m8 l8 offset-l2">
                <div className="card">
                    <div className="card-content center">
                        <span className="card-title">
                            <h3>Account Register</h3>
                        </span>
                        <form
                            className="container"
                            onSubmit={onSubmit} >
                            <div className="row">
                                <div className="input-field">
                                    <input 
                                        id="name" 
                                        name="name" 
                                        type="text" 
                                        className="validate"
                                        value={name}
                                        onChange={onChange}
                                        required />
                                    <label htmlFor="name">Nombre</label>
                                </div>
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
                                        required 
                                        minLength="6"/>
                                    <label htmlFor="password">Contraseña</label>
                                </div>
                                <div className="input-field">
                                    <input 
                                        id="passwordConfirmation" 
                                        name="passwordConfirmation" 
                                        type="password" 
                                        className="validate"
                                        value={passwordConfirmation}
                                        onChange={onChange}
                                        required
                                        minLength="6" />
                                    <label htmlFor="passwordConfirmation">Confirmar Contraseña</label>
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

export default Register
