import axios from "axios";

const github = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_LINK,
  headers: {
    Authorization: `token ${process.env.REACT_APP_GITHUB}`,
  },
});

// searches user
export async function searchUsers(keyword) {
  const response = await github.get(`/search/users?q=${keyword}`);

  return response.data.items;
}
// returns specific user
export async function getUser(keyword) {
  const response = await github.get(`/users/${keyword}`);

  return response.data;
}

// returns repos of specific user
export async function getRepos(username) {
  const response = await github.get(`/users/${username}/repos`);


  return response.data;
}


export async function getUserAndRepos(username){
  const [user, repos] = await Promise.all([
    github.get(`/users/${username}`),
    github.get(`/users/${username}/repos`),
  ]);

  return {
    user: user.data,
    repos: repos.data,
  };
}