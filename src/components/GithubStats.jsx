function GithubStats({ user }) {
  return (
    <div className="flex shadow-sm divide-x items-center">
      {user.followers && (
        <div className="pr-2 flex-col flex-grow items-center justify-center">
          <h3 className="text-sm opacity-60">Followers</h3>
          <p>{user.followers}</p>
        </div>
      )}

      {user.following && (
        <div className="px-2 flex flex-col flex-grow items-center justify-center">
          <h3 className="text-sm opacity-60">Following</h3>
          <a
            href={user.blog}
            className="cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            {user.following}
          </a>
        </div>
      )}

      {user.public_repos && (
        <div className="pl-2 flex-col flex-grow items-center justify-center">
          <h3 className="text-sm opacity-60">Public repos</h3>
          <p>{user.public_repos}</p>
        </div>
      )}

      {user.public_gists !== 0 && (
        <div className="pl-2 flex-col flex-grow items-center justify-center ">
          <h3 className="text-sm opacity-60">Public gists</h3>
          <p>{user.public_gists}</p>
        </div>
      )}
    </div>
  );


}

export default GithubStats;
