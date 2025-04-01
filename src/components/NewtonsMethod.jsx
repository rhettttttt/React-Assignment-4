import React, { useState } from "react";

const NewtonsMethod = () => {
    const [guess, setGuess] = useState("");
    const [approximation, setApproximation] = useState("");

    const newtonsMethod = (
        initialGuess,
        tolerance = 1e-7,
        maxIterations = 100
    ) => {
        const f = (x) => x ** 4 - 6 * x ** 3 + 13 * x ** 2 - 18 * x + 7;
        const fPrime = (x) => 4 * x ** 3 - 18 * x ** 2 + 26 * x - 18;
        let x = initialGuess;
        for (let i = 0; i < maxIterations; i++) {
            const fx = f(x);
            const fpx = fPrime(x);
            if (Math.abs(fpx) < tolerance) break;
            const nextX = x - fx / fpx;
            if (Math.abs(nextX - x) < tolerance) return nextX;
            x = nextX;
        }
        return x;
    };

    const calculateRoot = (e) => {
        e.preventDefault();
        const initialGuess = parseFloat(guess) || 0;
        const root = newtonsMethod(initialGuess);
        setApproximation(root.toFixed(4));
    };

    return (
        <form onSubmit={calculateRoot}>
            <h1>Newton's Method</h1>
            <label htmlFor="newton-guess">Root Guess:</label>
            <input
                type="number"
                id="newton-guess"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                required
            />
            <label htmlFor="newton-result">Approximation:</label>
            <input
                type="text"
                id="newton-result"
                value={approximation}
                readOnly
            />
            <input type="submit" value="Calculate" />
        </form>
    );
};

export default NewtonsMethod;
