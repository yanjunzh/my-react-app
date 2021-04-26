import React from 'react';

import Todo1 from './Todo1';
import Todo2 from './Todo2';
import Todo3 from './Todo3';

interface TodoDetailProps {
  todoNum: number,
  children: any,
  goback: () => void,
}
function TodoDetails({
  todoNum,
  children,
  goback,
}: TodoDetailProps
) {
  const details = () => {
    switch (todoNum) {
      case 1:
        return <Todo1 />;
      case 2:
        return <Todo2 />;
      case 3:
        return <Todo3 />;
      default:
        return children;
    }
  }
  return (
    <div className="TodoDetails">
      <div>
        {details()}
      </div>
      {todoNum > 0 ? <input type="button" value="go back" onClick={goback} /> : <></>}
    </div>
  );
}

export default TodoDetails;
