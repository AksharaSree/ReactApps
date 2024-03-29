import { useState } from "react";
import "./ExpenseForm.css"

function ExpenseForm(probs){

// const [enteredTitle,setEnteredTitle] = useState("");
// const [enteredAmount,setEnteredAmount] = useState("");
// const [enteredDate,setEnteredDate] = useState("");

const [userIput,setUserInput]=useState({
enteredTitle: "",
enteredAmount:"",
enteredDate:""
});

const titleChangeHandler = (event) => {

   // var value = event.target.value;
   // setEnteredTitle(value);
 //  setUserInput({...userIput, enteredTitle:event.target.value});

 setUserInput((prevState)=>{
    return {...prevState, enteredTitle:event.target.value}
 });

    
};

const amountChangeHandler = (event) => {

   // var value = event.target.value;
    //setEnteredAmount(value);
  //  setUserInput({...userIput, enteredAmount:event.target.value});
    
  setUserInput((prevState)=>{
    return {...prevState, enteredAmount:event.target.value}
 });

};

const dateChangeHandler = (event) => {

   // var value = event.target.value;
    //setEnteredDate(value);
   // setUserInput({...userIput, enteredDate:event.target.value});
   setUserInput((prevState)=>{
    return {...prevState, enteredDate:event.target.value}
 });
    
};

const submitHandler = (event)=>{

event.preventDefault();

    const expenseData = {
        title: userIput.enteredTitle,
        amount: userIput.enteredAmount,
        expDate: new Date(userIput.enteredDate)
    };
console.log('In Expense Form', expenseData);

probs.onSaveExpenseData(expenseData);

setUserInput((prevState)=>{
    return {...prevState, enteredDate:"", enteredTitle:"",enteredAmount:""}  
});


};

    return (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input id="txtTitle" type="text" onChange={titleChangeHandler} value={userIput.enteredTitle}/>
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={userIput.enteredAmount}/>
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input type="date" min="2021-01-01" max="2022-12-31" onChange={dateChangeHandler} value={userIput.enteredDate}/>
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
          </div>
        </form>
      );
}

export default ExpenseForm;
