import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTitleActions } from "../../redux/actioms";

const MainPage = () => {

    const mainTitle = useSelector(state => state.mainReducer.title)

    const dispatch = useDispatch() 
   

    return (
        <div>
            <h1>{mainTitle}</h1>
            <button onClick={() => dispatch(changeTitleActions())}>change title</button>
        </div>
    )
}
export default MainPage