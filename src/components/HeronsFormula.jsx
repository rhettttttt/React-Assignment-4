import React, { useState } from "react";

const HeronsFormula = () => {
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [c, setC] = useState("");
    const [area, setArea] = useState("");

    const calculateArea = (e) => {
        e.preventDefault();
        const aNum = parseFloat(a) || 0;
        const bNum = parseFloat(b) || 0;
        const cNum = parseFloat(c) || 0;
        // Validate triangle inequality
        if (aNum + bNum <= cNum || aNum + cNum <= bNum || bNum + cNum <= aNum) {
            setArea("Invalid Triangle");
            return;
        }
        const s = (aNum + bNum + cNum) / 2;
        const result = Math.sqrt(s * (s - aNum) * (s - bNum) * (s - cNum));
        setArea(result.toFixed(2));
    };

    return (
        <form onSubmit={calculateArea}>
            <h1>Heron's Formula</h1>
            <label htmlFor="heron-a">Side a:</label>
            <input
                type="number"
                id="heron-a"
                value={a}
                onChange={(e) => setA(e.target.value)}
                required
            />
            <label htmlFor="heron-b">Side b:</label>
            <input
                type="number"
                id="heron-b"
                value={b}
                onChange={(e) => setB(e.target.value)}
                required
            />
            <label htmlFor="heron-c">Side c:</label>
            <input
                type="number"
                id="heron-c"
                value={c}
                onChange={(e) => setC(e.target.value)}
                required
            />
            <label htmlFor="heron-result">Area:</label>
            <input type="text" id="heron-result" value={area} readOnly />
            <input type="submit" value="Calculate" />
        </form>
    );
};

export default HeronsFormula;
