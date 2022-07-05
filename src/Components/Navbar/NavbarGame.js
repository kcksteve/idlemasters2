import { useState } from "react";
import { Col, Row } from "reactstrap";
import Logo from '../../assets/img/Logo.png';
import MenuIcon from '../../assets/img/MenuIcon.png'
import NavbarButtons from "./NavbarButtons";

const NavbarGame = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Col xs='12' lg='3' className="ui-bg">
            <Row>
                <Col xs='3' lg='12'>
                    <img src={Logo} alt='idlemasters 2 logo' className='img-fluid mx-0 my-4'/>
                </Col>
                <Col xs='2' className='offset-7 d-lg-none'>
                    <img src={MenuIcon}
                    alt='menu icon'
                    className='img-fluid p-2 p-sm-3 p-md-4 my-5 mx-0 clickable'
                    onClick={() => setIsOpen(!isOpen)}
                    />
                </Col>
            </Row>
            {isOpen &&
                <NavbarButtons classPass='d-lg-none'/>
            }
            <NavbarButtons classPass='d-none d-lg-block'/>
        </Col>
    );
}

export default NavbarGame;