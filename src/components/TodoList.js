import todoData from "./../data.json";
import Button from "./Button";
import TodoItem from "./TodoItem";

// Aufgaben:
// 1. Alle todos auflisten, die Todos sind in todoData schon importiert.
// 2. Einzelne Todos löschen mit einfachem Delete Button.
// 3. Einzelne Todos checken / unchecken.
// 4. Todos filtern, zeige nur Todos an die erledigt / nicht erledigt sind.
// 5. Neue Todos hinzufügen.
// 6. Todos sollten gleich bleiben, wenn man die Seite neu lädt.

const TodoList = () => (
  <div>
    <h1>Todo Liste</h1>

    <div>.. liste von todos ..</div>

    <TodoItem>
      Beispiel todo <Button>Löschen</Button>
    </TodoItem>

    {JSON.stringify(todoData)}
  </div>
);

export default TodoList;
