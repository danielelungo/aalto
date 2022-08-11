import { Dispatch, FunctionComponent, SetStateAction } from "react";
import styled from "styled-components";
import { Title } from "../Css/commonStyledComponents";
import "../App.css";

interface SelectUserIdProps {
  selectedUserId: string;
  setSelectedUserId: Dispatch<SetStateAction<string>>;
}

const SelectUserId: FunctionComponent<SelectUserIdProps> = ({
  selectedUserId,
  setSelectedUserId,
}) => {
  return (
    <Container className="responsive">
      <Title>SELECT USER ID</Title>
      <Select
        value={selectedUserId}
        onChange={(e) => setSelectedUserId(e.target.value)}
      >
        <option value=""></option>
        <option value="1">USER ID : 1</option>
        <option value="2">USER ID : 2</option>
        <option value="3">USER ID : 3</option>
        <option value="4">USER ID : 4</option>
        <option value="5">USER ID : 5</option>
        <option value="6">USER ID : 6</option>
        <option value="7">USER ID : 7</option>
        <option value="8">USER ID : 8</option>
        <option value="9">USER ID : 9</option>
        <option value="10">USER ID : 10</option>
      </Select>
    </Container>
  );
};

export default SelectUserId;

const Container = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;

const Select = styled.select`
  text-align: center;
`;
