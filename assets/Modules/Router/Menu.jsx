import { Link } from 'react-router-dom';
import React from "react"
import "./css/style.css";


function Menu({}) {

    return (
        <div className="navigation-general">
            <h4 className="text-uppercase text-panini">AuxChamps.fr</h4>
            <div className="navigation-items">
                <nav className="d-flex justify-content-center">
                    <div className="navigation">
                        <Link className="text-navigation" to={`/plus-d-info`}>
                            <i className="fa-solid fa-shop me-1"></i>
                            En savoir plus</Link>
                        <Link className="text-navigation" to={`/`}>
                            <i className="fa-solid fa-shop me-1"></i>
                            Le marché</Link>
                        <Link className="text-navigation" to={`/`}>
                            <i className="fa-solid fa-shop me-1"></i>
                            Connexion/Inscription</Link>
                    </div>
                </nav>
            </div>

        </div>

    );
}
export default Menu;
