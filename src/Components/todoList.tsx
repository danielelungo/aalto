import { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { Title } from "../Css/commonStyledComponents";
import { TodoData } from "../types";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import "../App.css";

interface TodoListProps {
  filteredData: TodoData[];
}

const ITEMS_PER_PAGE = 5;

const TodoList: FunctionComponent<TodoListProps> = ({ filteredData }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const offset = currentPage * ITEMS_PER_PAGE;
  const pageCount = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  return (
    <Container>
      <TitleContainer>
        <Title flexNumber={1} style={{ marginLeft: "5%" }}>
          USER ID
        </Title>
        <Title flexNumber={4}>TITLE</Title>
        <Title flexNumber={1}>COMPLETED</Title>
      </TitleContainer>
      <ReactPaginate
        nextLabel={<FaChevronCircleRight size={"20px"} />}
        breakLabel="..."
        previousLabel={<FaChevronCircleLeft size={"20px"} />}
        pageCount={pageCount}
        onPageChange={({ selected: selectedPage }) =>
          setCurrentPage(selectedPage)
        }
        renderOnZeroPageCount={undefined}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        breakClassName="page-num"
        previousClassName="page-num"
        nextClassName="page-num"
        activeLinkClassName="active"
        disabledClassName="pagination-disabled"
      />
      {filteredData.slice(offset, offset + ITEMS_PER_PAGE).map((todo) => (
        <Todo key={todo.id}>
          <UserId>{todo.userId}</UserId>
          <Text>{todo.title} </Text>
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
