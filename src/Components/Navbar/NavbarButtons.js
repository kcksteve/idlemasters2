import { Col, Row } from "reactstrap";
import NavbarButton from "./NavbarButton";
import { useSelector, useDispatch } from "react-redux";
import { selectActivities, setCurrentActivity } from "../../shared/activitySlice";

const NavbarButtons = ({ classPass }) => {
    const dispatch = useDispatch();
    return (
      useSelector(selectActivities).map(({id, title, image}) => {
        return (
          <Row className={ 'py-4 nav-button clickable ' + classPass }
            key={id}
            onClick={() => dispatch(setCurrentActivity(id))}
          >
              <Col>
                <NavbarButton
                  title={title}
                  image={image}
                />
              </Col>
          </Row>
        );
      })
    );
}

export default NavbarButtons;