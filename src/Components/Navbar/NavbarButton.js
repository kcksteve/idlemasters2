import { Col } from "reactstrap";
import NAVBARBUTTONS from "./navBarButttonInfo";

const NavbarButton = ({title, image}) => {
    return (
        <>
            <img src={image} alt={title} className='nav-icon'/>
            <h2 className='nav-text'>{title}</h2>
        </>
    )
}

export default NavbarButton;