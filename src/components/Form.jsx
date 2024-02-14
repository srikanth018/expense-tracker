import React, { useState } from 'react'
import './Form.css'
import axios from 'axios';
function Form(props) {

  const {addExpenses} = props
  const [Title, setTitle] = useState('');
  const [Amount, setAmount] = useState('');
  const [error, setError] = useState({});

  const handleSubmit = (event)=>{
    event.preventDefault();

   let err = {}
 
    if(Title.length<3){
      err.title_err = 'Title length should be greater than 3'      
    }
    if(!Amount){
      err.amount_err = 'Please enter valid Amount'
    }

    if(Object.keys(err).length>0){
      setError({...err})
      return
    }

    axios.post("http://localhost:8000/add-entry")

    addExpenses(Title,Amount)
    setTitle('')
    setAmount('')
  }

  const handleTitle = (e) =>{
    setTitle(e.target.value)
    setError({...error,title_err:''})
  }
  const handleAmount = (e) =>{
    setAmount(parseInt(e.target.value))
    setError({...error,amount_err:''})
  }
  return (
    <>
      <div  >
       <form className='form-card' onSubmit={handleSubmit}>
        <span>Title</span>
          <input 
          type='text' 
          className='form-input'
          placeholder='Enter the title'
          id='title' 
          value={Title}
          onChange={handleTitle}
          />

          {error.title_err ? <div className='form-err'>{error.title_err}</div>:null}

          <span>Amount</span>
          <input 
          type='number' 
          className='form-input'
          placeholder='Enter valid Amount' 
          id='amount'
          value={Amount} 
          onChange={handleAmount}
         />

           {error.amount_err ? <div className='form-err'>{error.amount_err}</div>:null}
        
          <input className='form-btn' type='submit' value="Add"/>
        </form> 
      </div>
      
    </>
  )
}

export default Form
