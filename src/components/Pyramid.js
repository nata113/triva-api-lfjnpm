import { useMemo, useEffect, useContext } from "react";
import { TriviaContext } from "../Context/TriviaContext";
import '../index.css';

const Pyramid = ({ currOption }) => {

    const { ganancias, changeGanancia } = useContext(TriviaContext);

    const moneyPyramid = useMemo(() =>
        [
            { id: 1, amount: " $100" },
            { id: 2, amount: " $200" },
            { id: 3, amount: " $300" },
            { id: 4, amount: " $400" },
            { id: 5, amount: " $500" },
            { id: 6, amount: " $600" },
            { id: 7, amount: " $700" },
            { id: 8, amount: " $800" },
            { id: 9, amount: " $900" },
            { id: 10, amount: " $1000" },
        ].reverse(),
        []
    );

    useEffect(() => {
        currOption > 0 &&
            changeGanancia(moneyPyramid.find((m) => m.id === currOption + 1).amount);
    }, [moneyPyramid, currOption]);


    return (

        <ul className="moneyList">
            {moneyPyramid.map(m => (
                <li className={currOption + 1 === m.id ? "moneylistItem active" : "moneylistItem"}>
                    <span className="moneyListItemNumber">{m.id}</span>
                    <span className="moneyListItemAmount">{m.amount}</span>
                </li>
            ))}
        </ul>
    )
};

export default Pyramid




