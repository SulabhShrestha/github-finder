import { useContext, useEffect } from "react";
import { GithubContext } from "../context/GithubContext";
import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import GithubStats from "../components/GithubStats";
import GithubProfile from "../components/GithubProfile";
import GithubRepoList from "../components/GithubRepoList";
import { isEmpty } from "lodash";
import { getUser, getRepos, getUserAndRepos } from "../context/github/GithubAction";

function UserPage() {
  const { user, isLoading, repos, dispatch } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    dispatch({ type: "set_loading" }); // true
    const getUserData = async () => {
      const response = await getUserAndRepos(params.name);

      dispatch({ type: "add_user_and_repos", payload: response });
    };

    getUserData();
  }, [params.name, dispatch]);

  if (isLoading && isEmpty(user)) {
    return <BeatLoader color="green" />;
  } else {
    return (
      <>
        <GithubProfile user={user} />
        <GithubStats user={user} />
        <GithubRepoList repos={repos} />
      </>
    );
  }
}

export default UserPage;
