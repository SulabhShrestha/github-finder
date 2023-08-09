import { NavLink } from "react-router-dom";

function UserCard({ user: { login, avatar_url } }) {
  return (
    <div className="card card-side bg-lime-300 compact shadow-xl flex-row space-x-4  py-4 pl-4">
      <div className="avatar">
        <div className="w-16 rounded-full">
          <img src={avatar_url} />
        </div>
      </div>
      <div className="items-center">
        <h2 className="card-title">{login}</h2>
        <NavLink to={`/user/${login}`}>Visit profile</NavLink>
      </div>
    </div>
  );
}

export default UserCard;
