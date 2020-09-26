import { useRouter } from 'next/router'
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/seasons", label: "Seasons" },
  { href: "/circuits", label: "Circuits" },
  { href: "/teams", label: "Teams" },
  { href: "/pilots", label: "Pilots" }
];

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const router = useRouter();

  const handleClick = () => setOpenMenu(!openMenu);

  const handleRoute = url => router.push(url, undefined, { shallow: true })

  return (
    <nav className="flex flex-row items-center justify-between flex-wrap bg-f1-black p-6 shadow-md">
      <div className="flex items-center flex-shrink-0 text-f1-red mr-6">
        <span className="font-semibold text-xl tracking-tight">F1 Info</span>
      </div>
      <div className="block">
        <button
          onClick={handleClick}
          className="flex items-center px-3 py-2 rounded text-f1-red border-f1-white hover:text-f1-white hover:border-f1-white"
        >
          <svg
            className="fill-current h-5 w-5"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {openMenu ? (
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            ) : (
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            )}
          </svg>
        </button>
      </div>
      {openMenu ? (
        <div className="w-full block flex-grow sm:flex sm:flex-col sm:justify-between sm:items-center sm:space-x-4 sm:mx-2 list-none">
          <div className="text-sm block sm:flex sm:flex-grow">
            {links.map(({ href, label }) => (
              <div
                key={`${href}${label}`}
                className="hover:shadow-lg sm:mx-2 transition-all ease-in-out duration-300"
              >
                <a
                  onClick={() => handleRoute(href)}
                  className="btn-f1 block font-medium text-center mt-3 no-underline sm:flex sm:mt-0 text-f1-white cursor-pointer"
                >
                  {label}
                </a>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
};
