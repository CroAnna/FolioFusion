import { Sparkle } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";
import { getUserData } from "../(web-builder)/builder/deploy-portfolio/actions";
import Link from "next/link";

const AIContentSuggestion = ({ onGenerateContentWithAI }) => {
  const [isAIHintVisible, setIsAIHintVisible] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const data = await getUserData();
    setUser(data.userData);
  };

  return (
    <div className="relative inline-block">
      {isAIHintVisible && (
        <>
          <span className="absolute -top-12 -left-4 w-full min-w-52 text-center px-2 py-1 rounded-md bg-grey-middle">
            Enhance content using AI
          </span>
          <span className="absolute -top-6 left-0.5 rotate-45 w-4 h-4 bg-grey-middle"></span>
        </>
      )}
      {user && (
        <div className="flex gap-1">
          <button
            onMouseEnter={() => setIsAIHintVisible(true)}
            onMouseLeave={() => setIsAIHintVisible(false)}
            onClick={() =>
              user.access_granted ? onGenerateContentWithAI() : null
            }
            className={`p-0.5 mb-0.5 rounded-md text-grey-dark  ${
              user.access_granted
                ? " bg-light-green "
                : " bg-light-blue cursor-not-allowed"
            }`}
          >
            <Sparkle size={16} weight="duotone" />
          </button>{" "}
          {!user.access_granted && (
            <Link href="/#pricing">
              <p className="text-light-blue underline text-sm">
                Premium feature
              </p>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default AIContentSuggestion;
