import { useFormStatus } from "react-dom";
function Button({ children }) {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-blue-500 rounded-lg text-white text-sm mt-4 p-1 disabled:bg-blue-300"
      disabled={pending}
    >
      {children}
    </button>
  );
}

export default Button;
