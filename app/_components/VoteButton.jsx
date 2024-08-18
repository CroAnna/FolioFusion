"use client";
import { CaretUp } from "@phosphor-icons/react/dist/ssr";
import { vote } from "./actions";
import { useEffect, useState } from "react";

const VoteButton = ({ votes, id }) => {
  const [localVotes, setVotes] = useState(votes);
  const [isVoted, setIsVoted] = useState(false);

  const handleClick = async () => {
    if (!isVoted) {
      const { updateError, fetchError } = await vote(id);

      if (!updateError && !fetchError) {
        console.log(localVotes);

        setVotes((prev) => prev + 1); // prev++ isn't updating the UI (it returns the value before the increment)
        setIsVoted(true);
      }
    }
  };

  useEffect(() => {
    console.log(localVotes);
  }, [localVotes]);

  return (
    <div
      className={`flex items-center flex-col rounded-md justify-center h-fit p-2 cursor-pointer ${
        isVoted ? "bg-cyan-900" : "bg-neutral-950"
      }`}
      onClick={handleClick}
    >
      <CaretUp size={32} color="#06b6d4" />
      <p>{localVotes}</p>
    </div>
  );
};

export default VoteButton;
