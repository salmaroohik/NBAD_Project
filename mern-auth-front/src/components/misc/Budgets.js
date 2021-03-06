import React,{useEffect,useContext,useState} from 'react';
import {useHistory,Link} from "react-router-dom";
import UserContext from "../../context/UserContext";
import Functions from "../layout/Functions"
import ErrorNotice from "./ErrorNotice";
import Axios from 'axios';

const SERVER_URL = require('../../config/config').SERVER_URL;



export default function Budget() {
    const [budgetName,setTitle] =useState();

    const [budget,setBudget] = useState();
    const [error, setError] = useState();
    const {userData,setUserData} = useContext(UserContext);
    const history=useHistory();
    useEffect(()=>{
        if(!userData.user) history.push("/login")
    });
   
    const submit = async (e) => {
        e.preventDefault();
        
        try {
          const token=localStorage.getItem("auth-token");
          const newBudget={budget,budgetName};
          console.log(token);
          console.log(newBudget);
          
          const response = await Axios.post(SERVER_URL+"/budgets",newBudget,{
            headers: {
              'x-auth-token': `${token}`
            }
          });

          if(response.status === 200)
          {
        
            var dropDown_title = document.getElementById("title");
            setTitle(undefined)
            dropDown_title.selectedIndex = "none";
           
            var dropDown_cost = document.getElementById("cost");
            setBudget(undefined)
            dropDown_cost.value = "";
  
            alert("Budget added successfully");
          }


        } catch (err) {
            err.response.data.msg&&setError(err.response.data.msg);
        }   

     


      };
    return (
        <>
        <div className="page">
            {userData.user?(
            <>

            <Functions/>
            <h1>choose budget from below categories </h1>
            
            {error && <ErrorNotice message={error} clearError={() => setError(undefined) }/>}

      <form id="MyForm" className="form" onSubmit={submit}>
            
            <label htmlFor="title">BudgetName</label>
            <select id="title" onChange={(e) => setTitle(e.target.value)}>
                <option value="none" selected disabled hidden> 
                choose budget  
                </option> 
                <option value="DukeEnergy">DukeEnergy</option>
                <option value="Rent">Rent</option>
                <option value="Pharmacy">Pharmacy</option>
                <option value="Grocery">Grocery</option>
                <option value="EatOut">EatOut</option>
                <option value="Recreation">Recreation</option>
                <option value="Miscellaneous">Miscellaneous</option>
            </select>

           


            <label htmlFor="cost">budget</label>
            <input id="cost" type="text"
            onChange={(e) => setBudget(e.target.value)}
            />

            <input type="submit" value="Add Budget" />
      </form>
            </>
            ):
            (<>
                <h2>You are not logged in</h2>
                <Link to="/login">Click here to Log in</Link>
            </>
            )}
        </div>
    
        </>
    )
}