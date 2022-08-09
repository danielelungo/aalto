import { useEffect, useState } from "react";

import "./App.css";

type TodoData = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [todo, setTodo] = useState<TodoData[]>([]);
  const [loading, setloading] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>();
  const [filterCompleted, seFilterCompleted] = useState<boolean>();

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
    if (filterCompleted && selected) {
      console.log("perchè non ci entra");

      return Number(item.userId) === Number(selected) && item.completed;
    }

    if (filterCompleted) {
      return item.completed;
    }
    if (selected) {
      //console.log("mimi", item.userId, selected, item.userId === selected);
      return Number(item.userId) === Number(selected);
    }

    return true;
  };

  return (
    <div className="App">
      completati
      <input
        type="checkbox"
        defaultChecked={filterCompleted}
        onChange={() => seFilterCompleted(!filterCompleted)}
      />
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        <option value=""></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      {loading ? (
        <div>loading</div>
      ) : (
        todo
          .filter((item) => filteredList(item))
          .map((item) => (
            <div key={item.id} style={{ display: "flex" }}>
              <div>{item.userId}</div>
              <div>{`${item.title}   `} </div>
              <div>{item.completed ? "FATTO" : "DAFARE"}</div>
            </div>
          ))
      )}
    </div>
  );
}

export default App;
