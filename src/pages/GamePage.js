import { Container, Row } from "reactstrap";
import NavbarGame from "../Components/Navbar/NavbarGame";
import LayoutFishing from "../Components/GameLayouts/LayoutFishing";
import Background from '../assets/img/Background.jpg'

const GamePage = () => {
    return (
        <Container fluid className='m-0 p-0' style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'}}>
            <Row className="m-0">
                <NavbarGame/>
                <LayoutFishing/>
            </Row>
        </Container>
    );
}

export default GamePage;