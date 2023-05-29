import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { useCookies } from "react-cookie";

export default function Layout() {
  const [{ user }] = useCookies(["user"]);

  if (!user) return <Navigate to="/auth/login" replace />;

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet context={user} />
      </main>
    </>
  );
}
