function UserListItem(props) {
  const user = props.user;

  return (
    <li className={user.gender === "male" ? "bg-blue" : "bg-pink"}>
      <img src={user.picture.large} alt="photo" />
      <h3>
        {user.name.title} {user.name.first} {user.name.last}
      </h3>
      <p>Email: {user.email}</p>
    </li>
  );
}

export default UserListItem;
