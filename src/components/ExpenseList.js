import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css'
import { BiSolidTrash } from "react-icons/bi";
const ExpenseList = ({initialExpenses,handleDelete,handleEdit,clearItems,expenses}) => {
  return (
    <>
      <ul className='list'>
        {initialExpenses.map(expense => {
          return(
            <ExpenseItem 
              key={expense.id} 
              expense={expense} 
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />       
          )
        })}
      </ul>
      {expenses.length > 0 ?
        <button className='btn' onClick={clearItems}>목록 지우기 <BiSolidTrash className='btn-icon' /></button>
        : null
      }      
    </>
  );
}

export default ExpenseList;