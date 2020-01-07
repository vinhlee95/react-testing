import React from 'react';
import './App.css';

function App() {
	const [text, setText] = React.useState('')

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
				<label htmlFor='app-input'>App input</label>
				<input type='text' id='app-input' onChange={e => setText(e.target.value)} />
      </header>
    </div>
  );
}

export default App;
