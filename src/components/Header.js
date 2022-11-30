import React from 'react'

export default function Header({ wrongAttempt }) {
  return (
    <>
      <h1>Header</h1>
      <p>Guess the random country word.</p>
      <p>{`You have only  ${6 - wrongAttempt.length} left`}</p>
    </>
  )
}
