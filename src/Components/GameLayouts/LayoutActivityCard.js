import { Row, Col, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectCanStartActivity, selectCurrentActivity, selectCurrentActivityRunning, setCurrentActivityRunning } from "../../shared/activitySlice";
import LoadingBar from "./LoadingBar";

const LayoutActivityCard = () => {
    const currentActivity = useSelector(selectCurrentActivity);
    const currentActivityRunning = useSelector(selectCurrentActivityRunning);
    const canStartActivivty = useSelector(selectCanStartActivity);
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
                        disabled={!canStartActivivty}
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
            <Row className="mt-5 mb-3 mx-0 p-0">
                <Col  xs='6'>
                    <p className='stat-text text-center'>Reward</p>
                    {currentActivity.reward.map((item) => {
                        return <p key={item.title} className='list-text text-right'>{item.title + " (+" + item.amount + ")"}</p>;
                    })}
                </Col>
                <Col  xs='6'>
                    <p className='stat-text text-center'>Cost</p>
                    {currentActivity.cost.map((item) => {
                        return <p key={item.title} className='list-text text-right'>{item.title + " (-" + item.amount + ")"}</p>;
                    })
                    }
                </Col>
            </Row>
        </Row>
    );
}

export default LayoutActivityCard;