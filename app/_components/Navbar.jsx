import Link from "next/link";
import React from "react";
import { createClient } from "@/utils/supabase/server";
import { logout } from "../(web-builder)/logout/actions";
import LogoutButton from "./LogoutButton";
import VariableNavbar from "./VariableNavbar";

const Navbar = async () => {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();

  return (
    <div className="navbar p-0 bg-base-100 justify-between max-w-screen-xl mx-auto">
      <VariableNavbar logout={logout} data={data} />
      <div className="navbar-end">
        {data && data.user && (
          <div className="hidden lg:flex items-center h-12">
            <p className="mr-2 flex items-center bg-neutral-900 rounded-md py-2 px-4 h-12">
              {data.user.email}
            </p>
            <div className="flex gap-2">
              <Link href="/builder/create-hero">
                <button className="btn btn-primary">My portfolio</button>
              </Link>
              <form action={logout}>
                <LogoutButton />
              </form>
            </div>
          </div>
        )}
        {!data ||
          (!data.user && (
            <>
              <Link href="login">
                <button className="btn btn-primary mr-2">Login</button>
              </Link>
            </>
          ))}
      </div>
    </div>
  );
};

export default Navbar;
