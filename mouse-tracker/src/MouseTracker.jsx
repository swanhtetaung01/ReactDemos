import { useEffect, useState } from "react";
import './App.css';

function MouseTracker() {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({x: event.clientX, y: event.clientY})
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
    }, []);

    return (
        <div>
            <h1>Mouse Tracker</h1>
            <div>
                <label>X: {mousePosition.x}</label>
                <label>Y: {mousePosition.y}</label>
            </div>
        </div>
    )
}

export default MouseTracker;