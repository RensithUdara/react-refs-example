import logo from './logo.svg';
import './App.css';
import { useRef } from 'react'

function App() {
  const inputRef = useRef(null);

  const handleClick = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div className="App">
      <input type='text' ref={inputRef} />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
}

export default App;
