import React from 'react';
import './NavBar.css';
import  {Logo}  from './CartWidget';

export const NavBar = () => {

    return (
      
       <div className="centrarContenido">
        <header className="header">
            <div>
            <a  className="header__img" href="index.html">
            <Logo  /></a>

            {/* <img src=</CartWidget> alt="LOGO" className="header__img"/> */}
        </div>
        <div className="header__nombreEmpresa">
            <h1 className="header__nombreEmpresa__h1"> Tienda de distribución</h1>
            <p className="header__nombreEmpresa__p">Distribuidora de insumos médicos</p>
        </div>
        </header>

        <nav className="navClass">
            <i className="fas fa-bars navClass__i" data-bs-toggle="collapse" href="#collapse8" role="button"></i>
            <ul className="navClass__ul collapse" id="collapse8">
                <a href="#" className="navClass__a navClass__a--activo"><li className="navClass__li" >Productos médicos</li></a>
                <a href="#" className="navClass__a"><li className="navClass__li">Descartables</li></a>
                <a href="#" className="navClass__a"> <li className="navClass__li" >Equipamiento</li></a>
            </ul>
        
        </nav>
        </div>
    )
}

// export const ItemListContainer = (props) => {
//   const listado = props

// }
