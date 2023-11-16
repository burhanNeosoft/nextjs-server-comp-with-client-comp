"use client";
const ViewUser = ({ user }) => {
  var i = 0;
  //var obj = {};
  const handleClick = (e) => {
    //e.preventDefault();
    i += 1;
    console.log("User");
  };

  //console.log("Userrrrrrrrrrrrrrrr");
  return (
    <>
      <span onClick={handleClick}>{user.name}</span>
    </>
  );
};

export default ViewUser;
