import { Dispatch, FunctionComponent, SetStateAction } from "react";

interface SelectUserIdProps {
  selectedUserId: string;
  setSelectedUserId: Dispatch<SetStateAction<string>>;
}

const SelectUserId: FunctionComponent<SelectUserIdProps> = ({
  selectedUserId,
  setSelectedUserId,
}) => {
  return (
    <div>
      <select
        value={selectedUserId}
        onChange={(e) => setSelectedUserId(e.target.value)}
      >
        <option value=""></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
  );
};

export default SelectUserId;
