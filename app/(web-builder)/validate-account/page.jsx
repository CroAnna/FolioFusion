import Link from "next/link";

const ValidateAccount = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-dark text-text-primary p-4">
      <div className="max-w-md w-full bg-grey-dark rounded-lg shadow-lg p-8 flex flex-col items-center">
        <div className="mb-6">
          <div className="text-3xl font-bold mb-1">
            <span className="bg-gradient-to-r from-light-blue to-middle-green text-transparent bg-clip-text">
              Folio
            </span>
            <span className="text-text-primary">Fusion</span>
          </div>
        </div>

        <div className="w-24 h-24 rounded-full bg-grey-dark border-4 border-middle-blue flex items-center justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-light-blue"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>

        <h2 className="text-3xl font-bold mb-4">Verification Email Sent</h2>

        <div className="w-16 h-1 bg-gradient-to-r from-light-blue to-light-green rounded mb-6"></div>

        <p className="text-lg mb-8 text-center">
          Please check your inbox and click the verification link we&apos;ve
          sent to complete your registration.
        </p>

        <div className="w-full bg-grey-dark border border-grey-dark rounded-md p-4 mb-8">
          <p className="text-base text-text-primary opacity-80 mb-2">
            Haven&apos;t received the email?
          </p>
          <ul className="text-sm ml-3 list-disc list-inside text-text-primary opacity-70">
            <li>Check your spam or junk folder</li>
            <li>Make sure the email address is correct</li>
            <li>Allow a few minutes for delivery</li>
          </ul>
        </div>

        <Link href="/" className="btn btn-primary">
          Return to Homepage
        </Link>
      </div>

      <div className="mt-8 text-sm text-text-primary opacity-70">
        Made with ❤️ by{" "}
        <Link
          className="underline"
          target="_blank"
          href={
            "https://fosleen.com/?utm_source=foliofusion&utm_medium=account-validation&utm_campaign=internal-link"
          }
        >
          Fosleen
        </Link>
      </div>
    </div>
  );
};

export default ValidateAccount;
