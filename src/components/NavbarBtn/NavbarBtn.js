import './NavbarBtn.scss';

const NavbarBtn = ({active, title}) => {
    return(
        <button className={`navbar-btn ${active ? 'active' : ''}`}>
            {title}
        </button>
    )
};

export default NavbarBtn; 