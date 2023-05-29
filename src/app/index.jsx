import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
export default function Home() {
  const [{ user }, , removeCookie] = useCookies(["user"]);

  const signOut = () => {
    removeCookie("user", { path: "/" });
  };

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8 w-full flex flex-col sm:flex-row justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">Home</h2>
        </div>

        <div className="my-2 flex sm:flex-row flex-col">
          <Link
            to="/auth/login"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={signOut}
          >
            Logout
          </Link>
        </div>
      </div>

      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                >
                  User Name
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                >
                  Password
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <a href="#" className="block relative">
                        <img
                          alt="profil"
                          src="https://www.w3schools.com/howto/img_avatar.png"
                          className="mx-auto object-cover rounded-full h-10 w-10 "
                        />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {user.username}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {user.password}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
