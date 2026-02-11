import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const anniversaryDate = new Date(2025, 11, 12); // December 12, 2025
  const anniversaryMonths = Math.floor((new Date() - anniversaryDate) / (1000 * 60 * 60 * 24 * 30));
  const nicknames = ["honey", "cutie", "bby", "bbg", "sweetheart", "mi amor", "king", "fernando", "boyfriend", "sleepy boy", "babes"];
  let randomizedNickname = nicknames[Math.floor(Math.random() * nicknames.length)];

  const today = new Date();
  const isAnniversary = today.getDate() === 12; // Check if it's the 12th day of any month
  const isValentinesDay = today.getMonth() === 1 && today.getDate() === 14; // Valentines Day
  const isBirthday = today.getMonth() === 5 && today.getDate() === 5; // His birthday (June 5th)

  if (count === 0) {
    return (
      <div>
        <img src="front.png" alt="front" />
        {!isAnniversary && !isValentinesDay && !isBirthday && <h1>hi {randomizedNickname}!</h1>}
        {isAnniversary && <h1>hi {randomizedNickname}, happy {anniversaryMonths} months!</h1>}
        {isValentinesDay && <h1>hi {randomizedNickname}, happy v-day!</h1>}
        {isBirthday && <h1>happy birthday {randomizedNickname}!</h1>}
        <button onClick={() => setCount(count + 1)}>(click to continue)</button>
      </div>
    )
  }
  else if (count === 1) {
    return (
      <div>
        <img src="1.jpeg" alt="1" />
        <button onClick={() => setCount(count + 1)}>(click to continue)</button>
      </div>
    )
  }
}

export default App
