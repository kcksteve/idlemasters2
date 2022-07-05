import { Row, Col } from "reactstrap";
import { selectActivityById } from "../../shared/activitySlice";
import { useSelector } from 'react-redux';

const LayoutTitleCard = ( { activityId } ) => {
    const { title, image } = useSelector(selectActivityById(activityId));

    return (
        <Row className='ui-bg mx-lg-5 mx-1 my-5 py-4'>
            <Col xs='12'>
                <img src={image} alt='inventory icon' className='card-icon'/>
                <h1 className="card-title">{title}</h1>
            </Col>
        </Row>
    );
}

export default LayoutTitleCard;