import React, { useReducer } from 'react'
import axios from 'axios'
import ArticleContext from './articleContext'
import articleReducer from './articleReducer'
import {
    GET_ARTICLES,
    GET_ARTICLES_LIST,
    ADD_ARTICLE,
    DELETE_ARTICLE,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_ARTICLE,
    FILTER_ARTICLES,
    CLEAR_ARTICLES,
    CLEAR_FILTER,
    ARTICLE_ERROR
} from '../types'

const ArticleState = props => {
    const initialState = {
        articles: null,
        current: null,
        filtered: null,
        error: null
    }
    
    const [state, dispatch] = useReducer(articleReducer, initialState)

    // Get Articles
    const getArticles = async () => {
        try {
            const res = await axios.get('/api/articles')
            dispatch({ type: GET_ARTICLES, payload: res.data })
        } catch (err) {
            dispatch({ type: ARTICLE_ERROR, payload: err.response.msg })
        }
    }

    // Get Articles List
    const getArticlesList = async () => {
        try {
            const res = await axios.get('/api/articles/list')
            dispatch({ type: GET_ARTICLES_LIST, payload: res.data })
        } catch (err) {
            dispatch({ type: ARTICLE_ERROR, payload: err.response.msg })
        }
    }

    // Add Article
    const addArticle = async article => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/articles', article, config)
            dispatch({ type: ADD_ARTICLE, payload: res.data })
        } catch (err) {
            dispatch({ type: ARTICLE_ERROR, payload: err.response.msg })
        }
    }

    // Delete Article
    const deleteArticle = async id => {
        try {
            await axios.delete(`/api/articles/${id}`)
            dispatch({ type: DELETE_ARTICLE, payload: id })
        } catch (err) {
            dispatch({ type: ARTICLE_ERROR, payload: err.response.msg })
        }
    }

    // Update Article
    const updateArticle = async article => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.put(`/api/articles/${article._id}`, article, config)
            dispatch({ type: UPDATE_ARTICLE, payload: res.data })
        } catch (err) {
            dispatch({ type: ARTICLE_ERROR, payload: err.response.msg })
        }
    }

    // Clear Articles
    const clearArticles = () => dispatch({ type: CLEAR_ARTICLES })
    
    // Set current Article
    const setCurrent = article => {
        dispatch({ type: SET_CURRENT, payload: article })
    }

    // Clear current Article
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT })
    }

    // Filter Articles
    const filterArticles = text => {
        dispatch({ type: FILTER_ARTICLES, payload: text })
    }

    // Clear Filter
    const clearFilter = () => dispatch({ type: CLEAR_FILTER })

    return (
        <ArticleContext.Provider
            value={{
                articles: state.articles,
                current: state.current,
                filtered: state.filtered,
                error: state.error,
                getArticles,
                getArticlesList,
                addArticle,
                deleteArticle,
                setCurrent,
                clearCurrent,
                updateArticle,
                filterArticles,
                clearArticles,
                clearFilter
            }}>
            { props.children }
        </ArticleContext.Provider>
    )
}

export default ArticleState
