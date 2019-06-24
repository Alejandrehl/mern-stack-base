import React, {Fragment, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'
import ArticleContext from '../../context/article/articleContext'
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MaterialLink from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const Navbar = ({ title, icon }) => {
    const classes = useStyles();

    const authContext = useContext(AuthContext)
    const { isAuthenticated, logout, loadUser } = authContext

    const articleContext = useContext(ArticleContext)
    const { clearArticles } = articleContext

    useEffect( () => {
      loadUser()
      // eslint-disable-next-line
    }, [])

    const onLogout = () => {
        logout()
        clearArticles()
    }

    const sections = [
        'Tecnología',
        'Diseño',
        'Cultura',
        'Negocios',
        'Política',
        'Opinión',
        'Ciencia',
        'Salud',
        'Estilo',
        'Viajes',
      ];

    return (
        <Fragment>
            <Container maxWidth="lg">
                <CssBaseline />
                    <Toolbar className={classes.toolbar}>
                        { !isAuthenticated ?
                            <Button size="small">
                                Suscribir
                            </Button> :
                            <Button size="small">
                                <Link to="/articles" className="black-text">Crear Artículo</Link>
                            </Button>
                        }
                        <Typography
                            component="h2"
                            variant="h5"
                            color="inherit"
                            align="center"
                            noWrap
                            className={classes.toolbarTitle}
                        >
                            <Link to="/" className="black-text">{title}</Link>
                        </Typography>
                        { !isAuthenticated ? 
                            <Button variant="outlined" size="small">
                                <Link to="/login" className="black-text">Ingresar</Link>
                            </Button> :
                            <Fragment>
                                <Button variant="outlined" size="small" onClick={ onLogout }>
                                    Desconectar
                                </Button>
                            </Fragment>
                        }
                    </Toolbar>
                    <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                        {sections.map(section => (
                            <MaterialLink
                            color="inherit"
                            noWrap
                            key={section}
                            variant="body2"
                            href="#"
                            className={classes.toolbarLink}
                            >
                            {section}
                            </MaterialLink>
                        ))}
                    </Toolbar>
            </Container>
        </Fragment>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
}

Navbar.defaultProps = {
    title: 'ASCONTLAB',
    icon: 'account_balance'
}

const useStyles = makeStyles(theme => ({
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
      flex: 1,
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
    },
    mainFeaturedPost: {
      position: 'relative',
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
      position: 'relative',
      padding: theme.spacing(3),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(6),
        paddingRight: 0,
      },
    },
    mainGrid: {
      marginTop: theme.spacing(3),
    },
    card: {
      display: 'flex',
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      width: 160,
    },
    markdown: {
      ...theme.typography.body2,
      padding: theme.spacing(3, 0),
    },
    sidebarAboutBox: {
      padding: theme.spacing(2),
      backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
      marginTop: theme.spacing(3),
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      marginTop: theme.spacing(8),
      padding: theme.spacing(6, 0),
    },
  }));

export default Navbar
