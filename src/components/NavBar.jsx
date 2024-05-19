"use client";
import { useSession, signOut } from "next-auth/react";

function NavBar() {
  const { status } = useSession();

  return (
    <nav className="flex justify-between items-center bg-slate-700 text-slate-300 p-2">
      <h1 className="text-2xl">Hello</h1>
      <ul className="flex flex-row gap-4">
        <li className="cursor-pointer hover:text-slate-100">Home</li>
        <li className="cursor-pointer hover:text-slate-100">Products</li>
        <li className="cursor-pointer hover:text-slate-100">About</li>
        <li className="cursor-pointer hover:text-slate-100">Contact Us</li>
        {status === "authenticated" ? (
          <li className="cursor-pointer hover:text-slate-100">
            <button onClick={() => signOut()}>Log out</button>
          </li>
        ) : (
          <li className="cursor-pointer hover:text-slate-100">
            <a href="/api/auth/signin">Log In</a>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
