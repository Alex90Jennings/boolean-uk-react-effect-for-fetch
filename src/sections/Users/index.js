import { useEffect, useState } from "react";
import UserListItem from "./components/UsersListItem";

function UsersSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=5`)
      .then((res) => res.json())
      .then((users) => setData(users.results));
  }, []);

  console.log(data);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {data.map((user, id) => (
            <UserListItem user={user} key={id} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default UsersSection;
