import { BeatLoader } from "react-spinners";
import UserCard from "./UserCard";
import { useContext } from "react";
import { GithubContext } from "../context/GithubContext";

function UserResult() {
  const { isLoading, users } = useContext(GithubContext);

  if (isLoading) {
    return <BeatLoader color="green" />;
  } else {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map((user) => (
          <UserCard user={user} key={user.login} />
        ))}
      </div>
    );
  }
}

export default UserResult;
