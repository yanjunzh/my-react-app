import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import Examples from './examples/Examples';
import QuestionList from './QuestionList';
import Todos from './todos/Todos';
import TodoDetails from './todos/TodoDetails';

function App() {
  const [on, setOn] = useState(false);
  const [todo, setTodo] = useState(0);
  function switchBody() {
    setOn(!on);
  };

  return (
    <div className="App">
      <header className="App-header">
        <TodoDetails todoNum={todo} goback={() => setTodo(0)}>
          <DefaultHeader />
        </TodoDetails>
        <p>
          <input type="button" value="switch body" onClick={switchBody} />
        </p>
      </header>
      <body className="App-body">
        {on ? <Todos onClickDo={setTodo} /> : <QuestionList />}
      </body>
    </div>
  );
}

function DefaultHeader() {
  return (
          <div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <br />
          <a
            className="App-link"
            href="/examples"
            target="_blank"
            rel="noopener noreferrer"
          >
            Examples
          </a>
          <Examples />
          </div> 
        );
}

export default App;
