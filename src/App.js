import React, { useState, useEffect } from 'react';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import Section4 from './components/Section4/Section4';
import Popup from './components/Popup/Popup';
import ReactGA from 'react-ga';


function App() {

  const trackingId = "UA-176818623-1";

  const [isPopup, setIsPopup] = useState(false)

  useEffect(() => {
    ReactGA.initialize(trackingId);
    ReactGA.pageview(window.location.pathname + window.location.search);

  }, [])

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
