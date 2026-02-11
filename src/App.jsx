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

  const memories = [
    { date: "summer 2022", description: "when we became friends", image: "memories/1.jpeg" },
    { date: "1/29/2024 6:32 PM", description: "when you came by to cheer me up", image: "memories/2.jpeg" },
    { date: "8/23/2024 9:15 PM", description: "us at mexican fiesta", image: "memories/3.jpeg" },
    { date: "9/11/2024 9:56 PM", description: "you started coming over more", image: "memories/4.jpeg" },
    { date: "11/9/2024 8:11 PM", description: "our fav spot", image: "memories/5.jpeg" },
    { date: "11/9/2024 10:02 PM", description: "us walking after eating", image: "memories/6.jpeg" },
    { date: "12/21/2024 9:46 PM", description: "the first roses you gave me!", image: "memories/7.jpeg" },
    { date: "1/11/2025 10:27 PM", description: "playing roblox together", image: "memories/8.jpeg" },
    { date: "3/23/2025 12:31 AM", description: "walking out together in our costumes", image: "memories/9.jpeg" },
    { date: "3/28/2025 7:39 PM", description: "sitting on that bench on top of the hill", image: "memories/10.jpeg" },
    { date: "4/26/2025 3:18 PM", description: "us doing hw together", image: "memories/11.jpeg" },
    { date: "5/23/2025 8:04 PM", description: "the most beautiful sunset w the most beautiful boy", image: "memories/12.jpeg" },
    { date: "7/4/2025 7:37 PM", description: "spending j4 w you and your fam", image: "memories/13.jpeg" },
    { date: "8/6/2025 9:35 PM", description: "state fair together on my birthday!!!!!", image: "memories/14.jpeg" },
    { date: "8/6/2025 9:59 PM", description: "bro we gotta learn how to pose w each other", image: "memories/15.jpeg" },
    { date: "8/20/2025 6:33 PM", description: "golfing + drinks", image: "memories/16.jpeg" },
    { date: "9/6/2025 12:36 PM", description: "us looking so so so cute", image: "memories/17.jpeg" },
    { date: "9/15/2025 9:08 AM", description: "you fighting me", image: "memories/18.jpeg" },
    { date: "10/4/2025 4:55 PM", description: "halloween activities together", image: "memories/19.jpeg" },
    { date: "10/20/2025 12:15 PM", description: "chilling at your school", image: "memories/20.JPEG" },
    { date: "11/1/2025 6:08 PM", description: "me bothering you ofc", image: "memories/21.jpeg" },
    { date: "11/8/2025 5:33 PM", description: "more homework together", image: "memories/22.jpeg" },
    { date: "12/1/2025 5:51 PM", description: "omg we are always tired together", image: "memories/23.jpeg" },
    { date: "12/7/2025 12:50 AM", description: "MORE ROBLOX", image: "memories/24.JPEG" },
    { date: "12/12/2025 10:53 PM", description: "WHEN YOU ASKED ME TO BE UR GF", image: "memories/24a.jpeg" },
    { date: "12/20/2025 7:33 PM", description: "we look so awkward", image: "memories/25.jpeg" },
    { date: "12/21/2025 8:39 PM", description: "this whole day was my favorite date!!!", image: "memories/26.jpeg" },
    { date: "1/31/2026 9:15 AM", description: "joking around too much at dennys", image: "memories/27.jpeg" },
    { date: "1/31/2026 8:57 PM", description: "you trying to get a kiss", image: "memories/28.jpeg" },
    { date: "february 2026", description: "heart sign together!", image: "memories/29.JPG" },
  ];
  const [randomMemory, setRandomMemory] = useState(memories[Math.floor(Math.random() * memories.length)]);

  const today = new Date();
  const isAnniversary = today.getDate() === 12; // Check if it's the 12th day of any month
  const isValentinesDay = today.getMonth() === 1 && today.getDate() === 14; // Valentines Day
  const isBirthday = today.getMonth() === 5 && today.getDate() === 5; // His birthday (June 5th)

  if (count === 0) {
    return (
      <div>
        <img src="front.png" alt="heart front page" style={{ border: "transparent", boxShadow: "0 0 0" }} />
        {!isAnniversary && !isValentinesDay && !isBirthday && <h1>hi {randomizedNickname}!</h1>}
        {isAnniversary && <h1>hi {randomizedNickname}, happy {anniversaryMonths} months!</h1>}
        {isValentinesDay && <h1>hi {randomizedNickname}, happy v-day!</h1>}
        {isBirthday && <h1>happy birthday {randomizedNickname}!</h1>}
        <button style={{ margin: "5rem 0 0 0" }} onClick={() => setCount(count + 1)}>click to continue</button>
      </div>
    )
  }
  else if (count === 1) {
    return (
      <div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p>{randomMemory.description}</p>
          <img src={randomMemory.image} alt={randomMemory.description} style={{ width: "25%", height: "25%" }} />
          <p>{randomMemory.date}</p>
          <button style={{ position: "relative" }} onClick={() => setCount(count + 1)}>continue</button>
          <button style={{ position: "relative" }} onClick={() => setRandomMemory(memories[Math.floor(Math.random() * memories.length)])}>refresh photo</button>
        </div>
      </div>
    )
  }
  else if (count === 2) {
    return (
      <div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img src="memories/photobooth.gif" alt="1" style={{ width: "100%", height: "100%" }} />
          <p>12/21/2025</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p style={{ fontSize: "1rem", padding: "1rem", margin: "1rem", backgroundColor: "#dfaaaa", borderRadius: "1rem" }}>mi amor, thank you for helping me grow and become more like myself. despite what i go through, you always shown me respect without judgement. that is the reason why i liked you so much in the first place. you're caring, honest, and a hard worker. and as i've gotten to know you more, i look up to you as inspiration and motivation to get through my days. now, you're my sweet boyfriend and i deeply respect and love you. i am really excited to see what the future holds for us. i want to understand you better as we grow individually and together. i know everything will be great with you by my side. te amo, mi amor. -your gf</p>
          <p style={{ fontSize: "1rem", padding: "1rem", margin: "1rem", backgroundColor: "#dfaaaa", borderRadius: "1rem" }}>also, i will try to update this as our relationship develops. :3 i love you {randomizedNickname}!</p>
          <button style={{ position: "relative" }} onClick={() => setCount(0)}>go home</button>
        </div>
      </div>
    )
  }
}

export default App
