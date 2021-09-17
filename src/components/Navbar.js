import React, {useContext} from "react";
import { useLocation } from "react-router-dom";
import { TriviaContext } from "../Context/TriviaContext";
import "./navbar.css";

export default function Navbar() {

    let info = {}
    const SecondPage = props => {
        const location = useLocation();
        info = location.state.info
    };
    SecondPage();
    const {ganancia} = useContext(TriviaContext);

    return (
        <div className="navbar">
            <div className="nav-item">Jugador: {info.user}</div>
            <div className="nav-item">Nivel: {info.difficulty} </div>
            <div className="nav-item">Ganancia: {ganancia} </div>
        </div>
    )
}