import { Col, Row } from "reactstrap";
import NavbarButton from "./NavbarButton";
import NAVBARBUTTONS from "./navBarButttonInfo";

const NavbarButtons = () => {
    return (
      NAVBARBUTTONS.map(({id, title, image}) => {
        return (
          <Row key={id}>
            <Col className='py-4'>
              <NavbarButton title={title} image={image}/>
            </Col>
          </Row>
        );
      })
    );
}

export default NavbarButtons;