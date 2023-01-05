import React from "react";
import { Link } from "react-router-dom";

function Header (){
    return (
        <div className="header-container">
            <header>
                <Link to="/"><h1>Keeper</h1></Link>
            </header>
        </div>
    );
}

export default Header;