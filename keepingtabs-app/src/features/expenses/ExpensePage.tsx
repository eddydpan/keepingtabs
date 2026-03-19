// import React from 'react'



const ExpenseCard = () => {
  return (
    <>
      <div className="flex flex-row justify-between m-4">
        <div className="flex flex-col">
          <p>Username</p>
          <p>time</p>
          <p>note</p>
        </div>
        <p>amount</p>
      </div>
    </>
  )
}

const ExpensePage = () => {
  return (
    <>
      <div>ExpensePage</div>
      <ExpenseCard />
    </>

  )
}

export default ExpensePage