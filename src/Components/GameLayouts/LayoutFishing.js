import { Col } from "reactstrap"
import LayoutTitleCard from "./LayoutTitleCard";
import LayoutInventoryCard from "./LayoutInventoryCard";

const LayoutFishing = (props) => {
    return (
        <Col xs='12' lg='9' className="game-layout">
            <LayoutTitleCard activityName='Fishing'/>
            <LayoutInventoryCard/>
        </Col>
    );
}

export default LayoutFishing;