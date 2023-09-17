import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <MyButton/> */}
        <div>
          <h2>
            Welcome to YCM - Your car manager!
          </h2>  
        </div>
        <div>
            <h3>
              Choose option:
            </h3>
        </div>
        <div>
          <table>
            <ul><MyButton param={"Login"}/></ul>
            <ul><MyButton param={"Create User"}/></ul>
            <ul><MyButton param={"Create Shop"}/></ul>
          </table>
        </div>
      </header>
    </div>
  );
}

function MyButton(main_page_button_opt) {
  return (
    <button>{main_page_button_opt.param}</button>
  );
}

export default App;
