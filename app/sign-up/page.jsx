import Link from "next/link";
import { login, signup } from "./actions";

const SignUpPage = async () => {
  return (
    <div className="flex flex-col gap-8 w-full items-center mt-10">
      <h2 className="font-bold text-3xl flex items-center">
        Sign up for&nbsp; <span className="text-emerald-400 ">free</span>.
      </h2>
      <form className="flex flex-col gap-8 w-96 bg-neutral-900 p-8 rounded-xl">
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
            <input
              className="input input-bordered w-full "
              id="password"
              name="password"
              type="password"
              placeholder="6+ characters"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <button className="btn btn-primary" formAction={signup}>
            Sign up
          </button>
          <div className="flex text-center flex-col">
            <p className="text-stone-400">Already have an account?</p>
            <div>
              <Link
                href="/login"
                className="text-emerald-400 underline text-lg"
              >
                Login
              </Link>
              <p>and start building your portfolio now</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
