import { FunctionComponent } from "react";
import { TodoData } from "../types";

interface TodoListProps {
  todo: TodoData;
}

const TodoList: FunctionComponent<TodoListProps> = ({ todo }) => {
  return (
    <div key={todo.id} style={{ display: "flex" }}>
      <div>{todo.userId}</div>
      <div>{`${todo.title}   `} </div>
      <div>{todo.completed ? "FATTO" : "DAFARE"}</div>
    </div>
  );
};

export default TodoList;
