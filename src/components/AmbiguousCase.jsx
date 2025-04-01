import React, { useState } from "react";

const AmbiguousCase = () => {
    const [angleA, setAngleA] = useState("");
    const [sideA, setSideA] = useState("");
    const [sideB, setSideB] = useState("");
    const [result, setResult] = useState("");

    const calculateCase = (e) => {
        e.preventDefault();
        const angle = parseFloat(angleA) || 0;
        const a = parseFloat(sideA) || 0;
        const b = parseFloat(sideB) || 0;
        const epsilon = 1e-10;
        const h = b * Math.sin(angle * (Math.PI / 180));

        let outcome = "";
        if (angle < 90) {
            if (a < h) outcome = "No Triangle";
            else if (Math.abs(a - h) < epsilon) outcome = "Right Triangle";
            else if (a >= b) outcome = "One Triangle";
            else outcome = "Two Triangles (Ambiguous Case)";
        } else {
            outcome = a > b ? "One Triangle" : "No Triangle";
        }
        setResult(outcome);
    };

    return (
        <form onSubmit={calculateCase}>
            <h1>Ambiguous Case</h1>
            <label htmlFor="ambiguous-angle">Angle A:</label>
            <input
                type="number"
                id="ambiguous-angle"
                value={angleA}
                onChange={(e) => setAngleA(e.target.value)}
                required
            />
            <label htmlFor="ambiguous-a">Side a:</label>
            <input
                type="number"
                id="ambiguous-a"
                value={sideA}
                onChange={(e) => setSideA(e.target.value)}
                required
            />
            <label htmlFor="ambiguous-b">Side b:</label>
            <input
                type="number"
                id="ambiguous-b"
                value={sideB}
                onChange={(e) => setSideB(e.target.value)}
                required
            />
            <label htmlFor="ambiguous-result">Triangle Type:</label>
            <input type="text" id="ambiguous-result" value={result} readOnly />
            <input type="submit" value="Calculate" />
        </form>
    );
};

export default AmbiguousCase;
