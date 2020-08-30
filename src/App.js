import React,{ useState } from 'react';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import Section4 from './components/Section4/Section4';
import Popup from './components/Popup/Popup';


function App() {

  const [isPopup,setIsPopup] = useState(false)

  console.log(isPopup);

  return (
    <div className="App">
      <Popup
        isPopup={isPopup}
        setIsPopup={setIsPopup}
      />
      <Section1 
        setIsPopup={setIsPopup}
      />
      <Section2 />
      <Section3 />
      <Section4 
        setIsPopup={setIsPopup}
      />
    </div>
  );
}

export default App;
