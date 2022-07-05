import { Row, Col } from "reactstrap";
import IconChest from '../../assets/img/IconChest.png';
import { selectActivities } from "../../shared/activitySlice";
import { useSelector } from "react-redux";

const LayoutInventoryCard = () => {
    return (
        <Row className='ui-bg mx-lg-5 mx-1 my-5 py-4'>
            <Row>
                <Col xs='12'>
                    <img src={IconChest} alt='inventory icon' className='card-icon'/>
                    <h1 className="card-title">Inventory</h1>
                </Col>
            </Row>
            <Row className='pt-5 justify-content-center'>
                {useSelector(selectActivities).map(({ id, title, image, hasInventory, isConsumable, resource }) => {
                    if (hasInventory) {
                        return (
                            <Col xs='4' lg='2' key={ id }>
                                <img
                                    src={ image }
                                    alt={ "inventory icon " + title }
                                    className={'inv-icon' + ( isConsumable ? " clickable" : "" )}
                                />
                                <p className='inv-text'>{resource}</p>
                            </Col>
                        )
                    }
                    return null;
                })}
            </Row>
        </Row>
    );
}

export default LayoutInventoryCard;