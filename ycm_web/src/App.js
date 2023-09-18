import './App.css';
import { useState } from "react";


const content = [
  [
    "Login into existing YCM account."
  ],
  [
    "Create new user(Customer) account."
  ],
  [
    "Create new Car shop account and start provide services."
  ]

]



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>
            Welcome to YCM - Your car manager!
          </h2>  
        </div>
        <div>
          <table>
            <ul><MyButton btn_txt="Login" index="0"/></ul>
            <ul><MyButton btn_txt="Create User" index="1"/></ul>
            <ul><MyButton btn_txt="Create Shop" index="2"/></ul>
          </table>
        </div>
      </header>
    </div>
  );
}

function MyButton(props) {
  const { btn_txt, index } = props
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  return (
    <div>
      <button
        className={activeContentIndex === index ? "active" : ""}
        onMouseEnter={() => setActiveContentIndex(index)}
      > {btn_txt}
      </button>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
    </div>
  );
}

export default App;
