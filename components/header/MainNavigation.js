import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/images/logo/logo.png";

import { FaCaretDown } from "react-icons/fa";

import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Link from "next/link";

const navigation = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Products",
    link: "/",
  },
  {
    id: 3,
    name: "Services",
    link: "/",
  },
  {
    id: 4,
    name: "About",
    link: "/about",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Namaa",
    link: "/namaa",
  },
  {
    id: 2,
    name: "Alpha Herbs",
    link: "/alpha-herbs",
  },
  {
    id: 3,
    name: "Basiqat",
    link: "/basiqat",
  },
  {
    id: 4,
    name: "Alpha Dates",
    link: "/alpha-dates",
  },
];

const Navbar = () => {
  // show and hide menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="shadow-md fixed w-full bg-secondary z-50">
        <div className="container py-2">
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <div data-aos="fade-down" data-aos-once="true">
              <Link href="/" className="flex hover:scale-105 duration-200">
                <Image src={Logo} alt="Logo" className="w-56" />
              </Link>
            </div>
            {/* Link section on windows */}
            <div
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="100"
              className="flex justify-start items-center gap-4 text-lg "
            >
              <ul className="hidden items-center lg:flex text-gray-700">
                {navigation.map((navItem) => (
                  <li key={navItem.id}>
                    {navItem.name != "Products" ? (
                      <Link
                        href={navItem.link}
                        className="inline-block py-4 px-2 xl:px-5 lg:px-4 md:px-3 hover:text-blueColor duration-500 "
                      >
                        {navItem.name}
                      </Link>
                    ) : (
                      // company names (namaa , alpha...........)
                      <ul>
                        <li className="group relative cursor-pointer">
                          <Link
                            href="#"
                            className="flex items-center gap-[2px] py-2  hover:text-blueColor"
                          >
                            Products
                            <span>
                              {/* icon next the name ... */}
                              <FaCaretDown className="transition-all duration-300 group-hover:rotate-180 text-blueColor" />
                            </span>
                          </Link>
                          <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 shadow-md">
                            <ul>
                              {DropdownLinks.map((data) => (
                                <li key={data.id}>
                                  <Link
                                    href={data.link}
                                    className="inline-block w-full rounded-md p-2 hover:bg-blueColor/20 "
                                  >
                                    {data.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </li>
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <Link href="/contact-us">
                <button className=" hidden lg:flex bg-blueColor hover:scale-105 duration-500 text-white px-4 py-2 my-2 rounded-md items-center">
                  Contact Us
                </button>
              </Link>
              {/* menu button to show links and companies name on a small device */}
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-bgGrayColor hover:text-blueColor hover:scale-105 duration-300"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  {/* buttom icon ___ */}
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
          {/* Link section on small device */}
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            {/* menu section on the right */}
            <Dialog.Panel
              data-aos="fade-left"
              className="fixed inset-y-0 right-0 z-50 w-[65%] overflow-y-auto bg-white/75 backdrop-blur-sm px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 "
            >
              <div className="flex items-center justify-between">
                {/* logo image on the left */}
                <Link
                  href="/"
                  className="flex sm:hover:scale-105 duration-200 focus:border-none"
                >
                  <Image src={Logo} alt="Logo" className="w-40" />
                </Link>
                {/* cancel button ( x ) on the right */}
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon
                    className="h-6 w-6 hover:text-red-600 hover:rotate-180 duration-200"
                    aria-hidden="true"
                  />
                </button>
              </div>
              {/* Links on the left in small device */}
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <ul className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <li key={item.id}>
                        {item.name != "Products" ? (
                          <Link
                            onClick={() => setMobileMenuOpen(false)}
                            key={item.name}
                            href={item.link}
                            className=" -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-bgGrayColor hover:bg-blueColor/20 "
                          >
                            {item.name}
                          </Link>
                        ) : (
                          // copanies links
                          <ul>
                            <li className="group relative cursor-pointer">
                              <Link
                                href="#"
                                className="flex items-center gap-[2px] py-2  hover:text-blueColor text-bgGrayColor text-base font-semibold leading-7"
                              >
                                Products
                                <span>
                                  <FaCaretDown className="transition-all duration-300 group-hover:-rotate-90 text-blueColor" />
                                </span>
                              </Link>
                              <div className="absolute z-[9999] left-20 top-0 hidden group-hover:block w-[200px] rounded-md bg-white p-2 shadow-md">
                                <ul>
                                  {DropdownLinks.map((data) => (
                                    <li key={data.id}>
                                      <Link
                                        href={data.link}
                                        className="inline-block w-full rounded-md p-2 hover:bg-blueColor/20 "
                                        onClick={() => setMobileMenuOpen(false)}
                                      >
                                        {data.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </li>
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                  <div className="py-6">
                    <Link
                      onClick={() => setMobileMenuOpen(false)}
                      href="/contact-us"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-bgGrayColor hover:bg-blueColor/20"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default Navbar;
