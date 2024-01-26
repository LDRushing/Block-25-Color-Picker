import { useState } from 'react';
// Write your Color component here

const Color = ({ color, setSelectedColor }) => { // << Props.color alternative, according to Edwin. 
  return <div onClick={() => setSelectedColor(color)} className={props.color}></div>;
};
const App = () => {
  const [selectedColor, setSelectedColor] = useState(""); 
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="red" setSelectedColor={setSelectedColor}/>
        <Color color="green" setSelectedColor={setSelectedColor}/>
        <Color color="blue" setSelectedColor={setSelectedColor}/>
      </div>
    </div>
  );
};

export default App;
