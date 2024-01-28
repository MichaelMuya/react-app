const  Navbar= () => {
    return (  
        <nav id="icon">
        <div className="name">Michael Muya's Portfolio</div>
        <div className="icon">
            <div className="icon_click" onclick="alt()">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="menu_links">
                <li><a href="#about" onclick="alt()">About</a></li>
                <li><a href="#experience" onclick="alt()">Skills</a></li>
                <li><a href="#contact" onclick="alt()">Contact</a></li>
             </div>
        </div>
    </nav>
    );
}
 
export default Navbar;