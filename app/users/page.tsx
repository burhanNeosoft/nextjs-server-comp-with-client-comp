import ViewUser from "./ViewUser";
const Users = async () => {
  let days = new Date();
  console.log(days.getTime());
  await new Promise((res, rej) => setTimeout(res, 3000));
  const rawResponse = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await rawResponse.json();
  days = new Date();
  console.log(days.getTime());
  //console.log(users);
  return (
    <>
      <h1>User List</h1>
      <ul>
        {users.map((usr) => (
          <li key={usr.id}>
            <ViewUser user={usr} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Users;
