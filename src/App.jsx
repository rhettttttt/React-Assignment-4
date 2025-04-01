import React from "react";
import HeronsFormula from "./components/HeronsFormula";
import AmbiguousCase from "./components/AmbiguousCase";
import NewtonsMethod from "./components/NewtonsMethod";
import PolynomialFunction from "./components/PolynomialFunction";

function App() {
    return (
        <div className="container">
            <HeronsFormula />
            <AmbiguousCase />
            <NewtonsMethod />
            <PolynomialFunction />
        </div>
    );
}

export default App;
