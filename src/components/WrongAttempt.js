import React from 'react'

export default function WrongAttempt({ wrongAttempts }) {
  return (
    <div>WrongAttempt 
      {wrongAttempts.map((word, i) => {
        return <div><p className="answerSpace" key={i}>{word}</p></div>
      })}
    </div>

  )
}
