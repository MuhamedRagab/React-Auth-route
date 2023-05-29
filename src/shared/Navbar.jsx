import { NavLink } from "react-router-dom";
import { navigations } from "../utils/navigation";

export default function Navbar() {
  return (
    <ul className="flex justify-center items-center gap-4">
      {navigations.map((nav, index) => (
        <li key={index} className="text-2xl">
          <NavLink className="text-blue-500 hover:text-blue-700" to={nav.path}>
            {nav.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
