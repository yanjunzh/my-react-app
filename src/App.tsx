import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [on, setOn] = useState(false);
  const [todo, setTodo] = useState(0);
  function switchBody() {
    setOn(!on);
  };
  function showDetails(todoNum: number) {
    setTodo(todoNum);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload
          <TodoDetails todoNum={todo} />
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
        {on ? <Todos onClickDo={showDetails} /> : <QuestionList />}
      </body>
    </div>
  );
}

interface TodosProps {
  onClickDo: any
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
        1. <input type="button" value="DONE" onClick={onClickDo(1)} /> 2 subcomponents of App, switch by a button.<br />
        2. <input type="button" value="IN PROGRESS" onClick={onClickDo(2)} /> change parent content when click something in todos, use callback.
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
            Problem: not triggered by 'click' todo but 'load' todo; no reaction when click TODO1
          </p>
        );
      default:
        return;
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
        * rewrite parent component not react as expected.<br />
        1. about `ReactDOM.render`, what is `React.StrictMode`, and what root id for?<br />
        2. what difference of class component and function component?
      </p>
    </div>
  );
}

export default App;
