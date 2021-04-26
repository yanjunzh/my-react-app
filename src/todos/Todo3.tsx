import todo3Image from './todo3.png';

function Todo3() {
    return (
        <>
        <div>
          <img src={todo3Image} className="todo-img" alt="todo3Image" />
        </div>
        <a
            className="App-link"
            href="/user_page"
            target="_blank"
            rel="noopener noreferrer"
        >
          User Page
        </a>
        </>
    );
}

export default Todo3;
