import { Dispatch, FunctionComponent, SetStateAction } from "react";
import styled from "styled-components";
import { Title } from "../Css/commonStyledComponents";
import Switch from "./UI/switch/switch";

interface CompletedFilterProps {
  filterCompleted: boolean;
  seFilterCompleted: Dispatch<SetStateAction<boolean>>;
}

const CompletedFilter: FunctionComponent<CompletedFilterProps> = ({
  filterCompleted,
  seFilterCompleted,
}) => {
  return (
    <Container>
      <Title>COMPLETED</Title>
      <Switch
        onColor="#644c79"
        isOn={filterCompleted}
        handleToggle={() => seFilterCompleted((p) => !p)}
      />
    </Container>
  );
};

export default CompletedFilter;

const Container = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;
