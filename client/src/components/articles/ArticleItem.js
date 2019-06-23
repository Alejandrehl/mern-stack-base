import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import corporateAgent from '../../assets/images/corporate-agent.jpg'
import PropTypes from 'prop-types'
import ArticleContext from '../../context/article/articleContext'

const ArticleItem = ({ article }) => {
    const articleContext = useContext(ArticleContext)
    const { deleteArticle, setCurrent, clearCurrent } = articleContext
    const { _id, title, content, likes } = article

    const onDelete = () => {
        deleteArticle(_id)
        clearCurrent()
    }

    return (
        <Fragment>
            <div className="col s12">
                <div className="card">
                    <div className="card-image">
                        <img src={corporateAgent} alt="Business" />
                        <span className="card-title truncate">{title}</span>
                    </div>
                    <div className="card-content">
                        <p className="truncate">{content}</p>
                    </div>
                    <div className="card-action">
                        <Link to="/">Ver más</Link>
                        <div className="right">
                            <i className="material-icons">star</i>
                            {likes}
                        </div>
                        <hr />
                        <div className="right">
                            <button 
                                onClick={ () => setCurrent(article) }
                                className="btn-floating btn-small waves-effect waves-light blue">
                                <i className="material-icons">edit</i>
                            </button>
                            <button
                                onClick={onDelete}
                                className="btn-floating btn-small waves-effect waves-light red">
                                <i className="material-icons">highlight_off</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

ArticleItem.propTypes = {
    article: PropTypes.object.isRequired,
}

export default ArticleItem
