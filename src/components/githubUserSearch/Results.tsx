import ResultItem from './ResultItem';
import { UserInterface } from './';

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
      <ul role="listbox">
        {users.map((user: UserInterface) => {
          return (
            <ResultItem
              key={user.id}
              user={user}
              selected={selectedUserId === user.id}
            />
          );
        })}
      </ul>
    );
  };

  return <div className="wrapper">{renderResults()}</div>;
};

export default Results;
