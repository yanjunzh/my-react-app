
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
        3. <input type="button" value="IN PROGRESS" onClick={() => onClickDo(3)} /> UserPage with userInfo and friend list.
      </p>
    </div>
  );
}

export default Todos;
