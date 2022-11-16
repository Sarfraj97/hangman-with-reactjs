import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import { randomWord } from './functions/SelectedWord';
import Game from './components/Game';
import WrongAttempt from './components/WrongAttempt';
import Notification from './components/Notification';
// import store from './redux/store';
import { notificationPopup, checkWin } from './components/Helpers';
import PopUp from './components/PopUp';

function App() { 
  
  // store.dispatch({
    //   type: "bugAdded",
    //   payload: {
      //     description: "bug1"
      //   }
      // });
      
      // store.subscribe(() => { console.log("Subscribed"); })
      
      // console.log("store",store.getState());
      
      const [selectedWord, setSelectedWord] = useState(randomWord().toLowerCase())
      const [wrongAttempt, setWrongAttempt] = useState([])
      const [correctAttempt, setCorrectAttempt] = useState([])
      const [playable, setPlayable] = useState(true)
      const [showNotification, setShowNotification] = useState(false)
      
      const selectedWordArray = selectedWord.split('')
      
      useEffect(() => {
        const UserAttempt = (letter) => {
          if (selectedWordArray.includes(letter)) {          
            if (!correctAttempt.includes(letter)) {
              setCorrectAttempt([...correctAttempt, letter])
            }
            else {
              notificationPopup( setShowNotification )
            }
          }
          else {
            if (!wrongAttempt.includes(letter)){
              setWrongAttempt([...wrongAttempt, letter])
            }
            else {
              notificationPopup( setShowNotification )
            }
          }
        }
        console.log(checkWin(correctAttempt, wrongAttempt, selectedWord));
        if(checkWin(correctAttempt, wrongAttempt, selectedWord) === 'win'){console.log('WONNNN')}
        const handleKeyDown = event => {
          const { key, keyCode } = event;
          if(playable && keyCode >= 65 && keyCode <= 90){
            const letter = key.toLowerCase();
            // console.log(checkWin(correctAttempt, wrongAttempt, selectedWord), selectedWord)
            UserAttempt(letter);
          }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.addEventListener('keydown', handleKeyDown);
  }, [wrongAttempt, correctAttempt, playable, selectedWordArray])

  return (
    <div>      
      <Header/>
      <input type="text"></input>
      <PopUp correctAttempt={correctAttempt} wrongAttempt={wrongAttempt} selectedWord={selectedWord} setPlayable={setPlayable}/>
      <Game correctAttempt={correctAttempt} selectedWordArray={selectedWordArray}/>
      <WrongAttempt wrongAttempts={wrongAttempt} />
      <Notification showNotification={showNotification}/>
    </div>
  );
}

export default App;
