import logo from './logo.svg';
import './App.css';
import Heading1 from './Components/Heading1';
import Heading2 from './Components/Heading2';
import Heading3 from './Components/Heading3';
import Button from './Components/Button';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <>
      <Heading1></Heading1>
      <Heading2></Heading2>
      <Heading3></Heading3>
      <Button></Button>
    </>
  );
}

export default App;
