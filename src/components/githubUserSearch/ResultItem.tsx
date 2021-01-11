import { UserInterface } from './';

interface Props {
  user: UserInterface;
}

const ResultItem = ({ user: { avatar_url, html_url, login } }: Props) => {
  return (
    <li role="option">
      <a href={html_url}>
        <img src={avatar_url} width="20" alt={login} />
        {login}
      </a>
    </li>
  );
};

export default ResultItem;
