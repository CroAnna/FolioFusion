"use client";
import { useFormState } from "react-dom";
import SubmitButton from "@/app/_components/SubmitButton";
import Input from "@/app/_components/Input";
import Textarea from "@/app/_components/Textarea";
import Join from "@/app/_components/Join";
import { sendIdea } from "./actions";
import { useEffect, useState } from "react";
import Link from "next/link";

const IdeasForm = ({ userData }) => {
  const initialState = { message: null };
  const [state, formAction] = useFormState(sendIdea, initialState);
  const [messageType, setMessageType] = useState("");
  const [messageTitle, setMessageTitle] = useState("");
  const [messageDescription, setMessageDescription] = useState("");

  useEffect(() => {
    if (state.message == "Success") {
      resetForm();
    }
  }, [state.message]);

  const resetForm = () => {
    setMessageType("");
    setMessageTitle("");
    setMessageDescription("");
  };

  return (
    <form
      action={formAction}
      className="flex flex-col gap-8 mx-0 w-full rounded-xl mb-10 max-w-96"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <div className="label pb-0 pt-0">
            <span className="label-text text-base">
              Select the type of your message: *
            </span>
          </div>
          <Join
            items={["Idea", "Question", "Problem"]}
            value={messageType}
            onChange={(e) => {
              setMessageType(e.target.value);
            }}
            name={"message_type"}
          />
          {messageType == "Idea" ? (
            userData && userData.email ? (
              <p className="bg-emerald-100 px-8 py-3 mt-2 w-full text-neutral-800 rounded-lg">
                You <span className="font-extrabold">can</span> publish an idea.
                <br />
                It will be shown on the right part of the screen.{" "}
                <span className="font-bold">Everyone could see it</span> and
                logged users could vote for it. ➡️
              </p>
            ) : (
              <p className="bg-red-300 px-8 py-0 mt-2 w-full text-neutral-800 rounded-lg">
                You need to{" "}
                <span className="font-bold">
                  <Link
                    href="/login"
                    className="btn btn-link text-red-800 text-base px-0"
                  >
                    login
                  </Link>{" "}
                  first.
                </span>
              </p>
            )
          ) : (
            (messageType == "Problem" || messageType == "Question") && (
              <p className="bg-emerald-100 px-8 py-3 mt-2 w-full text-neutral-800 rounded-lg">
                Question and problem messages are{" "}
                <span className="font-bold">anonymous</span> and only the
                StackShow admin and creator could see it.
              </p>
            )
          )}
        </div>
        <div className="flex flex-col gap-1">
          <Input
            name={"message_title"}
            id={"message_title"}
            label={"Title: *"}
            value={messageTitle}
            required
            placeholder={"What about... ?"}
            className="input input-bordered w-full"
            onChange={(e) => {
              setMessageTitle(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <Textarea
            label="Your message: *"
            name={"message_text"}
            value={messageDescription}
            id={"message_text"}
            required
            placeholder={"Hi..."}
            onChange={(e) => {
              setMessageDescription(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-12">
        {state.message &&
          (state.message == "Success" ? (
            <p className="bg-emerald-100 px-4 py-2 w-full text-neutral-800 rounded-lg">
              ✅ {state.message}
            </p>
          ) : (
            <p className="bg-red-300 px-4 py-2 w-full text-neutral-800 rounded-lg">
              ⛔ {state.message}
            </p>
          ))}
        <SubmitButton
          text={"Send"}
          disabled={!!!messageType || (!userData && messageType == "Idea")}
        />
      </div>
    </form>
  );
};

export default IdeasForm;
