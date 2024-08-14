import { useFormStatus } from "react-dom";

const SubmitButton = ({ text, disabled }) => {
  const { pending } = useFormStatus(); // this must be called in child component to work!

  return (
    <button
      className="btn btn-primary"
      type="submit"
      disabled={pending || disabled}
      aria-disabled={pending}
    >
      {pending ? "Checking..." : text}
    </button>
  );
};

export default SubmitButton;
