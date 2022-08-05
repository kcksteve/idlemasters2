import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import DeleteImg from '../../assets/img/delete.png'
import { selectSlotById } from "../../shared/activitySlice";

const SaveSlot = ({ slotId }) => {
    const slotName = useSelector(selectSlotById(slotId)).slotName;
    const slotText = "SAVE #" + slotId + " " + (slotName ? "<" + slotName + ">" : "<Empty>");
    const slotCanDelete = false;

    if (slotName) {
        slotCanDelete = true;
    }

    return (
        <>
            <Button
                style={{fontSize: 30}}
                className='save-slot-1'
            >
                {slotText}
            </Button>
            <Button
                className='btn-danger save-slot-2 align-items-center justify-content-center'
                disabled={!slotCanDelete}
            >
                <img className="save-slot-delete" alt='delete icon' src={DeleteImg}/>
            </Button>
        </>
    );
}

export default SaveSlot;