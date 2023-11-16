import { useRouter, useSearchParams } from "next/navigation";
const User = (props) => {
  /* const router = useRouter();
  const params = useSearchParams(); */
  const { params, searchParams } = props;

  console.log("router", params, searchParams);
  return (
    <>
      <h1>User Details</h1>
      <ul>
        <li key={1}>
          <b>Name:</b> A
        </li>
        <li key={2}>
          <b>Surname:</b> B
        </li>
        <li key={3}>
          <b>Address:</b> xyz
        </li>
      </ul>
    </>
  );
};

export default User;
