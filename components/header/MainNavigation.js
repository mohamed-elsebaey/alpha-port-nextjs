import React from "react";
import Image from "next/image";
import Logo from "@/public/images/logo/logo.png";

import { FaCaretDown } from "react-icons/fa";
import Link from "next/link";

const Menu = [
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
    link: "/",
  },
  {
    id: 2,
    name: "Alpha Herbs",
    link: "/",
  },
  {
    id: 3,
    name: "Basiqat",
    link: "/",
  },
  {
    id: 4,
    name: "Alpha Dates",
    link: "/",
  },
];

const Navbar = () => {
  return (
    <>
      <div className="shadow-md fixed w-full bg-secondary z-50">
        <div className="container py-2">
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <div data-aos="fade-down" data-aos-once="true">
              <Link href="#" className="flex hover:scale-105 duration-200">
                <Image src={Logo} alt="Logo" className="w-56" />
              </Link>
            </div>
            {/* Link section */}
            <div
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="100"
              className="flex justify-start items-center gap-4 text-lg "
            >
              <ul className="hidden items-center lg:flex text-gray-700">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    {menu.name != "Products" ? (
                      <Link
                        href={menu.link}
                        className="inline-block py-4 px-2 xl:px-5 lg:px-4 md:px-3 hover:text-blueColor duration-500 "
                      >
                        {menu.name}
                      </Link>
                    ) : (
                      <ul>
                        <li className="group relative cursor-pointer">
                          <Link
                            href="#"
                            className="flex items-center gap-[2px] py-2  hover:text-blueColor"
                          >
                            Products
                            <span>
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
              <button className=" bg-blueColor hover:scale-105 duration-500 text-white px-4 py-2 my-2 rounded-md items-center">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
