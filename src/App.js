import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form name="contact" method="POST">
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out if you’re human:
              <input name="bot-field" />
            </label>
          </p>
          <p>
            <label>
              Dog’s Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              File: <input type="file" name="test-file" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </header>
    </div>
  );
}

export default App;
