import React, { useContext, useEffect } from 'react';
import ArticleContext from '../../../context/article/articleContext'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Spinner from '../../layouts/Spinner'

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <Link color="inherit" href="https://www.linkedin.com/in/alejandrrhernandez/">
        YouKnowCode
      </Link>
      {' team.'}
    </Typography>
  );
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

const sections = [
  'Technology',
  'Design',
  'Culture',
  'Business',
  'Politics',
  'Opinion',
  'Science',
  'Health',
  'Style',
  'Travel',
];

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
];

const archives = [
  'Julio 2019',
  'Junio 2019',
  'Mayo 2019',
  'Abril 2019',
];

const social = ['LinkedIn'];

export default function Landing() {
  const classes = useStyles();

  const articleContext = useContext(ArticleContext)
  const { articles, getArticlesList, loading } = articleContext

  useEffect( () =>{
      getArticlesList()
      // eslint-disable-next-line
  }, [])

  if (articles !== null && articles.length === 0 && !loading) {
    return <h4>Aún no se han agregado artículos.</h4>
}

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            {/* Increase the priority of the hero background image */}
            {
              <img
                style={{ display: 'none' }}
                src="https://source.unsplash.com/user/erondu"
                alt="background"
              />
            }
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    Title of a longer featured blog post
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    Multiple lines of text that form the lede, informing new readers quickly and
                    efficiently about what&apos;s most interesting in this post&apos;s contents.
                  </Typography>
                  <Link variant="subtitle1" href="#">
                    Continue reading…
                  </Link>
                </div>
              </Grid>
            </Grid>
          </Paper>
          {/* End main featured post */}
          {/* Sub featured posts */}
          <Grid container spacing={4} className={classes.cardGrid}>
            {featuredPosts.map(post => (
              <Grid item key={post.title} xs={12} md={6}>
                <CardActionArea component="a" href="#">
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {post.date}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          {post.description}
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                          Continue reading...
                        </Typography>
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image title"
                      />
                    </Hidden>
                  </Card>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
          {/* End sub featured posts */}
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={12} md={8}>
              <Typography variant="h6" gutterBottom>
                Últimos artículos
              </Typography>
              <Divider />
              {/* AQUI DEBEN IR LOS ULTIMOS 3 POSTS ESCRITOS */}
              { articles !== null && !loading ?
                articles.map(article => (
                  <div className="col s12 m12 l12" key={article._id}>
                    <h2 className="header">{article.title}</h2>
                    <div className="card horizontal">
                      <div className="card-stacked">
                        <div className="card-content">
                          <p>
                            {article.content}
                          </p>
                        </div>
                        <div className="card-action">
                          <a href="#">Leer más</a>
                        </div>
                      </div>
                    </div>
                  </div>
                )) :
                <Spinner />
              } 
            </Grid>
            {/* End main content */}
            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="h6" gutterBottom>
                  Sobre mí
                </Typography>
                <Typography>
                  Profesional con gran capacidad y liderazgo en administración del equipo que tiene a cargo los procesos de contabilidad general en norma chilena e IFRS, Cuentas por Cobrar (Facturación, Análisis y Cobranza), Cuentas por Pagar (imputación de gastos y asociados a la correcta segregación de centros de costos), contabilidad de costos de importación y producción (manejo de costo promedio e implementación de costo estándar, incluyendo análisis de rutas financieras, análisis de absorción y control de gastos de producción y distribución), Supervisión de los departamentos de Tesoreria, RRHH, elaboración y generación de reportes de gestión diarios, semanales, mensuales y anuales (relacionados principalmente con venta y gross margin), preparación de estados financieros locales y reportes a casa matriz (Balance, Estados de Perdidas y Ganancias, Flujo de Efectivo, Tendencia,Ppresupuesto, Plan, etc.). Dichos estados financieros con comentarios comparativos respecto a Budget, Forecast, Last Year y Last Month. Planeamiento y ejecución del proceso presupuestario anual top down y a nivel de centro de costos y unidades de negocios. Coordinación de Auditorias Financieras, Auditorias Tributarias y Auditorias Internas, Control de Inventarios en planta central y tiendas, generación de procedimientos tendientes a crear un buen ambiente de control y mejorar el sistema de control interno (Manual de cuentas, levantamiento del activo fijo y su control, descripción de cargos, etc.).
                  Supervisión y control de los procesos relacionados con impuestos de IVA, Renta y Otros.
                  Participación y Supervisión en la implementación de ERP Oracle EBS módulos financieros y reportes afines. Participación en seminarios internos de la empresa buscando excelencia operacional y financiera, benchmarking con filiales de otros países y perfeccionamiento para la ejecución de buenas practicas de negocio, financieras y contables.
                  Participacion y Supervisión de ERP SAP BO, en modulos Financieros, Producción y de Ventas.
                </Typography>
              </Paper>
              <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Artículos
              </Typography>
              {archives.map(archive => (
                <Link display="block" variant="body1" href="#" key={archive}>
                  {archive}
                </Link>
              ))}
              <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Social
              </Typography>
              {social.map(network => (
                <Link display="block" variant="body1" href="https://www.linkedin.com/in/julio-patricio-hernandez-cisternas-ab9a332b/" key={network}>
                  {network}
                </Link>
              ))}
            </Grid>
            {/* End sidebar */}
          </Grid>
        </main>
      </Container>
      {/* Footer */}
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            ASCONTLAB
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Asesorías contables, tributarías y laborales
          </Typography>
          <MadeWithLove />
        </Container>
      </footer>
      {/* End footer */}
    </React.Fragment>
  )}