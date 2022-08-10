import { FormEvent, useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import CompletedFilter from "./Components/completedFilter";
import { Loader } from "./Components/loader";
import SearchBar from "./Components/searchBar";
import SelectUserId from "./Components/selectUserId";
import TodoList from "./Components/todoList";
import { TodoData } from "./types";

function App() {
  const [todo, setTodo] = useState<TodoData[]>([]);
  const [loading, setloading] = useState<boolean>(false);
  const [selectedUserId, setSelectedUserId] = useState<string>("");
  const [filterCompleted, seFilterCompleted] = useState<boolean>(false);
  const [filterData, setFilterData] = useState<TodoData[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

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

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    setTodo(todo.filter((item) => item.title.includes(inputValue)));
  };

  useEffect(() => {
    if (!filterCompleted && !selectedUserId) {
      setFilterData(todo);
    }

    if (filterCompleted) {
      setFilterData(todo.filter((item) => item.completed));
    }

    if (selectedUserId) {
      setFilterData(
        todo.filter((item) => Number(item.userId) === Number(selectedUserId))
      );
    }

    if (filterCompleted && selectedUserId) {
      setFilterData(
        todo.filter(
          (item) =>
            Number(item.userId) === Number(selectedUserId) && item.completed
        )
      );
      console.log(filterData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterCompleted, selectedUserId, todo]);

  const onReset = () => {
    fetchData();
    setInputValue("");
    seFilterCompleted(false);
    setSelectedUserId("");
  };

  return (
    <div className="App">
      <div>
        <FilterContainer>
          <Title>FILTERS</Title>
          <SearchBar
            inputValue={inputValue}
            setInputValue={setInputValue}
            onSearch={onSearch}
          />
          <CompletedFilter
            filterCompleted={filterCompleted}
            seFilterCompleted={seFilterCompleted}
          />
          <SelectUserId
            selectedUserId={selectedUserId}
            setSelectedUserId={setSelectedUserId}
          />
          <ResetFilterButton onClick={onReset}>Reset filters</ResetFilterButton>
        </FilterContainer>
        {loading ? (
          <Loader />
        ) : filterData.length ? (
          <TodoList filteredData={filterData} />
        ) : (
          <div>Nessun risultato</div>
        )}
      </div>
    </div>
  );
}

export default App;

const Title = styled.h2`
  color: #003479;
`;

const ResetFilterButton = styled.h4`
  text-decoration: underline;
  cursor: pointer;
  color: #003479;
`;

const FilterContainer = styled.div`
  background-color: #f4f4f4;
`;
