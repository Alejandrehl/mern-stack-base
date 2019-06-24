import React, { Fragment, useContext, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ArticleItem from './ArticleItem'
import ArticleForm from './ArticleForm'
import ArticleFilter from './ArticleFilter'
import ArticleContext from '../../context/article/articleContext'
import Spinner from '../layouts/Spinner'

const Articles = () => {
    const articleContext = useContext(ArticleContext)
    const { articles, filtered, getArticles, loading } = articleContext

    useEffect( () =>{
        getArticles()
        // eslint-disable-next-line
    }, [])

    return (
        <Fragment>
            <div className="col s12 m12 l12" style={{ marginBottom: '50px', marginTop: '80px' }}>
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
