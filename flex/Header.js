import React from 'react';
import '../scss/Header.scss';

const Header = () => {
    return (
        <header className="header flex">
            <div className="header__logo"></div>
            <div className="header__nav">
                <ul className="header__links flex">
                    <li><a href="#">link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                </ul>
                <input className="header__search" type="search"></input>
            </div>
        </header>
    )
}

export default Header;
