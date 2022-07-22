import React from 'react';
import CartWidget from './CartWidget/CartWidget';
import {Link} from "react-router-dom";


const NavBar = ({title}) => {
    return ( 
        <>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>{title}</Link>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <Link to={"/"} className="nav-item nav-link active">Todos los productos</Link>
                            <Link to={"/category/1"} className="nav-item nav-link">Remeras</Link>
                            <Link to={"/category/2"} className="nav-item nav-link">Buzos</Link>
                            <Link to={"/category/3"} className="nav-item nav-link" tabIndex="-1">Pantalones</Link>
                        </div>
                        <div className="navbar-nav ms-auto">
                            <Link to={"/"} className="nav-item nav-link">Login</Link>
                        </div>
                        <CartWidget/>
                    </div>
                </div>
            </nav>
        </>
     );
}
 
export default NavBar;