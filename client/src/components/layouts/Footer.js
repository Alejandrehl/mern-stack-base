import React from 'react'

const Footer = () => {
    return (
        <footer className="page-footer blue">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">ASCONTLAB</h5>
                        <p className="grey-text text-lighten-4">
                            Profesional con muchos años de experiencia en finanzas de empresas.
                        </p>
                    </div>
                    <div className="col l3 s12">
                        <h5 className="white-text">Redes sociales</h5>
                        <ul>
                            <li><a className="white-text" href="#!">LinkedIn</a></li>
                        </ul>
                    </div>
                    <div className="col l3 s12">
                        <h5 className="white-text">Contacto</h5>
                        <ul>
                            <li><a className="white-text" href="#!">julio@ascontlab.cl</a></li>
                            <li><a className="white-text" href="#!">+56 9 51064709</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    Creado por <a className="blue-text text-lighten-3" href="https://www.linkedin.com/in/alejandrrhernandez/" target="_blank">Alejandro Hernández</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
