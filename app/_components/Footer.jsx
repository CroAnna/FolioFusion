import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-base-200 text-base-content p-10">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 justify-between w-full gap-12">
          <nav className="flex flex-col gap-2">
            <Link href="/" className="text-xl flex items-center gap-2">
              <Image
                width={32}
                height={32}
                src={"/app-logo-192.png"}
                alt="stackshow-logo"
              />
              StackShow
            </Link>
            <p>
              Build your portfolio fast. Show your projects, experience and
              activities on one place. Choose favorite color palette and custom
              UI elements to make your portfolio truly stand out.
            </p>
            <p>Copyright &copy; 2024 - All rights reserved</p>
          </nav>
          <nav className="flex flex-col gap-2">
            <h6 className="footer-title">Links</h6>
            <Link
              href="/send-feedback"
              className="link link-hover underline text-emerald-500"
            >
              Send Feedback
            </Link>
            <Link href="/login" className="link link-hover">
              Login
            </Link>
            <Link
              href="/https://github.com/CroAnna"
              className="link link-hover"
            >
              Contact Creator
            </Link>
          </nav>
          <nav className="flex flex-col gap-2">
            <h6 className="footer-title">Legal</h6>
            <Link href="/" className="link link-hover">
              Terms of use
            </Link>
            <Link href="/" className="link link-hover">
              Privacy policy
            </Link>
            <Link href="/" className="link link-hover">
              Cookie policy
            </Link>
          </nav>{" "}
          <nav className="flex flex-col gap-2">
            <h6 className="footer-title">More</h6>
            <Link href="/" className="link link-hover">
              Learn Croatian Signs
            </Link>
            <Link
              href="/https://putujemstravem.com/"
              className="link link-hover"
            >
              Putujem s TravEM
            </Link>
          </nav>
        </div>
      </footer>
      <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
        <div className="max-w-screen-xl mx-auto flex flex-row justify-between w-full">
          <aside side="true" className="grid-flow-col items-center">
            <Link href="https://fosleen.com/" target="_blank">
              <Image
                src={"/logo-light.png"}
                alt="fosleen-logo"
                width={160}
                height={20}
                objectFit="cover"
              />
            </Link>
          </aside>
          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <Link href="/https://www.facebook.com/profile.php?id=61558675741146">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </Link>
              <Link href="/https://www.youtube.com/@Fosleen">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </Link>
            </div>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
