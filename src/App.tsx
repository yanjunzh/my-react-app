import React, { useState } from 'react';

import logo from './logo.svg';
import todo3Image from './todo3.png';
import './App.css';
import Examples from './Examples';

function App() {
  const [on, setOn] = useState(false);
  const [todo, setTodo] = useState(0);
  function switchBody() {
    setOn(!on);
  };

  return (
    <div className="App">
      <header className="App-header">
        <TodoDetails todoNum={todo} />
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

interface TodosProps {
  onClickDo: (i:number) => void
}
function Todos({
  onClickDo
}: TodosProps
) {
  return (
    <div className="Todos">
      <h2>
        TODOs:
      </h2>
      <p>
        1. <input type="button" value="DONE" onClick={() => {onClickDo(1)}} /> 2 subcomponents of App, switch by a button.<br />
        2. <input type="button" value="DONE" onClick={() => {onClickDo(2)}} /> change parent content when click something in todos, use callback.<br />
        3. <input type="button" value="NOT START" onClick={() => onClickDo(3)} /> UserPage with userInfo and friend list.
      </p>
    </div>
  );
}

interface TodoDetailProps {
  todoNum: number
}
function TodoDetails({
  todoNum
}: TodoDetailProps
) {
  const details = () => {
    switch (todoNum) {
      case 1:
        return (
        <p>
          TODO1
        </p>
        );
      case 2:
        return (
          <p>
            define type: <code>onClickDo: (i:number) =&gt; void</code>
          </p>
        );
      case 3:
        return (
          <img src={todo3Image} className="todo-img" alt="todo3Image" />
        );
      default:
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
  }
  return (
    <div className="TodoDetails">
      {details()}
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
