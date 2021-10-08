import {useEffect, useRef, useState} from "react";

const HeartRate = ({bpm}) => {
    const [ctx, setCtx] = useState(null);
    const canvasRef = useRef();


    useEffect(() => {
        setCtx(canvasRef.current.getContext("2d"))

        const width = ctx.canvas.width;
        const height = ctx.canvas.height;
        const edgeSpacing = 0.05;

        // Cover background
        ctx.fillStyle = "#000000";
        ctx.fillRect(0,0, width, height);

        // Draw boarder
        ctx.strokeStyle = "#16ceff";
        ctx.moveTo(width * edgeSpacing,height * edgeSpacing);
        ctx.lineTo(width * (1 - edgeSpacing), height * edgeSpacing);
        ctx.lineTo(width * (1 - edgeSpacing), height * (1 - edgeSpacing));
        ctx.lineTo(width *  edgeSpacing, height * (1 - edgeSpacing));
        ctx.lineTo(width * edgeSpacing,height * edgeSpacing);
        ctx.stroke();
    },[])

    useEffect(() => {
        ctx.strokeStyle = "#24ff2e";
        const midpointHeight = ctx.canvas.height / 2;
        const beginningX = ctx.canvas.width


        if (!bpm) {
            // Draw a flat line with minimum timeout


        } else {
            // Draw heartbeat with specified timeout
            const timeout = bpm * 1 / 60 * 1000; // Convert bpm to Hz in ms

            // Draw pseudo heart beat
        }
    }, [bpm])



 return (
     <div>
         <canvas ref={canvasRef}/>
     </div>
 )
}

export default HeartRate;