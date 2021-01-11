interface Props {
  label: string;
  placeholder: string;
  searchText: string;
  onSearchTextChange: (item: string) => void;
}

const Input = ({
  label,
  placeholder,
  searchText,
  onSearchTextChange,
}: Props) => {
  return (
    <>
      <label htmlFor="search">{label}</label>
      <input
        type="search"
        value={searchText}
        autoComplete="off"
        placeholder={placeholder}
        onChange={(e) => onSearchTextChange(e.target.value)}
        id="search"
      />
    </>
  );
};

export default Input;
