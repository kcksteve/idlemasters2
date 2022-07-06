import { Container, Row } from "reactstrap";
import NavbarGame from "../Components/Navbar/NavbarGame";
import Background from '../assets/img/Background.jpg'
import { useSelector } from "react-redux";
import { selectCurrentActivity } from "../shared/activitySlice";

const GamePage = () => {
    let currentActivity = useSelector(selectCurrentActivity).component

    return (
        <Container fluid className='m-0 p-0' style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'}}>
            <Row className="m-0">
                <NavbarGame/>
                {currentActivity}
            </Row>
        </Container>
    );
}

export default GamePage;