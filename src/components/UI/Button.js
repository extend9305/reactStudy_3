 import React ,{useState} from "react";
 import classes from "./Button.module.css";
//testtest git branch test
//testtest git branch test2
 const Button = props=>{
    return <button 
        className={classes.button}
        type={props.type || 'button'}
        onClick={props.onClick}
        >
            {props.children}
            
        </button>
 };

 export default Button; 