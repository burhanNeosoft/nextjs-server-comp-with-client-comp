const ServerCompo = async () => {
  const rawResponse = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await rawResponse.json();
  return (
    <>
      <div style={{ background: "pink" }}>
        <h1>User List</h1>
        <ul>
          {users.map((usr) => (
            <li key={usr.id}>{usr.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ServerCompo;
