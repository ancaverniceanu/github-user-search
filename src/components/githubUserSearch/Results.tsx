import ResultItem from './ResultItem';
import { UserInterface } from './';
import { SearchResults, SearchResultsList } from './style';

interface Props {
  loading: boolean;
  loadingError: Number;
  users: UserInterface[];
  searchText: string;
  selectedUserId: string;
}

const Results = ({
  users,
  loading,
  loadingError,
  searchText,
  selectedUserId,
}: Props) => {
  const renderResults = () => {
    if (loading) {
      return <>Loading...</>;
    }

    if (loadingError) {
      // TODO: check for other erros
      switch (loadingError) {
        case 403:
          return 'You have reached the API rate limit. Please retry in 1 minute.';
        default:
          return 'API temporarily not working. Please return later.';
      }
    }

    if ((!users || users.length === 0) && searchText) {
      return 'No user found.';
    }

    return (
      <SearchResultsList role="listbox">
        {users.map((user: UserInterface) => {
          return (
            <ResultItem
              key={user.id}
              user={user}
              selected={selectedUserId === user.id}
            />
          );
        })}
      </SearchResultsList>
    );
  };

  return <SearchResults>{renderResults()}</SearchResults>;
};

export default Results;
