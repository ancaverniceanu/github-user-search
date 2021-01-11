import { UserInterface } from './';
import { SearchResultsListItem } from './style';

interface Props {
  user: UserInterface;
  selected: boolean;
}

const ResultItem = ({
  user: { avatar_url, html_url, login },
  selected,
}: Props) => {
  return (
    <SearchResultsListItem role="option" aria-selected={selected}>
      <a href={html_url}>
        <img src={avatar_url} alt={login} />
        {login}
      </a>
    </SearchResultsListItem>
  );
};

export default ResultItem;
