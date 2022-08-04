import { Col } from "reactstrap"
import { animated, useSpring} from "react-spring";
import { animLayoutLoad } from "../../shared/animations";
import LayoutTitleCard from "./LayoutTitleCard";
import LayoutInventoryCard from "./LayoutInventoryCard";
import LayoutStatCard from "./LayoutStatCard";

const LayoutMining = () => {
    const divStyle = useSpring(animLayoutLoad);

    return (
        <Col xs='12' lg='9' className="game-layout">
            <animated.div style={divStyle}>
                <LayoutTitleCard activityId='3'/>
                <LayoutInventoryCard/>
                <LayoutStatCard/>
            </animated.div>
        </Col>
    );
}

export default LayoutMining;