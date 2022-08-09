import { Row, Col } from "reactstrap";
import IconHeart from '../../assets/img/IconHeart.png'
import { useSelector } from "react-redux";
import { selectStats, selectActivityById } from "../../shared/activitySlice";

const LayoutActivityCard = () => {
    const smithing = useSelector(selectActivityById(5));
    return (
        <Row className='ui-bg mx-lg-5 mx-1 my-5 py-4'>
            <Col xs='6'>
                <img src={IconHeart} alt='inventory icon' className='card-icon'/>
                <h1 className="card-title">Stats</h1>
            </Col>
            <Col className='text-right' xs='6'>
                {useSelector(selectStats).map(({title, resource, id}) => {
                    return <p className='stat-text' key={id}>{title} {resource}/100</p>
                })}
                <p className='stat-text' key={smithing.id}>Gear {smithing.resource}/100</p>
            </Col>
        </Row>
    );
}

export default LayoutActivityCard;