import {useEffect, useRef, useState} from "react";

// TODO: look into other implementation of this.
const HeartRate = ({bpm}) => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [edgeSpacing, setEdgeSpacing] = useState(0);
    const [heartRate, setHeartRate] = useState(0);
    const [drawInterval, setDrawInterval] = useState(null);
    const [context, setContext] = useState(null);

    const canvasRef = useRef();

    // Clears and redraws the base canvas
    const clear = (ctx) => {
        // Clear the canvas
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        // Cover background
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, width, height);

        // Draw boarder
        ctx.strokeStyle = "#16ceff";
        ctx.moveTo(width * edgeSpacing, height * edgeSpacing);   // Top Left
        ctx.lineTo(width * (1 - edgeSpacing), height * edgeSpacing); // Top line
        ctx.lineTo(width * (1 - edgeSpacing), height * (1 - edgeSpacing)); // Right Line
        ctx.lineTo(width * edgeSpacing, height * (1 - edgeSpacing)); // Bottom Line
        ctx.lineTo(width * edgeSpacing, height * edgeSpacing); // Left Line
        ctx.stroke();
    }

    // Draws the heart beat
    const draw = (ctx) => {
        // Draw circle
        setTimeout(() => {
            ctx.fillStyle = "#16ceff";
            ctx.beginPath();
            ctx.arc(width * 0.25, height * 0.5, 20, 0, 2 * Math.PI);
            ctx.fill();
        }, 125);

        // Clear the canvas
        clear(ctx);

        // Draw beat
        ctx.fillStyle = "#ff1639";
        ctx.beginPath();
        ctx.arc(width * 0.25, height * 0.5, 15, 0, 2 * Math.PI);
        ctx.fill();
    }

    // When any of the dependencies change
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        setContext(ctx);
        setWidth(ctx.canvas.width);
        setHeight(ctx.canvas.height);
        setEdgeSpacing(0.05);

        // Create a draw interval if one does not exist
        if (drawInterval === null) {
            setDrawInterval(setInterval(() => {
                    draw(context);
                }, 60000 / bpm)
            )
        }

        // If the patient heart rate changes and a beat is being drawn currently
        if (heartRate !== bpm && drawInterval !== null) {
            clearInterval(drawInterval); // Stop the last heart beat draw
            setHeartRate(bpm);  // save the new bpm

            // start drawing beats at the new heart rate
            setDrawInterval(setInterval(() => {
                    draw(context);
                }, 60000 / bpm)
            )
        }
    }, [bpm, context, draw, drawInterval, heartRate])


    return (
        <div style={{width: window.innerWidth * 0.2, height: window.innerHeight * 0.10}}>
            <div style={{position: "absolute"}}>
                <canvas ref={canvasRef} width={window.innerWidth * 0.2} height={window.innerHeight * 0.10}/>
            </div>
            <span style={{
                color: "white",
                fontSize: "30px",
                position: "relative",
                left: width * 0.1,
                top: height * 0.45 - 15,
            }}>{bpm} bpm</span>
        </div>
    )
}

export default HeartRate;