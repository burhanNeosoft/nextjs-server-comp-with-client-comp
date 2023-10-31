import ViewUser from "./ViewUser";
const Users = async () => {
  const days = new Date();
  console.log(days.getTime());
  const rawResponse = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await rawResponse.json();
  console.log(days.getTime());
  //console.log(users);
  return (
    <>
      <h1>User List</h1>
      <ul>
        {users.map((usr) => (
          <li>
            <ViewUser user={usr} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Users;
