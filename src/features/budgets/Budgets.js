import React from 'react'
import { useSelector } from 'react-redux'
import Budget from '../../components/Budget';
import { selectBudgets } from './budgetsSlice';

export default function Budgets() {
  const budgets = useSelector(selectBudgets);
  return (
    <ul className='comments-container'>
      {budgets.map(budget => 
        <Budget
          budget={budget}  
          key={budget.category}
        />
      )}
    </ul>
  )
}
