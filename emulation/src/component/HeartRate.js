import {useRef} from "react";

const HeartRate = ({bpm}) => {
    const canvasRef = useRef();


    const createCanvas = () => {
       return <canvas ref={canvasRef}/>
    }

    const start = () => {

    }






}

export default HeartRate;