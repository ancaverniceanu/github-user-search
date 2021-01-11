import { SearchInput } from './style';

interface Props {
  label: string;
  placeholder: string;
  searchText: string;
  onSearchTextChange: (event: string) => void;
  onKeyNavigation: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input = ({
  label,
  placeholder,
  searchText,
  onSearchTextChange,
  onKeyNavigation,
}: Props) => {
  return (
    <>
      <label htmlFor="search">{label}</label>
      <SearchInput
        type="search"
        value={searchText}
        autoComplete="off"
        placeholder={placeholder}
        onChange={(event) => onSearchTextChange(event.target.value)}
        onKeyDown={(event) => onKeyNavigation(event)}
        id="search"
      />
    </>
  );
};

export default Input;
