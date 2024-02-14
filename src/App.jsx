import { useEffect, useState } from "react";
import ExpenseItem from "./components/ExpenseItem";
import Form from "./components/Form";
import Income from "./components/Income";
import axios from "axios";

function App() {
  // const [expenses, setExpenses] = useState( [
  //   { id: 1, title: "food", amount: 100 },
  //   { id: 2, title: "education", amount: 1000 },
  //   { id: 3, title: "Movie", amount: -200 },
  //   { id: 4, title: "Fees", amount: -400 }
  // ])


// database connection.............................................
  const [expenses, setExpenses] = useState( [])
  useEffect(()=>{
    axios.get("http://localhost:8000/show-entry")
    .then(res=>{
      console.log(res.data)
      setExpenses(res.data)
    })
    .catch(err => console.log(err));
  },[])
///////////////////////////////////////////////////////////////////


  const addExpenses = (title,amount)=>{
    const newId = expenses[expenses.length-1].id + 1
    setExpenses([...expenses,{id:newId, title:title , amount:amount}])
  }


const deleteExpense = (id)=>{
  setExpenses(expenses.filter((ele)=>ele.id !== id))
}


let income = 0;
let expense = 0;
expenses.forEach((ele)=>{
  if(ele.amount < 0) expense += ele.amount
  else income += ele.amount
})


  return (
    <>
      <Income income = {income} expense={expense}/>
      <Form addExpenses = {addExpenses}/>
      {expenses.map((ele) => (
        <ExpenseItem key={ele._id} id={ele._id} title={ele.category} amount={ele.amount} deleteExpense={deleteExpense} />
      ))}
    </>
  );
}

export default App;
