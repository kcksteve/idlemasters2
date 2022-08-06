import { Row, Col, Modal, ModalBody, ModalHeader, Button, Container } from "reactstrap";
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
            <Modal isOpen={true}>
                <ModalHeader className="ui-bg">
                    Welcome Adventurer!
                </ModalHeader>
                <ModalBody className="ui-bg">
                    <p>
                        Finally, you have returned to the land of Ahh. It's still quite dangerous, stay vigilant!
                    </p>
                    <ul>
                        <li>Start you adventure by fishing one of the wonderful lakes. The <b>fish</b> are delicious but also help you regain <b>stamina</b> quickly. Use them by clicking on the <b>fish</b> in your inventory.</li>
                        <li>You will want to have some health <b>potions</b> on hand incase you get injured. Forage the woods to find <b>herbs</b> and <b>logs</b> used to craft these useful items, you can never have too many. Use them by clicking on the <b>potion</b> in your inventory.
                        </li>
                        <li>You're going to need some good gear to defend yourself and speed up your peformance. You can visit the forge to increase your <b>gear</b> level but you will need some <b>ore</b> and <b>wood</b> to keep the forge fires stoked.</li>
                        <li>If your after glory there are plenty of battles to be had and the rewards can be great. Be sure your <b>gear</b> is up to the <b>combat</b> level or you will fall quickly!
                        </li>
                    </ul>
                    <p>
                        What should we call you noble adventurer?
                    </p>
                    <Container>
                        <Row>
                            <Col xs='8'>
                                <Button className="btn-success w-100">Begin Adventure</Button>
                            </Col>
                            <Col xs='4'>
                                <Button className="btn-danger w-100">Cancel</Button>
                            </Col>
                        </Row>
                    </Container>
                </ModalBody>
            </Modal>
        </animated.div>
    );
}

export default SplashPage;