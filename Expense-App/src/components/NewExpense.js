import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";


function NewExpense(probs){

const saveExpenseHandler = (enteredExpenseDate)=>{

    const expData = {
        ...enteredExpenseDate,
        id:Math.random()
    }
    console.log('In New Expense', expData);
    
    probs.onAddExpense(expData);
   
};

    return (
<div className="new-expense">
    <ExpenseForm onSaveExpenseData={saveExpenseHandler}/>
    </div>

    );

}

export default NewExpense;