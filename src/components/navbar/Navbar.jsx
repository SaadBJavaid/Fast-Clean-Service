"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "../../app/contexts/themeContext";

const Navbar = () => {
  const { data: session } = useSession();
  const { theme } = useTheme();

  console.log(theme);
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        {!session ? (
          <>
            <Link href="/login">
              <li>Login</li>
            </Link>
            <Link href="/register">
              <li>Register</li>
            </Link>
          </>
        ) : (
          <>
            {session.user?.email}
            <li>
              <button
                onClick={() => {
                  signOut();
                }}
                className="p-2 px-5 -mt-1 bg-blue-800 rounded-full"
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
