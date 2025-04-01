import React, { useState } from "react";

const PolynomialFunction = () => {
    const [coeffs, setCoeffs] = useState("");
    const [exps, setExps] = useState("");
    const [xValue, setXValue] = useState("");
    const [result, setResult] = useState("");

    const polynomialFunction = (coeffsStr, expsStr, x) => {
        const coeffArr = coeffsStr.trim().split(/\s+/).map(Number);
        const expsArr = expsStr.trim().split(/\s+/).map(Number);
        let result = 0;
        const terms = coeffArr.map((coeff, i) => {
            result += coeff * x ** expsArr[i];
            return `${coeff}x^${expsArr[i]}`;
        });
        return [`f(x) = ${terms.join(" + ")}`, `f(${x}) = ${result}`];
    };

    const calculatePolynomial = (e) => {
        e.preventDefault();
        const x = parseFloat(xValue) || 0;
        const [formula, evalResult] = polynomialFunction(coeffs, exps, x);
        setResult(evalResult);
    };

    return (
        <form onSubmit={calculatePolynomial}>
            <h1>Polynomial Function</h1>
            <label htmlFor="poly-coeffs">Coefficients:</label>
            <input
                type="text"
                id="poly-coeffs"
                value={coeffs}
                onChange={(e) => setCoeffs(e.target.value)}
                placeholder="e.g., 2 3.1 -4 5"
                required
            />
            <label htmlFor="poly-exps">Exponents:</label>
            <input
                type="text"
                id="poly-exps"
                value={exps}
                onChange={(e) => setExps(e.target.value)}
                placeholder="e.g., 5 3 2 1"
                required
            />
            <label htmlFor="poly-x">x Value:</label>
            <input
                type="number"
                id="poly-x"
                value={xValue}
                onChange={(e) => setXValue(e.target.value)}
                required
            />
            <label htmlFor="poly-result">Evaluation:</label>
            <input type="text" id="poly-result" value={result} readOnly />
            <input type="submit" value="Calculate" />
        </form>
    );
};

export default PolynomialFunction;
