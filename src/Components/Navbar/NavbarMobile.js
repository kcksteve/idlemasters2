import { useState } from "react";
import { Container, Col, Row } from "reactstrap";
import Logo from '../../assets/img/Logo.png';
import MenuIcon from '../../assets/img/MenuIcon.png'
import NavbarButtons from "./NavbarButtons";

const NavbarMobile = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Container fluid className='m-0 ui-bg'>
            <Row>
                <Col xs='2'>
                    <img src={Logo} alt='idlemasters 2 logo' className='img-fluid mx-0 my-2'/>
                </Col>
                <Col xs='2' className='offset-8'>
                    <img src={MenuIcon} alt='menu icon' className='img-fluid p-2 p-sm-3 p-md-4 my-2 mx-0'/>
                </Col>
            </Row>
            {isOpen && 
                <NavbarButtons/>
            }
        </Container>
    );
}

export default NavbarMobile;