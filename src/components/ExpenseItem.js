import React from 'react';
import { BiEditAlt,BiSolidTrash  } from "react-icons/bi";
import "./ExpenseItem.css"
const ExpenseItem = (props) => {
  return (
    <li className='item'>
      <div className='info'>
        <span className='expense'>{props.expense.charge}</span>
        <span className='amount'>{props.expense.amount}</span>
      </div>
      <div>
        <button className='edit-btn'><BiEditAlt /></button>
        <button
          onClick={()=> props.handleDelete(props.expense.id)}
          className='clear-btn'><BiSolidTrash /></button>
      </div>
    </li>
  );
}

export default ExpenseItem;