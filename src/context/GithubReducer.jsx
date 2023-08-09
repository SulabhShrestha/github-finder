const githubReducer = function (state, action) {
  switch (action.type) {
    case "add_users":
      return {
        users: action.payload,
        isLoading: false,
      };

    case "set_loading":
      return {
        ...state,
        isLoading: true,
      };

    case "add_user":
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };

    case "add_repos":
      return {
        ...state,
        repos: action.payload,
        isLoading: false,
      };

    case "add_user_and_repos":
      return {
        ...state,
        repos: action.payload.repos,
        user: action.payload.user,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default githubReducer;
