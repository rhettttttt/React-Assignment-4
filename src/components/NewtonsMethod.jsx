import { useState } from "react";

function NewtonFormula() {
    const [g, setG] = useState();
    const [result, setResult] = useState("");

    function newtonFormula(e) {
        e.preventDefault();

        let currentGuess = parseFloat(g);
        const func = [6, -13, -18, 7, 6];
        const dFunc = [24, -39, -36, 7];
        const tolerance = 1e-8;
        const maxIterations = 100;

        for (let i = 0; i < maxIterations; i++) {
            let funcValue = 0,
                dFuncValue = 0;

            func.forEach((coef, idx) => {
                funcValue += coef * currentGuess ** (func.length - idx - 1);
                if (idx < dFunc.length) {
                    dFuncValue +=
                        dFunc[idx] * currentGuess ** (dFunc.length - idx - 1);
                }
            });

            if (Math.abs(funcValue) < tolerance) {
                break;
            }

            currentGuess -= funcValue / dFuncValue;
        }

        setResult(currentGuess.toFixed(2));
    }

    return (
        <form onSubmit={newtonFormula}>
            <h1>Newton's Formula</h1>
            <label>Root Guess:</label>
            <input
                type="number"
                value={g}
                onChange={(e) => setG(e.target.value)}
                required
            />

            <label>Root Approximation (Result):</label>
            <input type="text" value={result} readOnly />

            <input type="submit" value="Calculate" />
        </form>
    );
}

export default NewtonFormula;
