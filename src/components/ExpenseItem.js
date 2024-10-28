import React from 'react';
import { BiEditAlt,BiSolidTrash  } from "react-icons/bi";
import "./ExpenseItem.css"
const ExpenseItem = ({expense, handleEdit, handleDelete}) => {
  return (
    <li className='item'>
      <div className='info'>
        <span className='expense'>{expense.charge}</span>
        <span className='amount'>{expense.amount}</span>
      </div>
      <div>
        <button
          onClick={() => handleEdit(expense.id)}
          className='edit-btn'><BiEditAlt /></button>
        <button
          onClick={()=> handleDelete(expense.id)}
          className='clear-btn'><BiSolidTrash /></button>
      </div>
    </li>
  );
}

export default ExpenseItem;