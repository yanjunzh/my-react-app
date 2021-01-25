import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [on, setOn] = useState(false);
  function switchBody() {
    setOn(!on);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          <input type="button" value="switch body" onClick={switchBody} />
        </p>
      </header>
      <body className="App-body">
        {on ? <Todos /> : <QuestionList />}
      </body>
    </div>
  );
}
// interface AppBodyProps {
//   content: String;
// }

// function AppBody({content}: AppBodyProps) {
//   if (content = "todos") {
//     return <Todos />
//   } else {
//     return <QuestionList />
//   }
// }

function Todos() {
  return (
    <div className="Todos">
      <h2>
        TODOs:
      </h2>
      <p>
        1. [DONE] 2 subcomponents of App, switch by a button.
        2. [WILL START] change parent content when click something in todos, use callback.
      </p>
    </div>
  );
}

function QuestionList() {
  return (
    <div className="QuestionList">
      <h2>
        Question list:
      </h2>
      <p>
        1. about `ReactDOM.render`, what is `React.StrictMode`, and what root id for?<br />
        2. what difference of class component and function component?
      </p>
    </div>
  );
}

export default App;
