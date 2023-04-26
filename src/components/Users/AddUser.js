import React,{useState} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card"; 
import classes from "./Adduser.module.css";


const AddUsers = props =>{
    const[enteredUsername,setEnteredUsername] =  useState(''); 
    const[enteredAge,setEnteredAge] =  useState(''); 

    const usernameChangeHandler = (event)=>{
        setEnteredUsername(event.target.value);
    }
    const ageChangeHandler = (event)=>{
        setEnteredAge(event.target.value);
    }

    const addUserHandler = (evnet) =>{
        evnet.preventDefault();
        console.log(enteredUsername,enteredAge);
    };

    return(
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" onChange={usernameChangeHandler }></input>
            <label htmlFor="age">Age (Years)</label>
            <input id="age " type="number" onChange={ageChangeHandler }></input>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        
        );
};

export default AddUsers; 