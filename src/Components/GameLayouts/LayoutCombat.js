import { Col } from "reactstrap"
import LayoutTitleCard from "./LayoutTitleCard";
import LayoutInventoryCard from "./LayoutInventoryCard";
import LayoutStatCard from "./LayoutStatCard";

const LayoutCombat = () => {
    return (
        <Col xs='12' lg='9' className="game-layout">
            <LayoutTitleCard activityId='6'/>
            <LayoutInventoryCard/>
            <LayoutStatCard/>
        </Col>
    );
}

export default LayoutCombat;