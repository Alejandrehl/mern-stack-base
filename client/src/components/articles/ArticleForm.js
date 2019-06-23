import React, { useState, useContext, useEffect } from 'react'
import ArticleContext from '../../context/article/articleContext'

const ArticleForm = () => {
    const articleContext = useContext(ArticleContext)
    const { addArticle, updateArticle, clearCurrent, current  } = articleContext

    useEffect( () => {
        if (current !== null) {
            setArticle(current)
        } else {
            setArticle({
                title: '',
                content: '',
                active: true,
                likes: 0
            })  
        }
    }, [articleContext, current])

    const [article, setArticle] = useState({
        title: '',
        content: '',
        active: true,
        likes: 0
    })

    const { title, content } = article

    const onChange = e =>
        setArticle({ ...article, [e.target.name]: e.target.value })
    
    const onSubmit = e => {
        e.preventDefault()
        if (current === null) {
            addArticle(article)
        } else {
            updateArticle(article)
        }

        clearAll()
    }

    const clearAll = () => {
        clearCurrent()
    }

    return (
        <form className="col s12" onSubmit={onSubmit}>
            <h3>{ current ? 'Actualizar Artículo' : 'Agregar Artículo' }</h3>
            <div className="row">
                <div className="input-field col s12">
                    <input 
                        name='title'
                        type='text'
                        className='validate'
                        value={title}
                        onChange={onChange} />
                    <label htmlFor='title'>Título</label>
                </div>
                <div className="input-field col s12">
                    <textarea
                        name='content'
                        className='materialize-textarea'
                        value={content}
                        onChange={onChange}>
                    </textarea>
                    <label htmlFor='content'>Contenido</label>
                </div>
                <br/>
                <button 
                    className="btn waves-effect waves-light right" 
                    type="submit" 
                    name="action">
                    { current ? 'Actualizar' : 'Agregar' }
                    <i className="material-icons right">send</i>
                </button>
                {current && (
                    <button 
                        onClick={clearAll}
                        className="waves-effect waves-light btn">
                        <i className="material-icons left">
                            clear_all
                        </i>
                        Limpiar
                    </button>
                )}
            </div>
        </form>
    )
}

export default ArticleForm
