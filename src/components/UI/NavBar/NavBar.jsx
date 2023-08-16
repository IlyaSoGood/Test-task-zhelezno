const NavBar = ({children}) => {

    return (
        <div className="navbar">
            <div className='navbar__links'>
                {children}
            </div>
        </div>

    );
};

export default NavBar;