import { supabase } from "../_libs/initSupabase";
import { login, signup } from "./actions";

const LoginPage = async () => {

  return (
    <div className="flex flex-col gap-4">

      <h2> Log in to continue.</h2>
      <form className="flex flex-col gap-2 max-w-xs bg-blue-100 p-8 rounded-xl">
        <label htmlFor="email">Email:</label>
        <input
          class="input input-bordered w-full max-w-xs"
          id="email"
          name="email"
          type="email"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          class="input input-bordered w-full max-w-xs"
          id="password"
          name="password"
          type="password"
          required
        />
        <button className="btn btn-primary" formAction={login}>
          Log in
        </button>
        <button className="btn btn-secondary" formAction={signup}>
          Sign up
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
