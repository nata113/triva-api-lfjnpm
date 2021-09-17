import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Questions from "./Questions";

function FormUser() {
    const categorysURL = "https://opentdb.com/api_category.php";
    let arrayCategorys = []
    const [categorys, setCategorys] = useState()
    
    useEffect(() => {
        fectchApi()
    }, []);

    const [infoQuestions, setinfoQuestions] = useState({
        user: "",
        categoryId: "",
        difficulty: ""
    })

    const fectchApi = async () => {
        const response = await fetch(categorysURL);
        console.log(response.status);
        const responseJSON = await response.json();
        arrayCategorys = responseJSON.trivia_categories;
        setCategorys(arrayCategorys);
    }

    const handleInputChange = (e) => {
        setinfoQuestions({
          ...infoQuestions, 
          [e.target.name] : e.target.value,
        })    
      }
      
    let history = useHistory();
    const onSubmit = () => {
        console.log(infoQuestions.user);
        console.log(infoQuestions.categoryId);
        console.log(infoQuestions.difficulty);
        history.push(`/questions`, { info: infoQuestions });
    } 



    return (
        <form onSubmit={onSubmit} className="start">
            <label >
                
                <input name="user" className="startInput"
                onChange={handleInputChange} value={infoQuestions.user} placeholder="Usuario" type="text" required/>
            </label>
            <label>
                <select required name="categoryId" onChange={handleInputChange} className="startInput">
                    {!categorys ? <option>Cargando</option> :
                        categorys.map((cat) => {
                            return (<option key={cat.id} value={cat.id} >{cat.name}</option>)
                        })}
                </select>
            </label>
            <label>
                <select required name="difficulty" onChange={handleInputChange} className="startInput">
                    <option selected value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </label>
            <input type="submit" value="Submit" className="startButton"/>
        </form>
    );
}

export default FormUser;
