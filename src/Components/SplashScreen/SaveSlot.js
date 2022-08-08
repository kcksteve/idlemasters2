import { useSelector, useDispatch } from "react-redux";
import { Button } from "reactstrap";
import DeleteImg from '../../assets/img/delete.png'
import { selectSlotById, setPage, setCurrentSave, loadAllStats } from "../../shared/activitySlice";

const SaveSlot = ({ slotId, setShowNewGameModal, setShowDeleteModal }) => {
    const slotName = useSelector(selectSlotById(slotId)).slotName;
    const slotText = "SAVE #" + slotId + " - " + (slotName ? " " + slotName + " " : "<Empty>");
    const dispatch = useDispatch();
    let slotCanDelete = false;

    if (slotName) {
        slotCanDelete = true;
    }

    return (
        <>
            <Button
                style={{fontSize: 30}}
                className='save-slot-1'
                onClick={() => {
                        dispatch(setCurrentSave(slotId))
                        if (slotName) {
                            dispatch(loadAllStats(''));
                            dispatch(setPage(1));
                        }
                        else {
                            setShowNewGameModal(true);
                        }
                    }
                }
            >
                {slotText}
            </Button>
            <Button
                className='btn-danger save-slot-2 align-items-center justify-content-center'
                disabled={!slotCanDelete}
                onClick={() => {
                    dispatch(setCurrentSave(slotId));
                    setShowDeleteModal(true);
                }}
            >
                <img className="save-slot-delete" alt='delete icon' src={DeleteImg}/>
            </Button>
        </>
    );
}

export default SaveSlot;