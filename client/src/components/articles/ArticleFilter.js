import React, { useContext, useRef, useEffect } from 'react'
import ArticleContext from '../../context/article/articleContext'

const ArticleFilter = () => {
    const articleContext = useContext(ArticleContext)
    const { filterArticles, clearFilter, filtered } = articleContext
    const text = useRef('')

    useEffect( () => {
        if (filtered === null) {
            text.current.value = ''
        }
    })

    const onChange = e => {
        if (text.current.value !== '') {
            filterArticles(e.target.value)
        } else {
            clearFilter()
        }
    }

    return (
        <nav>
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input 
                            id="search" 
                            type="search" 
                            onChange={onChange}
                            ref={text} />
                        <label 
                            className="label-icon" 
                            htmlFor="search">
                            <i className="material-icons">
                                search
                            </i>
                        </label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    )
}

export default ArticleFilter
