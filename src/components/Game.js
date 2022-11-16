import React from 'react'

export default function Game({correctAttempt, selectedWordArray}) {
  // console.log(selectedWordArray)
  return (
    <div>
      {selectedWordArray.map((word, i) => {
        return correctAttempt.includes(word) ? <p className="answerSpace" key={i}>{word}</p> :  <p className="answerSpace blank" key={i}></p>
      })}
    </div>
  )
}

