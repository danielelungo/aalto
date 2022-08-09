import { Dispatch, FunctionComponent, SetStateAction } from "react";

interface CompletedFilterProps {
  filterCompleted: boolean;
  seFilterCompleted: Dispatch<SetStateAction<boolean>>;
}

const CompletedFilter: FunctionComponent<CompletedFilterProps> = ({
  filterCompleted,
  seFilterCompleted,
}) => {
  return (
    <div>
      <h1>completati</h1>
      <input
        type="checkbox"
        defaultChecked={filterCompleted}
        onChange={() => seFilterCompleted(!filterCompleted)}
      />
    </div>
  );
};

export default CompletedFilter;
