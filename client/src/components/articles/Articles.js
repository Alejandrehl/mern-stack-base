import React, { Fragment, useContext, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ArticleItem from './ArticleItem'
import ArticleForm from './ArticleForm'
import ArticleFilter from './ArticleFilter'
import ArticleContext from '../../context/article/articleContext'
import AuthContext from '../../context/auth/authContext'
import Spinner from '../layouts/Spinner'

const Articles = () => {
    const authContext = useContext(AuthContext)
    const articleContext = useContext(ArticleContext)
    const { articles, filtered, getArticles, loading } = articleContext

    useEffect( () =>{
        authContext.loadUser()
        getArticles()
        // eslint-disable-next-line
    }, [])

    // if (articles !== null && articles.length === 0 && !loading) {
    //     return <h4>Debes agregar un artículo</h4>
    // }

    return (
        <Fragment>
            <div className="col s12 m12 l12">
                <ArticleFilter />
                <ArticleForm />
                { articles !== null && !loading 
                    ? 
                    (
                        <TransitionGroup>
                            {filtered !== null 
                            ? filtered.map( article => 
                                <CSSTransition key={article._id} timeout={500} classNames="item">
                                    <ArticleItem article={article} />
                                </CSSTransition>
                                ) 
                            : articles.map( article =>
                                <CSSTransition key={article._id} timeout={500} classNames="item">
                                    <ArticleItem article={article} />
                                </CSSTransition>
                                )}
                        </TransitionGroup>
                    ) 
                        : 
                            <Spinner />
                }
            </div>
        </Fragment>
    )
}

export default Articles
