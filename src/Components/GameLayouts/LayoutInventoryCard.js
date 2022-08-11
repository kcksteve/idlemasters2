import { Row, Col } from "reactstrap";
import IconChest from '../../assets/img/IconChest.png';
import { selectActivities, updateStat } from "../../shared/activitySlice";
import { useSelector, useDispatch } from "react-redux";

const LayoutInventoryCard = () => {
    const dispatch = useDispatch();
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
                                    className={'inv-icon' + ( isConsumable && resource > 0 ? " clickable" : "" )}
                                    onClick={() => {
                                        if (isConsumable && resource > 0) {
                                            dispatch(updateStat({
                                                title: title,
                                                property: 'resource',
                                                amount: -1
                                            }));

                                            if (title === 'Fishing') {
                                                dispatch(updateStat({
                                                    title: 'Stamina',
                                                    property: 'resource',
                                                    amount: 10
                                                }));
                                            }
                                            else if (title === 'Alchemy') {
                                                dispatch(updateStat({
                                                    title: 'Health',
                                                    property: 'resource',
                                                    amount: 10
                                                }));
                                            }
                                        }
                                    }}
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