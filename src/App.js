import './App.css';
import {useState} from "react";

function App() {
  const defaultMessage = {
    message: 'xxx',
    version: 'xxx',
    buildNumber: 'xxx'
  };
  const [messageWithVersion, setMessageWithVersion] = useState(defaultMessage);
  const [name, setName] = useState('');

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit() {
    const params = new URLSearchParams({
      name
    });
    fetch('http://localhost:8080/greeting?' + params)
    .then((response) => response.json())
    .then((data) => setMessageWithVersion(data));

  }

  return (
      <div className="App">
        <label>
          Name:
          <input type="text" name="name" onChange={handleChange}/>
        </label>
        <br/>
        <input type="button" value="Submit" onClick={handleSubmit}/>
        <br />
        *************************************************
        <br />
        <label>
          Response from server:  <br />
        </label>
        message: {messageWithVersion.message} <br />
        version: {messageWithVersion.version} <br />
        buildNumber: {messageWithVersion.buildNumber} <br />
      </div>
  );
}

export default App;
