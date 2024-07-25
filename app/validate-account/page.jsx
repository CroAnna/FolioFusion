import Link from "next/link";

const ValidateAccount = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center gap-8">
      <h2 className="text-8xl">Verification link sent.</h2>
      <h3 className="text-3xl">
        Check your email and validate it using provided URL.
      </h3>
      <Link href="/" className="btn btn-primary underline text-lg">
        Return to homepage
      </Link>
    </div>
  );
};

export default ValidateAccount;
