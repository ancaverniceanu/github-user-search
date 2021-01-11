import { UserInterface } from './';

interface Props {
  user: UserInterface;
  selected: boolean;
}

const ResultItem = ({
  user: { avatar_url, html_url, login },
  selected,
}: Props) => {
  return (
    <li role="option" aria-selected={selected}>
      <a href={html_url}>
        <img src={avatar_url} width="20" alt={login} />
        {login}
      </a>
    </li>
  );
};

export default ResultItem;
