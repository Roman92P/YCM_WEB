import './App.css';
import { useState } from "react";


const content = [
  [
    ""
  ],
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
            <h3><MyButton btn_txt="Login" index="1"/></h3>
            <h3><MyButton btn_txt="Create User" index="2"/></h3>
            <h3><MyButton btn_txt="Create Shop" index="3"/></h3>
        </div>
      </header>
    </div>
  );
}

function MyButton(props) {
  const { btn_txt, index } = props
  const [activeContentIndex, setActiveContentIndex] = useState(0)
  const [isShown, setIsShown] = useState(false)
  return (
    <div>
      <button 
        className={activeContentIndex === index ? "active" : ""}
        onMouseEnter={() => {
          setActiveContentIndex(index)
          setIsShown(true)
        }}
        onMouseDown={() => {
          setActiveContentIndex(0)
          setIsShown(false)
        }}
      > {btn_txt}
      </button>
      {isShown && (
        <div id="tab-content">
            {content[activeContentIndex].map((item) => (
              <span key={item}>{item}</span>
            ))}
        </div>
      )}
    </div>
  );
}

export default App;
