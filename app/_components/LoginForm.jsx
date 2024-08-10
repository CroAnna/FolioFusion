"use client";

import React, { useState } from "react";
import Link from "next/link";
import { login } from "../(web-builder)/login/actions";
import { useFormState } from "react-dom";
import SubmitButton from "@/app/_components/SubmitButton";
import { Eye, EyeSlash } from "@phosphor-icons/react/dist/ssr";

const LoginForm = () => {
  const initialState = { message: null };
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [state, formAction] = useFormState(login, initialState);

  return (
    <form
      action={formAction}
      className="flex flex-col gap-8 mx-4 md:mx-0 p-8 w-full bg-neutral-900 rounded-xl mb-10 max-w-96"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email:</label>
          <input
            className="input input-bordered w-full"
            id="email"
            name="email"
            type="email"
            placeholder="example@mail.com"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password:</label>
          <div className="input input-bordered w-full flex flex-row justify-between items-center">
            <input
              id="password"
              name="password"
              type={isPassVisible ? "text" : "password"}
              placeholder="6+ characters"
              required
            />
            {isPassVisible ? (
              <EyeSlash
                size={24}
                color="#ffffff"
                className="cursor-pointer"
                onClick={() => setIsPassVisible((prev) => !prev)}
              />
            ) : (
              <Eye
                size={24}
                color="#ffffff"
                className="cursor-pointer"
                onClick={() => setIsPassVisible((prev) => !prev)}
              />
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-12">
        {state.message && (
          <p className="bg-red-300 px-4 py-2 w-full text-neutral-800 rounded-lg">
            ⛔ {state.message}
          </p>
        )}
        <SubmitButton text={"Log in"} />
        <div className="flex text-center flex-col">
          <p className="text-stone-400">Don&apos;t have an account yet? 😮</p>
          <div>
            <Link
              href="/sign-up"
              className="text-emerald-400 underline text-lg"
            >
              Sign up
            </Link>
            <p> and start building your portfolio in a few minutes</p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
