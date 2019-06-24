import React from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const Sidebar = () => {
    const classes = useStyles();

    const archives = [
        'Julio 2019',
        'Junio 2019',
        'Mayo 2019',
        'Abril 2019',
      ];
      
      const social = ['LinkedIn'];
    return (
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
    )
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

export default Sidebar
