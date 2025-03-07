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

export default (state, action) => {
    switch(action.type) {
        case GET_ARTICLES:
        case GET_ARTICLES_LIST:
            return {
                ...state,
                articles: action.payload,
                loading: false
            }
        case ADD_ARTICLE:
            return {
                ...state,
                articles: [action.payload, ...state.articles],
                loading: false
            }
        case DELETE_ARTICLE:
            return {
                ...state,
                articles: state.articles.filter( article =>
                    article._id !== action.payload ),
                loading: false
            }
        case CLEAR_ARTICLES:
            return {
                ...state,
                articles: null,
                filtered: null,
                error: null,
                current: null
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
        case UPDATE_ARTICLE:
            return {
                ...state,
                articles: state.articles.map( article => 
                    article._id === action.payload._id ? action.payload : article),
                loading: false
            }
        case FILTER_ARTICLES:
            return {
                ...state,
                filtered: state.articles.filter( article => {
                    const regex = new RegExp(`${action.payload}`, 'gi')
                    return article.title.match(regex) || article.content.match(regex)
                })
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            }
        case ARTICLE_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}