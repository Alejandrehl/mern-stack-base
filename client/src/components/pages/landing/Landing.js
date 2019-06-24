import React, { Fragment } from 'react'
import BusinessImg from '../../../assets/images/business.jpg'
import Button from '@material-ui/core/Button';

const Landing = () => {
    return (
        <Fragment>
            <div className="parallax-container">
                <div className="parallax">
                    <img src={BusinessImg} />
                </div>
            </div>
            <div className="section no-pad-bot" id="index-banner" style={{ marginBottom: '30px' }}>
                <br/><br/>
                <h1 className="header center black-text">ASCONTLAB</h1>
                <div className="center" style={{ marginBottom: '100px' }}>
                    <h5 className="header col s12 light">
                        Asesorías contables, tributarías y laborales
                    </h5>
                </div>
                <div className="center">
                    <Button variant="contained" color="primary">
                        Contactar
                    </Button>
                </div>
                <br/><br/>
            </div>
            <div className="section">
                <div className="row">
                    <div className="col s12 m4 l4">
                        <div className="icon-block">
                            <h2 className="center light-blue-text"><i className="material-icons medium">flash_on</i></h2>
                            <h5 className="center">Speeds up development</h5>
                            <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
                        </div>
                    </div>

                    <div className="col s12 m4">
                        <div className="icon-block">
                            <h2 className="center light-blue-text"><i className="material-icons medium">group</i></h2>
                            <h5 className="center">User Experience Focused</h5>
                            <p className="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
                        </div>
                    </div>

                    <div className="col s12 m4">
                        <div className="icon-block">
                            <h2 className="center light-blue-text"><i className="material-icons medium">settings</i></h2>
                            <h5 className="center">Easy to work with</h5>
                            <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
                        </div>
                    </div>
                </div>

            </div>
            <br/><br/>
        </Fragment>
    )
}

export default Landing
