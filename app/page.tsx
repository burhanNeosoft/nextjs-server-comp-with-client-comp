import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul className="font-mono text-red-800">
        <li className="shadow-xl">
          <Link href={"/users"}>Users</Link>
        </li>
        <li className="shadow-xl">
          <Link href={"/users/123"}>User Details</Link>
        </li>
        <li className="shadow-xl">
          <Link href={"/server-in-client"}>Server-in-Client</Link>
        </li>
      </ul>
    </main>
  );
}
