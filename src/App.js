import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {BrowserRouter} from 'react-router-dom';
// import {HashLink as Link } from 'react-router-hash-link'
// import { Trigger } from './components/Trigger';
import Popup from './components/Popup';
import {useState} from 'react';
import c500 from '../src/Images/c500.png'
import cbeams from '../src/Images/cbeams.png'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';




function App(props) {
  const [buttonPopup, setButtonPopup] = useState(false);
    return  (
    <div className="App">
    
    <main>
      <h1>Pop up</h1> <br />
      <Button onClick={() => setButtonPopup(true)}>Open popup</Button>
     </main>
     <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
     <div className='popup-parent'>
     <div className='popup-halfbody'>
     <div className='popup-header'>
      <p>All</p>
      <p>Reactions</p>
      <p>Medals</p>
      <p>Premium</p>
      <p>Animated</p>
     </div>
     <div className='icon-parent'>
     <div className='popup-bodyicon'>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>500</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>800</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>1900</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>1800</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>700</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>700</p>
     </div>
     </div>
     {/* 2nd */}
     <div className='popup-bodyicon'>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>500</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>800</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>1900</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>1800</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>700</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>700</p>
     </div>
     </div>
     {/* 3rd */}
     <div className='popup-bodyicon'>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>500</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>800</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>1900</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>1800</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>700</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>700</p>
     </div>
     </div>
     {/* 4th */}
     <div className='popup-bodyicon'>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>500</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>800</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>1900</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>1800</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>700</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>700</p>
     </div>
     </div>
     {/* 5th */}
     <div className='popup-bodyicon'>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>500</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>800</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>1900</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>1800</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>700</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>700</p>
     </div>
     </div>
     {/* 6th */}
     <div className='popup-bodyicon'>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>500</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>800</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>1900</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>1800</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>700</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>700</p>
     </div>
     </div>
     {/* 7th */}
     <div className='popup-bodyicon'>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>500</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>800</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>1900</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>1800</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>700</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>700</p>
     </div>
     </div>
     {/* 8th */}
     <div className='popup-bodyicon'>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>500</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>800</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>1900</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>1800</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>700</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>700</p>
     </div>
     </div>
     {/* 9th */}
     <div className='popup-bodyicon'>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>500</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>800</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>1900</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>1800</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>700</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>700</p>
     </div>
     </div>
     {/* 10th */}
     <div className='popup-bodyicon'>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>500</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>800</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>1900</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>1800</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>700</p>
     </div>
     <div className='img-icon'>
     <img width="50px" src={c500} alt='coin1' /> <p>700</p>
     </div>
     </div>
     </div>

     </div>
     <div className='hr-test'>
     <hr  />
     </div>
     <div className='popup-secondhalf'>
      <div>
        <img src={c500} alt='c500'/>
        <h2>Gold Award</h2>
        <p>Gives 100 Reddit Coins and a week of r/lounge access and ad-free browsing.</p>
        <div className='halfbody2-img'><img width='30px' src={cbeams} alt='beams' /><p>500</p> </div>
      </div>
      <div className='body2-checkbox'>
        <input type='checkbox' name='checkbox' />
        <p>Make my gift anonymous</p>
      </div>
      <div className='body2-textarea'>
      <FloatingLabel
        controlId="floatingTextarea"
        label="Optional private message"
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="Optional private message" />
      </FloatingLabel>

      </div>
      <div className='next'>
      <Button>Next</Button>
      </div>
     </div>
     </div>
      </Popup>
      
    </div>
  );
}

export default App;
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// const Tab = createMaterialTopTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }
// import React from 'react'
// import './App.css';
// import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import Homepage from './Pages/Homepage';
// import Loginthemes from './Pages/Loginthemes';
// import Error from "./Pages/Error";
// import Sharedlayout from './Pages/Sharedlayout';
// import Adminmenu from "./Pages/Adminmenu";
// import Metaboxes from './Pages/Metaboxes';
// import Settings from './Pages/Settings';
// import Wp from './Pages/Wp'
// import Branding from './Pages/Branding';
// // import Toggletheme from './Pages/Toggletheme';

// const App = () => {
//   return (
//     <div>
//     {/* <Toggletheme /> */}
//       <BrowserRouter>
// <Routes>
//   <Route path='/' element={<Sharedlayout />}>
//     <Route index element={<Homepage />} />
//     <Route path='LoginThemes' element={<Loginthemes />} />
//     <Route path='Adminmenu' element={<Adminmenu />} />
//     <Route path='Metaboxes' element={<Metaboxes />} />
//     <Route path='Settings' element={<Settings />} />
//     <Route path='Wp' element={<Wp />} />
//     <Route path='Branding' element={<Branding />} />
//   </Route>
//   <Route path='*' element={<Error />} />
// </Routes>
// </BrowserRouter>
//     </div>
//   )
// }

// export default App
