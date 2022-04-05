import React, { useState, useEffect, useContext } from "react";
import {FoodContext} from '../App'

function Pizza() {
let context = useContext(FoodContext);


useEffect(()=>{
    console.log(context.data);
   // getData();
  
  });
  

    return (
        <div>
           Pizza !! 
        </div>
    )
}

export default Pizza
