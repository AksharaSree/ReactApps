// import logo from './logo.svg';
// import { useState } from 'react';
import "./App.css";
// import Todo from './components/Todo';
import React from "react";
import { useState } from "react";

import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";


function App() {
  const expenses = [];


  
  expenses.push({
    id:1,
    title: "House Rent",
    expdate: new Date("10/24/2021"),
    amount: "1000",
  });
  expenses.push({
    id:2,
    title: "EMI",
    expdate: new Date("11/11/2021"),
    amount: "25000",
  });
  expenses.push({
    id:3,
    title: "Laptop Service",
    expdate: new Date("11/20/2021"),
    amount: "5000",
  });
  expenses.push({
    id:4,
    title: "Shopping",
    expdate: new Date("12/24/2021"),
    amount: "5000",
  });
  expenses.push({
    id:5,
    title: "Groceries",
    expdate: new Date("11/24/2021"),
    amount: "1000",
  });

  const [expenseArray,setExpenseArray] = useState(expenses);



const addExpenseHandler = (expense) => {
console.log('in App');
  console.log(expense);


  
 // expenses.push(expense);
 // console.log(expenses);

let newExps = [...expenses]
expense.expDate = new Date(expense.expDate);
newExps.push(expense);

setExpenseArray(newExps);

};


  return (
    <div>
      <h1>Lets get started</h1>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items={expenseArray} />
    </div>


      /* <ExpenseItem
        title={expenses[0].title}
        expDate={expenses[0].expdate}
        amount={expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        expDate={expenses[1].expdate}
        amount={expenses[1].amount}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[2].title}
        expDate={expenses[2].expdate}
        amount={expenses[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}  expDate={expenses[3].expdate}
        amount={expenses[3].amount}
      ></ExpenseItem> */
   
  );

  // return (
  // <React.Fragment>

  //   <div className="App">
  //     <h2> Let's get Started!!</h2>
  //   </div>
  //   <div className="App">
  //     <h2> Let's get Started!!</h2>
  //   </div>
  //   </React.Fragment>
  // );

  //return (React.createElement("div",{"className":"bold" }, [React.createElement("h2",{}, "Let's get Started!!"),React.createElement("p",{}, "Hello")]));

  // const [isLoggedIn, setLoggedIn] = useState(false);

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  //   return (<div className="App"> <h1> To-do List </h1>
  // {isLoggedIn? <button className="btn"> Sign Out </button> : <button className="btn"> Sign In </button>}

  //     <Todo title="Learn React" taskDate="10/31/2021"  login={setLoggedIn} userState={isLoggedIn? "Yes": "No"} />
  //     <Todo title="Learn More Html and Css" taskDate="11/07/2021" />
  //     <Todo title="Task complete assignments" taskDate="12/31/2021" />
  //     <Todo title="Task 4" taskDate="10/31/2022" />
  //     <Todo title="Task 5" taskDate="10/31/2022"  />
  //    </div>);
}

export default App;
