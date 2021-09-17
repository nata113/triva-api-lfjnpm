import React, { createContext, useState } from 'react'

export const TriviaContext = createContext();

const TriviaProvider = (props) => {

    const [ganancia, setGanancia] = useState('$ 0');

    const changeGanancia = (value) => {
        setGanancia(value);
    };


    return (
        <TriviaContext.Provider value={{ ganancia, changeGanancia }}>
            {props.children}
        </TriviaContext.Provider>
    )
};
export default TriviaProvider;