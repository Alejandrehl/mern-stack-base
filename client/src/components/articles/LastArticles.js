import React from 'react'
import Divider from '@material-ui/core/Divider'
import Spinner from '../layouts/Spinner'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'

const LastArticles = ({articles, loading}) => {
    return (
        <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
            Últimos artículos
            </Typography>
            <Divider />
            { articles !== null && !loading ?
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
            <Spinner />
            } 
        </Grid>
    )
}

export default LastArticles
