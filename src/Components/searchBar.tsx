import {
  Dispatch,
  FormEventHandler,
  FunctionComponent,
  SetStateAction,
} from "react";

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
    <div>
      <form onSubmit={onSearch}>
        <input
          type="text"
          placeholder="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button disabled={inputValue === ""}>search</button>
      </form>
    </div>
  );
};

export default SearchBar;
