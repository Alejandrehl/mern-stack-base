import React, { Fragment, useContext, useEffect } from 'react'
import Articles from '../articles/Articles'
import ArticleForm from '../articles/ArticleForm'
import ArticleFilter from '../articles/ArticleFilter'
import AuthContext from '../../context/auth/authContext'

const Home = () => {
    const authContext = useContext(AuthContext)
    useEffect( () => {
        authContext.loadUser()
        // eslint-disable-next-line
    }, [])

    return (
        <Fragment>
            <div className="col s12">
                <div className="col s6">
                    <ArticleForm />
                </div>
                <div className="col s6">
                    <ArticleFilter />
                    <Articles />
                </div>
            </div>
        </Fragment>
    )
}

export default Home
