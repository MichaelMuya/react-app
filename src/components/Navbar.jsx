import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(prevOpen => !prevOpen);
    };

    return (
        <nav className={`iconh ${isOpen ? 'open' : ''}`}>
            <div className="name">Michael Muya's Portfolio</div>
            <div className="icon">
                <div className="icon_click" onClick={handleToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`menu_links ${isOpen ? 'open' : ''}`}>
                    <li><a href="#about" onClick={handleToggle}>About</a></li>
                    <li><a href="#experience" onClick={handleToggle}>Skills</a></li>
                    <li><a href="#contact" onClick={handleToggle}>Contact</a></li>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
