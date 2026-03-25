import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCount, increaseCount } from "../features/posts/postsSlice";

const Header = () => {
  const dispatch = useDispatch();
  const count = useSelector(getCount);

  return (
    <>
      <header className=" flex justify-between px-10 items-center py-5 bg-red-600 text-white">
        <Link to={"/"}>
          <h1>Blog Page</h1>
        </Link>
        <nav>
          <ul className=" flex items-center gap-10">
            <li>
              <Link className=" hover:underline" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/post"} className="hover:underline">
                Post
              </Link>
            </li>
            <li>
              <Link to={"/user"} className="hover:underline">
                User
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <button
        className="bg-red-300 rounded-2xl text-lg mt-40 text-white w-20 mx-auto block"
        onClick={() => dispatch(increaseCount())}
      >
        {" "}
        {count}
      </button>
    </>
  );
};

export default Header;
