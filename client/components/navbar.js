import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import Register from "./register";
import { ConnectWallet, useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import { useRouter } from 'next/router';

const ADMIN_ADDRESS = "0x6faC4708fFb8BB4ccfF3149AF2A59f59E4Ef8F16";
const CONTRACT_ADDRESS = "0x30c2d6966A5FB06534c3Ad4F65Dc14b596516C65";

const Navbar = () => {
  const address = useAddress();
  const { contract } = useContract(CONTRACT_ADDRESS);
  const { data: isRegistered, isLoading } = useContractRead(contract, "isRegistered", [address]);
  const isAdmin = address === ADMIN_ADDRESS;
  const router = useRouter();

  useEffect(() => {
    if (address) {
      if (isAdmin) {
        console.log("Admin connected successfully");
        router.push('/dashboard');
      } else if (!isLoading && isRegistered) {
        console.log("Registered member connected.");
        router.push('/memberDashboard');
      } else {
        console.log("Non-admin or non-registered wallet connected.");
      }
    }
  }, [address, isRegistered, isLoading]);

  const navigation = isAdmin ? ["Admin", "Dashboard", <Register />] : ["Home", "Blog", <Register />];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <span>
                      <Image
                        src="/img/logo.svg"
                        alt="N"
                        width="32"
                        height="32"
                        className="w-8"
                      />
                    </span>
                    <span>JOINT AIRMEN MESS</span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open ? (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16 a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16 a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16 a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <ConnectWallet />
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href="/"
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <ConnectWallet />
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
