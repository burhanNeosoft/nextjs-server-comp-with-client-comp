"use client";
const ViewUser = ({ user }) => {
  const handleClick = () => {
    console.log("User", user);
  };

  //console.log("Userrrrrrrrrrrrrrrr");
  return (
    <>
      <span onClick={handleClick}>{user.name}</span>
    </>
  );
};

export default ViewUser;
