import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentActivityRunning, setCurrentActivityRunning } from "../../shared/activitySlice";

const LoadingBar = ({ duration }) => {
    const [progress, setProgress] = useState(0);
    const [elapsed, setElapsed] = useState(0);
    const isRunning = useSelector(selectCurrentActivityRunning);
    const dispatch = useDispatch();

    const startLoop = () => {
        setElapsed(0.1);
        setProgress(0);
    };
    const stopLoop = () => {
        setElapsed(0);
        setProgress(0);
    }

    useEffect(() => {
        if (isRunning) {
            startLoop();
        }
        else {
            stopLoop();
        }
    }, [isRunning]);

    useEffect(() => {
        let myTimeout = null;
        if (elapsed > 0) {
            myTimeout = setTimeout(() => {
                if (progress < 100) {
                    setElapsed(elapsed + 0.1);
                    setProgress(Math.min(elapsed / duration * 100, 100));
                }
                else {
                    setElapsed(0.1);
                    setProgress(0);
                }
            }, 100);
        }
        return () => {
            clearTimeout(myTimeout);
        };
    }, [elapsed]);

    const fillerStyle = {
        width: progress + '%',
        height: '14px',
        backgroundColor: '#AD51F5'
    };

    const backerStyle = {
        width: '100%',
        height: '14px',
        backgroundColor: '#532775'

    };

    return (
        <div style={backerStyle} onClick={() => startLoop()}>
            <div style={fillerStyle}/>
        </div>
    );
}

export default LoadingBar;