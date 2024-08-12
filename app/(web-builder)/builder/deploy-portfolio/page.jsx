"use client";
import Input from "@/app/_components/Input";
import {
  checkIfDomainIsTaken,
  getUserData,
  upsertDeploymentData,
} from "./actions";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import NextPreviousNavigation from "@/app/_components/NextPreviousNavigation";
import { PortfolioContext } from "@/app/_components/PortfolioProvider";

const DeployPortfolio = () => {
  const [user, setUser] = useState(null);
  const [domain, setDomain] = useState(null);
  const [domainAvailable, setDomainAvailable] = useState(true);
  const { setConfettiTriggerState } = useContext(PortfolioContext);

  const deployPortfolio = async () => {
    // check if domain is unique and available
    const unavailableDomain = await checkIfDomainIsTaken(domain);
    if (unavailableDomain) {
      console.log("unavailable");
      setDomainAvailable(false);
      setConfettiTriggerState(false);
    } else {
      const { _user, error } = await upsertDeploymentData(domain);
      setConfettiTriggerState(error ? false : _user ? true : false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const data = await getUserData();
    setUser(data.userData);
    setDomain(data.userData.domain_url);
  };

  const handleUpdate = (value) => {
    setDomain(value);
    console.log(value);
    setDomainAvailable(true);
  };

  return (
    user && (
      <div className="p-6 flex flex-col gap-8">
        <h2 className="text-2xl items-center flex md:text-4xl font-bold">
          6. Make portfolio live
        </h2>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl md:text-2xl font-bold">
            6.1. Check for access
          </h3>
          <div>
            <p>
              ❔ To deploy your portfolio you need to have{" "}
              <Link href="/#pricing" className="btn btn-link text-base px-0">
                1-Year Pass
              </Link>{" "}
              or{" "}
              <Link
                href="/#pricing"
                className="btn btn-link btn-accent text-base px-0"
              >
                Lifetime Deal
              </Link>{" "}
              active.
            </p>
            {user && user.access_granted ? (
              <p className="bg-emerald-100 px-8 py-4 w-full text-neutral-800 rounded-lg">
                ✅ You <span className="font-extrabold">can</span> deploy your
                portfolio.
              </p>
            ) : (
              user &&
              !user.access_granted && (
                <p className="bg-red-300 px-8 py-2 w-full text-neutral-800 rounded-lg">
                  ⛔ You <span className="font-extrabold">can not</span> deploy
                  your portfolio yet.{" "}
                  <span className="font-bold">
                    Check out the{" "}
                    <Link
                      href="/#pricing"
                      className="btn btn-link text-red-800 text-base px-0"
                    >
                      packages we offer
                    </Link>
                  </span>{" "}
                  and buy one.
                </p>
              )
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl md:text-2xl font-bold">
            6.2. Choose your unique domain
          </h3>
          <div className="flex flex-row items-center">
            <p>www.portfolio.com/&nbsp;</p>
            <Input
              name={"domain"}
              value={domain}
              onChange={(e) => {
                handleUpdate(e.target.value);
              }}
              placeholder={"your-name"}
            />
          </div>
          {!domainAvailable && (
            <p className="bg-red-200 px-8 py-4 w-full text-neutral-900 rounded-lg">
              ⛔ This domain is already taken (or already yours).
            </p>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl md:text-2xl font-bold">6.3. Deploy it</h3>
          <button
            disabled={!user.access_granted || !domainAvailable}
            className={`btn btn-block btn-secondary h-24 text-lg font-bold ${
              !user.access_granted && "cursor-not-allowed"
            }`}
            onClick={deployPortfolio}
          >
            Deploy portfolio
          </button>
        </div>
        <NextPreviousNavigation previousUrl={"/builder/add-basic-info"} />
      </div>
    )
  );
};

export default DeployPortfolio;
