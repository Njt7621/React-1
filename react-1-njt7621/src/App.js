import React from 'react';
import './App.css';
import './index.css';
import Headings from './Headings';
import Logo from './Logo';
import Controls from './Controls';
import TextBoxes from './TextBoxes';

function App() {
  return (
    <div className="App">
      <Logo></Logo>
      <Headings></Headings>
      <Controls></Controls>
      <TextBoxes></TextBoxes>
    </div>
  );
}

export default App;
