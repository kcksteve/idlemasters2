import { Col, Row } from "reactstrap";
import NavbarButton from "./NavbarButton";
import NAVBARBUTTONS from "./navBarButttonInfo";

const NavbarButtons = () => {
    return (
      NAVBARBUTTONS.map(({id, title, image}) => {
        return (
          <Row className='py-4 nav-button' key={id}>
              <Col>
                <NavbarButton title={title} image={image}/>
              </Col>
          </Row>
        );
      })
    );
}

export default NavbarButtons;