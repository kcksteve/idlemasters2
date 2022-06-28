import { Row, Col } from "reactstrap";
import IconChest from '../../assets/img/IconChest.png';

const LayoutInventoryCard = () => {

    return (
        <Row className='ui-bg mx-lg-5 mx-1 my-5 py-4'>
            <Row>
                <Col xs='12'>
                    <img src={IconChest} alt='inventory icon' className='card-icon'/>
                    <h1 className="card-title">Inventory</h1>
                </Col>
            </Row>

        </Row>
    );
}

export default LayoutInventoryCard;