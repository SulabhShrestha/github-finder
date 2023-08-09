function GithubRepoCard({repo}) {
    return <div className="card bg-blue-500">
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
        </div>;
}

export default GithubRepoCard;