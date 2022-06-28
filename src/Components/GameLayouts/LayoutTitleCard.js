import { Row, Col } from "reactstrap";
import IconChest from '../../assets/img/IconChest.png'
import NAVBARBUTTONS from "../Navbar/navBarButttonInfo";

const LayoutTitleCard = ( { activityName} ) => {
    const actButton = NAVBARBUTTONS.find(act => act.title === activityName)
    const Icon = actButton.image

    return (
        <Row className='ui-bg mx-lg-5 mx-1 my-5 py-4'>
            <Col xs='12'>
                <img src={Icon} alt='inventory icon' className='card-icon'/>
                <h1 className="card-title">{activityName}</h1>
            </Col>
        </Row>
    );
}

export default LayoutTitleCard;