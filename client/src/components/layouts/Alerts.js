import React, { useContext } from 'react'
import AlertContext from '../../context/alert/alertContext'

const Alerts = () => {
    const alertContext = useContext(AlertContext)
    const { alerts } = alertContext

    return (
        alerts.length > 0 && alerts.map( alert => (
            <div key={alert.id} className="col s12 m8 l8 offset-l2">
                <div className={`card ${alert.type} darken-1`}>
                    <div className="row">
                        <div className="col s12 m10">
                            <div className="card-content white-text">
                                <i className="material-icons left">info_outline</i>
                                <p>{ alert.msg }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))
    )
}

export default Alerts
