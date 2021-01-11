import axios from 'axios';

const { REACT_APP_GITHUB_CLIENT_ID, REACT_APP_GITHUB_CLIENT_SECRET } = process.env

const axiosConfig = {
  baseURL: 'https://api.github.com/',
  auth: {
    username: REACT_APP_GITHUB_CLIENT_ID,
    password: REACT_APP_GITHUB_CLIENT_SECRET,
  },
};

function searchUsers(searchTerm) {
  return axios.get(`search/users?q=${searchTerm}`, axiosConfig);
}

export { searchUsers };
