
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {

//let exps = props.items;

// let arrJSX =  props.items.map(expense => {
//   <ExpenseItem
//    title={expense.title}
//    expDate={expense.expdate}
//    amount={expense.amount}
//  ></ExpenseItem>;
// });


  return (
<Card className="expenses">{props.items.map(expense => 
  <ExpenseItem key={expense.id}
   title={expense.title}
   expDate={expense.expdate}
   amount={expense.amount}
 ></ExpenseItem>)}</Card>
    

    // <Card className="expenses">
    //   <ExpenseItem
    //     title={props.items[0].title}
    //     expDate={props.items[0].expdate}
    //     amount={props.items[0].amount}
    //   ></ExpenseItem>
    //   <ExpenseItem
    //     title={props.items[1].title}
    //     expDate={props.items[1].expdate}
    //     amount={props.items[1].amount}
    //   ></ExpenseItem>

    //   <ExpenseItem
    //     title={props.items[2].title}
    //     expDate={props.items[2].expdate}
    //     amount={props.items[2].amount}
    //   ></ExpenseItem>
    //   <ExpenseItem
    //     title={props.items[3].title}
    //     expDate={props.items[3].expdate}
    //     amount={props.items[3].amount}
    //   ></ExpenseItem>
    // </Card>
  ); //return jsx
}

export default Expenses;
