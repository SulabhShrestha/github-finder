import { useContext, useState } from "react";
import { GithubContext } from "../context/GithubContext";
import AlertContext from "../context/alert/AlertContext";
import { searchUsers } from "../context/github/GithubAction";

function SearchField() {
  const [text, setText] = useState("");
  const { dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const searchHandler = async function (e) {
    e.preventDefault();
    if (text.trim().length === 0) {
      setAlert("Please enter something.", "error");
    } else {
      dispatch({ type: "set_loading" });
      const users = await searchUsers(text.trim());
      dispatch({ type: "add_users", payload: users });
      setText("");
    }
  };

  return (
    <>
      <form className="flex">
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-l-lg py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search"
          type="text"
          name="search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="rounded-r-lg bg-blue-500 px-6 py-2 text-white hover:bg-amber-400 cursor-pointer"
          onClick={searchHandler}
        >
          Search
        </button>

        <button
          className="rounded-lg bg-red-500 ml-5 px-6 py-2 text-white hover:bg-gray-400 cursor-pointer"
          onClick={() => setText("")}
        >
          Clear
        </button>
      </form>
    </>
  );
}

export default SearchField;
