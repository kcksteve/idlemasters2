import { Col } from "reactstrap"
import LayoutTitleCard from "./LayoutTitleCard";
import LayoutInventoryCard from "./LayoutInventoryCard";
import LayoutStatCard from "./LayoutStatCard";

const LayoutSmithing = () => {
    return (
        <Col xs='12' lg='9' className="game-layout">
            <LayoutTitleCard activityId='5'/>
            <LayoutInventoryCard/>
            <LayoutStatCard/>
        </Col>
    );
}

export default LayoutSmithing;