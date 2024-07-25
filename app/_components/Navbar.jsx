import Link from "next/link";
import React from "react";
import { createClient } from "@/utils/supabase/server";
import { logout } from "../logout/actions";
import LogoutButton from "./LogoutButton";

const Navbar = async () => {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();

  return (
    <div className="navbar bg-base-100 justify-between w-full max-w-screen-xl mx-auto">
      <div className="flex gap-8">
        <Link href="/" className="btn btn-ghost text-xl">
          ShowOff
        </Link>
        <div className="flex gap-4">
          <Link href="/#examples">Examples</Link>
          <Link href="/#pricing">Pricing</Link>
        </div>
      </div>
      {data && data.user && (
        <>
          <p>Hello {data.user.email}</p>
          <div className="flex gap-2">
            <Link href="/builder/create-hero">
              <button className="btn btn-primary">My portfolio</button>
            </Link>
            <form action={logout}>
              <LogoutButton />
            </form>
          </div>
        </>
      )}
      {!data ||
        (!data.user && (
          <>
            <Link href="login">
              <button className="btn btn-primary">Login</button>
            </Link>
          </>
        ))}
    </div>
  );
};

export default Navbar;
