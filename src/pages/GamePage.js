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
            currentActivity = <LayoutFishing/>;
            break;
        case 1:
            currentActivity = <LayoutForaging/>;
            break;
        case 2:
            currentActivity = <LayoutLogging/>;
            break;
        case 3:
            currentActivity = <LayoutMining/>;
            break;
        case 4:
            currentActivity = <LayoutAlchemy/>;
            break;
        case 5:
            currentActivity = <LayoutSmithing/>;
            break;
        case 6:
            currentActivity = <LayoutCombat/>;
            break;
        default:
            currentActivity = <LayoutFishing/>;
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