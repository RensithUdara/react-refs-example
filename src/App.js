import logo from './logo.svg';
import './App.css';
import { useRef } from 'react'
import MyInput from './components/MyInput';

function App() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
    //    console.log(inputRef.current.value);
  };

  return (
    <div className="App">
      <MyInput ref={inputRef} />
      {/* <input type='text' ref={inputRef} /> */}
      <button onClick={handleClick}>Focus</button>
    </div>
  );
}

export default App;
