import {
  Dispatch,
  FormEventHandler,
  FunctionComponent,
  SetStateAction,
} from "react";
import { FaSistrix } from "react-icons/fa";
import styled from "styled-components";

interface SearchBarProps {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  onSearch: FormEventHandler<HTMLFormElement>;
}

const SearchBar: FunctionComponent<SearchBarProps> = ({
  inputValue,
  setInputValue,
  onSearch,
}) => {
  return (
    <Container>
      <Button>
        <FaSistrix onClick={onSearch as any} color="white" size="35px" />
      </Button>
      <form onSubmit={onSearch}>
        <Input
          type="text"
          placeholder="Search..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
    </Container>
  );
};

export default SearchBar;

const Button = styled.div`
  background-color: #644c79;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
`;

const Input = styled.input`
  padding-top: 10px;
  padding-bottom: 10px;
`;
