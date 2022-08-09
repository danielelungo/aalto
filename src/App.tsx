import { useEffect, useState } from "react";

import "./App.css";
import CompletedFilter from "./Components/completedFilter";
import { Loader } from "./Components/loader";
import SelectUserId from "./Components/selectUserId";
import TodoList from "./Components/todoList";
import { TodoData } from "./types";

function App() {
  const [todo, setTodo] = useState<TodoData[]>([]);
  const [loading, setloading] = useState<boolean>(false);
  const [selectedUserId, setSelectedUserId] = useState<string>("");
  const [filterCompleted, seFilterCompleted] = useState<boolean>(false);

  async function fetchData() {
    setloading(true);
    const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    const res = await data.json();
    setTodo(res);
    setloading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const filteredList = (item: TodoData) => {
    if (filterCompleted && selectedUserId) {
      console.log("perchè non ci entra");

      return Number(item.userId) === Number(selectedUserId) && item.completed;
    }

    if (filterCompleted) {
      return item.completed;
    }
    if (selectedUserId) {
      return Number(item.userId) === Number(selectedUserId);
    }

    return true;
  };

  return (
    <div className="App">
      <CompletedFilter
        filterCompleted={filterCompleted}
        seFilterCompleted={seFilterCompleted}
      />
      <SelectUserId
        selectedUserId={selectedUserId}
        setSelectedUserId={setSelectedUserId}
      />
      {loading ? (
        <Loader />
      ) : (
        todo
          .filter((item) => filteredList(item))
          .map((item) => (
            <TodoList todo={item} />
            // <div key={item.id} style={{ display: "flex" }}>
            //   <div>{item.userId}</div>
            //   <div>{`${item.title}   `} </div>
            //   <div>{item.completed ? "FATTO" : "DAFARE"}</div>
            // </div>
          ))
      )}
    </div>
  );
}

export default App;
