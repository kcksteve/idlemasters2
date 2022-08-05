import { Row } from "reactstrap";
import NavbarGame from "../Components/Navbar/NavbarGame";
import { useSelector } from "react-redux";
import { selectCurrentActivity } from "../shared/activitySlice";
import { animated, useSpring } from "react-spring";
import { animPageLoad } from "../shared/animations";

const GamePage = () => {
    let currentActivity = useSelector(selectCurrentActivity).component
    const divStyle = useSpring(animPageLoad);

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