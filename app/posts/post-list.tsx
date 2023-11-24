const PostLists = async () => {
  await new Promise((res, rej) => setTimeout(res, 6000));
  const rawResponse = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await rawResponse.json();
  return (
    <>
      <h3>Listing Here</h3>
      <br />
      <ul>
        {users.map((usr) => (
          <li key={usr.id}>{usr.name}</li>
        ))}
      </ul>
    </>
  );
};

export default PostLists;
