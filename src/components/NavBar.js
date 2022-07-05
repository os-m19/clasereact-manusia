import React from 'react';

const NavBar = () => {
    return ( 
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className="container-fluid">
                <a href="#" className="navbar-brand">Mi Marca</a>
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav">
                        <a href="" className="nav-item nav-link active">Inicio</a>
                        <a href="" className="nav-item nav-link">Productos</a>
                        <a href="" className="nav-item nav-link">Contacto</a>
                        <a href="" className="nav-item nav-link disabled" tabindex="-1">Preguntas</a>
                    </div>
                    <div class="navbar-nav ms-auto">
                        <a href="#" className="nav-item nav-link">Login</a>
                    </div>
                </div>
            </div>
        </nav>
     );
}
 
export default NavBar;