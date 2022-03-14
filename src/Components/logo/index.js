import React from 'react';
import { useDispatch } from 'react-redux';
import {checktheaction} from "../../Action/checkAction"


export default function Logo() {
    console.log("home");
    const dispatch = useDispatch();
  const  handleClick=()=>{
        dispatch(checktheaction());
    }
        

    return (
        <div>
            <button onClick={handleClick}>
                class name
            </button>
            
        </div>
    )
}
