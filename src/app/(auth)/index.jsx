import { Navigate, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function AuthPage() {
  const [{ user }] = useCookies(["user"]);

  return (
    <>
      {!user ? (
        <>
          <Outlet />
          <Navigate to="/auth/login" replace />
        </>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  );
}
