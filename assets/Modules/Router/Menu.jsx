import { Link } from 'react-router-dom';
import React, {useEffect} from "react"
import "./css/style.css";
import {useLocation} from "react-router-dom";


function Menu({theme}) {
let location = useLocation();
useEffect(() => {
    console.log(location.pathname);

}, [location]);

    return location.pathname === "/" ? (
        <div className="navigation-general p-2">
            <h5 className="text-uppercase text-panini">AuxChamps.fr</h5>
            <div className="navigation-items">
                <nav className="d-flex justify-content-center">
                    <div className="navigation">
                        <Link className="text-navigation text-dark" to={`/plus-d-info`}>
                            En savoir plus</Link>
                        <Link className="text-navigation text-dark" to={`/`}>
                            Le marché</Link>
                        <Link className="text-navigation text-dark text-arrondi" to={`/`}>
                            <i className="fa-solid fa-cart-shopping"></i>
                        </Link>
                        <Link className="text-navigation text-dark text-arrondi" to={`/inscription`}>
                            Connexion/Inscription</Link>
                    </div>
                </nav>
            </div>
        </div>
    ) : (
        <div className="navigation-general-otherpage p-4 bg-navbar">
            <h5 className="text-uppercase text-panini">AuxChamps.fr</h5>
            <div className="navigation-items">
                <nav className="d-flex justify-content-center">
                    <div className="navigation">
                        <Link className="text-navigation text-dark" to={`/plus-d-info`}>
                            En savoir plus</Link>
                        <Link className="text-navigation text-dark" to={`/`}>
                            Le marché</Link>
                        <Link className="text-navigation text-dark text-arrondi" to={`/`}>
                            <i className="fa-solid fa-cart-shopping"></i>
                        </Link>
                        <Link className="text-navigation text-dark text-arrondi" to={`/inscription`}>
                            Connexion/Inscription</Link>
                    </div>
                </nav>
            </div>
        </div>
    );
}
export default Menu;
