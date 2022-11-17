import React from 'react'

export default function WrongAttempt({ wrongAttempts }) {
  return (
    <div>WrongAttempt 
      {wrongAttempts.map((word, i) => {
        return <p className="answerSpace" key={word.toString()}>{word}</p>
      })}
    </div>

  )
}
