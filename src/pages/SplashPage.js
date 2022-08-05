import { Row, Col } from "reactstrap";
import Logo from '../assets/img/Logo.png';
import SaveSlot from "../Components/SplashScreen/SaveSlot";
import { animated, useSpring } from "react-spring";
import { animPageLoad } from "../shared/animations";

const SplashPage = () => {
    const divStyle = useSpring(animPageLoad);

    return(
        <animated.div style={divStyle}>
            <Row className="m-0 d-flex align-items-center justify-content-center game-layout">
                <Col xs='11' lg='8' className="ui-bg ">
                    <Row>
                        <Col>
                            <img src={Logo} alt='idlemasters 2 logo' className='img-fluid mx-0 my-4'/>
                        </Col>
                    </Row>
                    <Row className="justify-content-center py-3">
                        <Col xs='10'>
                            <SaveSlot slotId={1}/>
                        </Col>
                    </Row>
                    <Row className="justify-content-center py-3">
                        <Col xs='10'>
                            <SaveSlot slotId={2}/>
                        </Col>
                    </Row>
                    <Row className="justify-content-center pt-3 pb-5">
                        <Col xs='10'>
                            <SaveSlot slotId={3}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </animated.div>
        
    );
}

export default SplashPage;