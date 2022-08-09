import { Row } from "reactstrap";
import NavbarGame from "../Components/Navbar/NavbarGame";
import { useSelector } from "react-redux";
import { selectCurrentActivity } from "../shared/activitySlice";
import { animated, useSpring } from "react-spring";
import { animPageLoad } from "../shared/animations";
import LayoutFishing from '../Components/GameLayouts/LayoutFishing'
import LayoutForaging from '../Components/GameLayouts/LayoutForaging'
import LayoutLogging from '../Components/GameLayouts/LayoutLogging'
import LayoutMining from '../Components/GameLayouts/LayoutMining'
import LayoutAlchemy from '../Components/GameLayouts/LayoutAlchemy'
import LayoutSmithing from '../Components/GameLayouts/LayoutSmithing'
import LayoutCombat from '../Components/GameLayouts/LayoutCombat'

const GamePage = () => {
    let currentActivityId = useSelector(selectCurrentActivity).id
    const divStyle = useSpring(animPageLoad);

    let currentActivity;

    switch (currentActivityId) {
        case 0:
            currentActivity = <LayoutFishing activityId={currentActivityId}/>;
            break;
        case 1:
            currentActivity = <LayoutForaging activityId={currentActivityId}/>;
            break;
        case 2:
            currentActivity = <LayoutLogging activityId={currentActivityId}/>;
            break;
        case 3:
            currentActivity = <LayoutMining activityId={currentActivityId}/>;
            break;
        case 4:
            currentActivity = <LayoutAlchemy activityId={currentActivityId}/>;
            break;
        case 5:
            currentActivity = <LayoutSmithing activityId={currentActivityId}/>;
            break;
        case 6:
            currentActivity = <LayoutCombat activityId={currentActivityId}/>;
            break;
        default:
            currentActivity = <LayoutFishing activityId={currentActivityId}/>;
    }

    return (
        <animated.div style={divStyle}>
            <Row className="m-0">
                <NavbarGame/>
                {currentActivity}
            </Row>
        </animated.div>
    );
}

export default GamePage;