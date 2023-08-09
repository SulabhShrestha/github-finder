function GithubProfile({user}) {
    return (
      <div className="card flex-row gap-4 mx-12">
        {/* Profile picture */}
        <section className="card user-profile-picture">
          <div className="relative">
            <div className="avatar brightness-50">
              <div className="w-36 md:w-36 rounded-xl ">
                <img src={user.avatar_url} />
              </div>
            </div>
            <div className="absolute bottom-2 left-4 brightness-200 text-white">
              <h1>{user.name}</h1>
              <p>{user.login}</p>
            </div>
          </div>
        </section>

        {/* Other description */}

        <section className="text-left">
          <h1 className="text-lg font-bold mb-2">{user.name}</h1>

          <p className="text-sm mb-2">{user.bio}</p>

          <a href={user.html_url} target="_blank">
            <button className="btn btn-outline btn-sm mb-4">
              Visit Github
            </button>
          </a>

          <div className="card shadow-sm flex-row divide-x">
            {user.location && (
              <div className="pr-2">
                <h3 className="text-sm opacity-60">Location</h3>
                <p>{user.location}</p>
              </div>
            )}

            {user.blog && (
              <div className="px-2">
                <h3 className="text-sm opacity-60">Website</h3>
                <a
                  href={user.blog}
                  className="cursor-pointer"
                  rel="noreferrer"
                  target="_blank"
                >
                  {user.blog}
                </a>
              </div>
            )}

            {user.twitter_username && (
              <div className="pl-2">
                <h3 className="text-sm opacity-60">Twitter</h3>
                <p>{user.twitter_username}</p>
              </div>
            )}
          </div>
        </section>
      </div>
    );
}

export default GithubProfile;