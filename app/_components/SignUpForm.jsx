"use client";

import React, { useState } from "react";
import Link from "next/link";
import { signup } from "../(web-builder)/sign-up/actions";
import { useFormState } from "react-dom";
import SubmitButton from "@/app/_components/SubmitButton";
import { Eye, EyeSlash } from "@phosphor-icons/react/dist/ssr";

const SignUpForm = () => {
  const initialState = { message: null };
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [isRepeatPassVisible, setIsRepeatPassVisible] = useState(false);
  const [state, formAction] = useFormState(signup, initialState);

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
        <div className="flex flex-col gap-1">
          <label htmlFor="repeat">Repeat password:</label>
          <div className="input input-bordered w-full flex flex-row justify-between items-center">
            <input
              id="repeat"
              name="repeat"
              type={isRepeatPassVisible ? "text" : "password"}
              placeholder="6+ characters"
              required
            />
            {isRepeatPassVisible ? (
              <EyeSlash
                size={24}
                color="#ffffff"
                className="cursor-pointer"
                onClick={() => setIsRepeatPassVisible((prev) => !prev)}
              />
            ) : (
              <Eye
                size={24}
                color="#ffffff"
                className="cursor-pointer"
                onClick={() => setIsRepeatPassVisible((prev) => !prev)}
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
        <SubmitButton text={"Sign up"} />
        <div className="flex text-center flex-col">
          <p className="text-stone-400">Already have an account?</p>
          <div>
            <Link href="/login" className="text-emerald-400 underline text-lg">
              Log in
            </Link>
            <p>and start building your portfolio</p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
