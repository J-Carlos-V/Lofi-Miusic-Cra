import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './navbar.css';

export const NavBar = ({setCategories}) => {

    const [InputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (InputValue.trim().length > 2) {
            setCategories( cats => [InputValue, ...cats]);
            setInputValue('')
        }
    }
    return (
        <div className='container'>
            <nav className="nav-main navbar-expand-sm navbar-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                <img src={"assets/musicicon.jpg"} alt="Lofi Music logo" className="nav-brand"/>
            </Link>
            <div className="navbar-collapse">
                <div className="navbar-nav">
                <ul className="nav-menu">

                    <NavLink 
                        className={ ({isActive}) =>'nav-item nav-link' + (isActive ? 'active' : ' ')} 
                        to="/"
                    >
                        Home
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) =>'nav-item nav-link' + (isActive ? 'active' : ' ')}  
                        to="/about"
                    >
                        About
                    </NavLink>
                    <NavLink 
                        className={ ({isActive}) =>'nav-item nav-link' + (isActive ? 'active' : ' ')} 
                        to="/contact"
                    >
                        Contact
                    </NavLink>
                </ul>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="nav-menu-right">
                <input  
                type='text'
                value={InputValue}
                onChange={(e) => {
                    handleInputChange(e)
                }}
                />
                <button type='button' className='btn' onClick={handleSubmit}>
                <i className="fas fa-search"></i>
                </button>
                </ul>
            </div>   
        </form>


            </nav>
        </div>
            
       

    )
}

NavBar.propTypes = {
    setCategories: PropTypes.func.isRequired
}