import GithubRepoCard from "./GithubRepoCard";


function GithubRepoList({repos}) {

    return (
      <div className="space-y-3">
        {repos.map((repo) => (
          <GithubRepoCard repo={repo} />
        ))}
      </div>
    );
}

export default GithubRepoList;