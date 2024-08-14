import Link from "next/link";
import React from "react";
import { createClient } from "@/utils/supabase/server";
import { logout } from "../(web-builder)/logout/actions";
import LogoutButton from "./LogoutButton";
import VariableNavbar from "./VariableNavbar";
import { getUserData } from "./actionsServer";
import { UserCircle } from "@phosphor-icons/react/dist/ssr";

const Navbar = async () => {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();
  const { userData } = await getUserData();

  return (
    <div className="navbar p-0 bg-base-100 justify-between max-w-screen-xl mx-auto">
      <VariableNavbar logout={logout} data={data} userData={userData} />
      <div className="navbar-end">
        {data && data.user && (
          <div className="hidden lg:flex items-center h-12">
            <div className="flex gap-2">
              <Link href="/builder/create-hero">
                <button className="btn btn-primary">My portfolio</button>
              </Link>
              {userData && userData.domain_url && (
                <a href={`/${userData.domain_url}`} target="_blank">
                  <button className="btn btn-secondary">
                    Check live portfolio
                  </button>
                </a>
              )}
              <Link
                href={"/profile"}
                className="mr-2 flex gap-2 items-center bg-neutral-900 rounded-md py-2 px-4 h-12"
              >
                <UserCircle size={32} color="#f4f4f4" weight="duotone" />
                <p>{data.user.email}</p>
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
