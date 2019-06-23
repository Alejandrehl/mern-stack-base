import React, {Fragment, useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'
import ArticleContext from '../../context/article/articleContext'

const Navbar = ({ title, icon }) => {
    const authContext = useContext(AuthContext)
    const { isAuthenticated, logout, user } = authContext

    const articleContext = useContext(ArticleContext)
    const { clearArticles } = articleContext

    const onLogout = () => {
        logout()
        clearArticles()
    }

    const authLinks = (
        <Fragment>
            <li>Hola {user && user.name }</li>
            <li>
                <a onClick={onLogout} href="#!">
                    <i className="material-icons">exit_to_app</i>
                </a>
            </li>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <li><Link to="/login">Acceder</Link></li>
            <li><Link to="/register">Registrar</Link></li>
        </Fragment>
    );

    return (
        <nav style={{ marginBottom: '30px' }} className="grey darken-4">
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">
                    <i className="material-icons">{icon}</i>{title}
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    { isAuthenticated ? authLinks : guestLinks }    
                </ul>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
}

Navbar.defaultProps = {
    title: 'MERN Stack Base',
    icon: 'account_balance'
}

export default Navbar
