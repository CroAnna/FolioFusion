import { CreditCard, GearSix, User } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

const Profile = () => {
  return (
    <div className="md:w-full flex flex-col gap-6 max-w-screen-xl mx-4 md:mx-auto md:p-10 lg:px-0 md:pt-20">
      <h2 className="text-2xl font-bold">My Profile</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        <Link
          href="/profile/data"
          className="bg-neutral-700 hover:bg-neutral-600 w-full rounded-xl h-48 md:h-72 flex flex-col gap-4 items-center justify-center"
        >
          <User size={128} weight="duotone" color="#06b6d4" />
          <p>My Data</p>
        </Link>
        <Link
          href="/profile/orders"
          className="bg-neutral-700 hover:bg-neutral-600 w-full rounded-xl h-48 md:h-72 flex flex-col gap-4 items-center justify-center"
        >
          <CreditCard size={128} weight="duotone" color="#06b6d4" />
          <p>My Orders</p>
        </Link>
        <Link
          href="/profile/settings"
          className="bg-neutral-700 hover:bg-neutral-600 w-full rounded-xl h-48 md:h-72 flex flex-col gap-4 items-center justify-center"
        >
          <GearSix size={128} weight="duotone" color="#06b6d4" />
          <p>Settings</p>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
