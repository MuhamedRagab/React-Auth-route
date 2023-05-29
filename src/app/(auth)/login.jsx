import { useRef } from "react";
import { useCookies } from "react-cookie";

export default function Login() {
  const formRef = useRef(null);
  const [, setCookie] = useCookies(["user"]);

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);

    setCookie("user", data, { path: "/" });
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleLogin}
      className="flex flex-col gap-4 p-4"
    >
      <div className="flex flex-col gap-4">
        <label htmlFor="username">Username</label>
        <input
          className="border border-gray-400 rounded-md p-2"
          name="username"
          id="username"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="password">Password</label>
        <input
          className="border border-gray-400 rounded-md p-2"
          type="password"
          name="password"
          id="password"
        />
      </div>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Login
      </button>
    </form>
  );
}
