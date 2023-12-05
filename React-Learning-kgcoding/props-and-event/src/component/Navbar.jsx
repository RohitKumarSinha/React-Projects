import React from "react";
import PropTypes from 'prop-types'

function Navbar(props){
    return(
        <nav className="navbar bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.Title}</a>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">{props.Button}</button>
                 </form>
        </div>
        </nav>
    );
}

Navbar.propTypes = {
    Title: PropTypes.string.isRequired,
    Button: PropTypes.string
  };
Navbar.defaultProps = {
    Title: 'Navbar',
    Button: 'Submit'
};

export default Navbar;