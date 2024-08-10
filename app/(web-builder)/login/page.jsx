import LoginForm from "@/app/_components/LoginForm";

const LoginPage = async () => {
  return (
    <div
      className="flex-col gap-8 items-center mx-4 flex justify-center"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <h2 className="font-bold text-3xl">Log in to continue.</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
