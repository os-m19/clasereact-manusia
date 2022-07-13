import React from 'react';
import CartWidget from './CartWidget/CartWidget';



const NavBar = ({title}) => {
    return ( 
        <>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className="container-fluid">
                    <a href="#" className="navbar-brand">{title}</a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <a href="" className="nav-item nav-link active">Inicio</a>
                            <a href="" className="nav-item nav-link">Productos</a>
                            <a href="" className="nav-item nav-link">Contacto</a>
                            <a href="" className="nav-item nav-link disabled" tabIndex="-1">Preguntas</a>
                        </div>
                        <CartWidget/>
                        <div className="navbar-nav ms-auto">
                            <a href="#" className="nav-item nav-link">Login</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
     );
}
 
export default NavBar;