const getRepos = (dispatch, query) => {
  fetch(`https://api.github.com/search/repositories?q=${query}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      dispatch({ type: "SET_REPO", repos: data.items });
    });
};

export default {
  getRepos
};
