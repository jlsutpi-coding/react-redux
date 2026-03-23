import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectAllUsers } from "./usersSlice";

const UsersList = () => {
  const users = useSelector(selectAllUsers);

  const renderdUsers = users.map((user) => {
    return (
      <li key={user.id}>
        <Link to={`/user/${user.id}`} className=" underline hover:bg-red-500">
          {user.name}
        </Link>
      </li>
    );
  });

  return (
    <section>
      <h2>Users</h2>
      {renderdUsers}
    </section>
  );
};

export default UsersList;
