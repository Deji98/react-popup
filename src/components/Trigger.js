import React from 'react'
import Popup from './Popup';
import {useState} from 'react';

export const Trigger = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    
  return (
    <div>
          <div className="App">
     <main>
      <h1>Pop up</h1> <br />
      <button onClick={() => setButtonPopup(true)}>Open popup</button>
     </main>
     <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>My popup</h3>
        <a href='/Animated'>Anime</a>
      </Popup>
    </div>
    </div>
  )
}
