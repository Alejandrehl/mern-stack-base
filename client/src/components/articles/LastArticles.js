import React, { useContext } from 'react'
import ArticleContext from '../../context/article/articleContext'
import Divider from '@material-ui/core/Divider'
import Spinner from '../layouts/Spinner'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'

const LastArticles = () => {
    const articleContext = useContext(ArticleContext)
    const { articles, loading } = articleContext

    return (
        <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
            Últimos artículos
            </Typography>
            <Divider />
            { articles !== null && articles.length &&!loading ?
                articles.map(article => (
                    <div className="col s12 m12 l12" key={article._id}>
                    <h2 className="header truncate">{article.title}</h2>
                    <div className="card horizontal">
                        <div className="card-stacked">
                        <div className="card-content">
                            <p>
                            {article.content}
                            </p>
                        </div>
                        <div className="card-action">
                            <Link to="">Leer más</Link>
                        </div>
                        </div>
                    </div>
                    </div>
            )) :
                !loading ? <h4>Aún no se han agregado artículos.</h4>  : <Spinner /> 
            } 
        </Grid>
    )
}

export default LastArticles
