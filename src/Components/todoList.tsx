import { FunctionComponent } from "react";
import styled from "styled-components";
import { Title } from "../Css/commonStyledComponents";
import { TodoData } from "../types";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

interface TodoListProps {
  filteredData: TodoData[];
}

const TodoList: FunctionComponent<TodoListProps> = ({ filteredData }) => {
  return (
    <Container>
      <TitleContainer>
        <Title flexNumber={1} style={{ marginLeft: "5%" }}>
          USER ID
        </Title>
        <Title flexNumber={4}>TITLE</Title>
        <Title flexNumber={1}>COMPLETED</Title>
      </TitleContainer>
      {filteredData.map((todo) => (
        <Todo key={todo.id}>
          <UserId>{todo.userId}</UserId>
          <Text>{`${todo.title}   `} </Text>
          <Completed>
            {todo.completed ? (
              <AiOutlineCheck color="#60C3EB" size={"30px"} />
            ) : (
              <AiOutlineClose color="#60C3EB" size={"30px"} />
            )}
          </Completed>
        </Todo>
      ))}
    </Container>
  );
};

export default TodoList;

const Container = styled.div`
  background-color: #f4f4f4;
  margin: 30px;
`;
const TitleContainer = styled.div`
  margin-top: 10px;
  display: flex;
`;
const Text = styled.div`
  flex: 4;
`;
const UserId = styled.div`
  flex: 1;
  margin-left: 5%;
`;

const Completed = styled.div`
  flex: 1;
`;

const Todo = styled.div`
  display: flex;
  background-color: white;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 20px;
  border-bottom-color: #7acae9;
  border-bottom-width: 3px;
  border-bottom-style: solid;
  align-items: center;
`;
