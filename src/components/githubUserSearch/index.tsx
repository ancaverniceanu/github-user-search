import { useState, useEffect } from 'react';
import { searchUsers } from './services/githubService';
import Input from './Input';
import Results from './Results';

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

  const loadUsers = async (searchText: string) => {
    setLoading(true);
    try {
      const response = await searchUsers(searchText);
      setUsers(response.data.items.slice(0, 5));
      setLoading(false);
    } catch (err) {
      console.log('Error retrieving users from GitHub:', err.response);
      setLoading(false);
      setLoadingError(err.response.status);
      setUsers([]);
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

  return (
    <div>
      <Input
        label="Search for a GitHub user"
        placeholder="Type an username..."
        searchText={searchText}
        onSearchTextChange={setSearchText}
      />
      {debouncedSearchTerm && (
        <Results
          loading={loading}
          loadingError={loadingError}
          users={users}
          searchText={debouncedSearchTerm}
        />
      )}
    </div>
  );
};

export default Index;
