import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" flex justify-between px-10 items-center py-5 bg-red-600 text-white">
      <Link to={"/"}>
        <h1>Blog Page</h1>
      </Link>
      <nav>
        <ul className=" flex items-center gap-10">
          <li>
            <Link className=" hover:underline" to={"/"}>
              {" "}
              Home
            </Link>
          </li>
          <li>
            <Link to={"/post"} className="hover:underline">
              {" "}
              Post
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
