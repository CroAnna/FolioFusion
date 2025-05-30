"use client";

import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { useState } from "react";
import Image from "next/image";
import { UserCircle } from "@phosphor-icons/react/dist/ssr";

const VariableNavbar = ({ logout, data, userData }) => {
  const [isOpen, setIsOpen] = useState(false);
  // this is separates because it needs client side logic
  return (
    <div className="navbar-start">
      <div className="dropdown z-10">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost ml-2 lg:hidden"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <div
          tabIndex={0}
          className={`menu menu-sm dropdown-content bg-base-100 rounded-b-2xl z-[1] w-screen shadow gap-2 ${
            !isOpen && "hidden"
          }`}
        >
          <Link
            className="p-4 text-center"
            href="/#examples"
            onClick={() => setIsOpen(false)}
          >
            Examples
          </Link>
          <Link
            className="p-4 text-center"
            href="/#pricing"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          {data && data.user && (
            <>
              <Link
                className="w-full"
                href="/builder/create-hero"
                onClick={() => setIsOpen(false)}
              >
                <button className="btn btn-primary w-full">
                  Portfolio builder
                </button>
              </Link>
              {userData && userData.domain_url && (
                <a
                  href={`/${userData.domain_url}`}
                  target="_blank"
                  onClick={() => setIsOpen(false)}
                >
                  <button className="btn btn-secondary w-full">
                    Check live portfolio
                  </button>
                </a>
              )}
              <Link
                href={"/profile"}
                onClick={() => setIsOpen(false)}
                className="flex gap-2 items-center bg-neutral-900 rounded-md py-2 px-4 h-12 justify-center"
              >
                <UserCircle size={32} color="#f4f4f4" weight="duotone" />
                <p>{data.user.email}</p>
              </Link>
              <form action={logout} onClick={() => setIsOpen(false)}>
                <LogoutButton />
              </form>
            </>
          )}
        </div>
      </div>
      <div className="flex gap-8 items-center ">
        <Link href="/" className="btn btn-ghost text-xl">
          <Image
            width={48}
            height={48}
            src={"/app-logo-192.png"}
            alt="FolioFusion-logo"
          />
          FolioFusion
        </Link>
        <div className="gap-4 hidden lg:flex">
          <Link href="/#examples">Examples</Link>
          <Link href="/#pricing">Pricing</Link>
        </div>
      </div>
    </div>
  );
};

export default VariableNavbar;
