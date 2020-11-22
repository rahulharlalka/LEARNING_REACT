import React from "react";

function NavBar(props){
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>      
            <div style={{float:"left"}} className="navbar-nav">      
                <h4 className="badge badge-pill badge-secondary navbar-item">{props.totalCounters}</h4>
            </div>
        </nav>
    );
}

export default NavBar;