
import "./ExpenseItem.css";
import {useState} from "react";


function ExpenseItem(probs) {

  
// const expDate = new Date("10/24/2021");
// const expTitle = "House Rent";
// const expAmount = 10000;

//let title = probs.title;


const [title,setTitle] = useState(probs.title);

const clickHandler = () => {
 setTitle("Changed!!");

};
debugger
console.log(probs.expDate);

    return (
      <div className="expense-item">
        <div> {probs.expDate.toLocaleDateString()} </div>
        <div className="expense-item__description">
          <h3> {title} </h3>
          <div className="expense-item__price"> {probs.amount  } </div>
        </div>

<button onClick={clickHandler}> Change Title </button>
        
      </div>
    ); //return jsx
}

export default ExpenseItem;