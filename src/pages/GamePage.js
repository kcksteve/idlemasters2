import { Container, Row } from "reactstrap";
import NavbarGame from "../Components/Navbar/NavbarGame";
import LayoutFishing from "../Components/GameLayouts/LayoutFishing";
import LayoutForaging from "../Components/GameLayouts/LayoutForaging";
import LayoutLogging from "../Components/GameLayouts/LayoutLogging";
import LayoutMining from "../Components/GameLayouts/LayoutMining";
import LayoutAlchemy from "../Components/GameLayouts/LayoutAlchemy";
import LayoutSmithing from "../Components/GameLayouts/LayoutSmithing";
import LayoutCombat from "../Components/GameLayouts/LayoutCombat";
import Background from '../assets/img/Background.jpg'
import { useSelector } from "react-redux";
import { selectCurrentActivity } from "../shared/activitySlice";

const GamePage = () => {
    let currentActivity = useSelector(selectCurrentActivity).id

    return (
        <Container fluid className='m-0 p-0' style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'}}>
            <Row className="m-0">
                <NavbarGame/>
                {(currentActivity === 0) && <LayoutFishing/>}
                {(currentActivity === 1) && <LayoutForaging/>}
                {(currentActivity === 2) && <LayoutLogging/>}
                {(currentActivity === 3) && <LayoutMining/>}
                {(currentActivity === 4) && <LayoutAlchemy/>}
                {(currentActivity === 5) && <LayoutSmithing/>}
                {(currentActivity === 6) && <LayoutCombat/>}
            </Row>
        </Container>
    );
}

export default GamePage;