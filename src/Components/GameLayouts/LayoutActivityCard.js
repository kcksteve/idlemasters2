import { Row, Col, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentActivity, selectCurrentActivityRunning, setCurrentActivityRunning } from "../../shared/activitySlice";
import LoadingBar from "./LoadingBar";

const LayoutActivityCard = () => {
    const currentActivity = useSelector(selectCurrentActivity);
    const currentActivityRunning = useSelector(selectCurrentActivityRunning);
    const dispatch = useDispatch();

    return (
        <Row className='ui-bg mx-lg-5 mx-1 my-5 py-4'>
            <Row className="m-0 px-4 pb-5 pt-2">
                <Col xs='12'>
                    <LoadingBar duration={10}/>
                </Col>
            </Row>
            <Row className="m-0 p-0">
                <Col className="ml-3" xs='7'>
                    <Button 
                        className="h-100" 
                        style={{fontSize: '34px', width: '90%'}} 
                        disabled={false}
                        onClick={() => {
                            dispatch(setCurrentActivityRunning(!currentActivityRunning));
                        }}
                        >
                            {currentActivityRunning ? 'Stop' : 'Start'}
                        </Button>
                </Col>
                <Col className='text-right' xs='5'>
                    <p className='stat-text'>Level {currentActivity.level}/100</p>
                    <p className='stat-text'>XP {currentActivity.xp}/100</p>
                </Col>
            </Row>
        </Row>
    );
}

export default LayoutActivityCard;