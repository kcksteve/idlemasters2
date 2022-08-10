import { Col } from "reactstrap"
import { animated, useSpring} from "react-spring";
import { animLayoutLoad } from "../../shared/animations";
import LayoutTitleCard from "./LayoutTitleCard";
import LayoutInventoryCard from "./LayoutInventoryCard";
import LayoutStatCard from "./LayoutStatCard";
import LayoutActivityCard from "./LayoutActivityCard";

const LayoutCombat = ({ activityId }) => {
    const divStyle = useSpring(animLayoutLoad);

    return (
            <Col xs='12' lg='9' className="game-layout">
                <animated.div style={divStyle}>
                    <LayoutTitleCard activityId={activityId}/>
                    <LayoutInventoryCard/>
                    <LayoutStatCard/>
                    <LayoutActivityCard/>
                </animated.div>
            </Col>

    );
}

export default LayoutCombat;