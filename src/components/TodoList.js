import todoData from "./../data.json";

const TodoList = () => (
  <div>
    <h1>Todo Liste</h1>

    <div>.. liste von todos ..</div>

    {JSON.stringify(todoData)}
  </div>
);

export default TodoList;
