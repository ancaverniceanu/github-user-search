interface Props {
  label: string;
  placeholder: string;
  searchText: string;
  onSearchTextChange: (item: string) => void;
  onKeyNavigation: (item: React.KeyboardEvent<HTMLInputElement>) => void;
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
      <input
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
