import { Col } from "reactstrap"
import LayoutTitleCard from "./LayoutTitleCard";
import LayoutInventoryCard from "./LayoutInventoryCard";
import LayoutStatCard from "./LayoutStatCard";

const LayoutAlchemy = () => {
    return (
        <Col xs='12' lg='9' className="game-layout">
            <LayoutTitleCard activityId='4'/>
            <LayoutInventoryCard/>
            <LayoutStatCard/>
        </Col>
    );
}

export default LayoutAlchemy;