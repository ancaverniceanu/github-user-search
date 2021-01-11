import { useState, useEffect } from 'react';
import { searchUsers } from './services/githubService';
import Input from './Input';
import Results from './Results';
import { SearchWrapper } from './style';

export interface UserInterface {
  id: string;
  avatar_url: string;
  html_url: string;
  login: string;
}

const Index = () => {
  const [searchText, setSearchText] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchText);
  const [loading, setLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(0);
  const [users, setUsers] = useState<UserInterface[]>([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [selectedUser, setSelectedUser] = useState<UserInterface>(Object);
  const [position, setPosition] = useState(0);

  const loadUsers = async (searchText: string) => {
    setLoading(true);
    try {
      const response = await searchUsers(searchText);
      setUsers(response.data.items.slice(0, 5));
      setLoading(false);
      setPosition(0);
    } catch (err) {
      console.log('Error retrieving users from GitHub:', err.response);
      setLoading(false);
      setLoadingError(err.response.status);
      setUsers([]);
    }
  };

  const onKeyNavigation = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;
    const totalUsers = users.length;

    if (selectedUser === null) {
      return;
    }

    if (key === 'ArrowDown' && position < totalUsers - 1) {
      setPosition(position + 1);
    }

    if (key === 'ArrowUp' && position > 0) {
      setPosition(position - 1);
    }

    if (key === 'Enter' && selectedUser) {
      event.preventDefault();
      window.location.href = selectedUser.html_url;
    }
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchText);
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [searchText]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      loadUsers(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (position >= 0 && position < users.length) {
      setSelectedUser(users[position]);
    } else {
      setSelectedUser(Object);
    }

    if (selectedUser !== null) {
      setSelectedUserId(selectedUser.id);
    } else {
      setSelectedUserId('');
    }
  }, [users, position, selectedUser]);

  return (
    <SearchWrapper>
      <Input
        label="Search for a GitHub user"
        placeholder="Type an username..."
        searchText={searchText}
        onSearchTextChange={setSearchText}
        onKeyNavigation={onKeyNavigation}
      />
      {debouncedSearchTerm && (
        <Results
          loading={loading}
          loadingError={loadingError}
          users={users}
          searchText={debouncedSearchTerm}
          selectedUserId={selectedUserId}
        />
      )}
    </SearchWrapper>
  );
};

export default Index;
