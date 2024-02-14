import React from "react";
import Image from "next/image";
import Logo from "@/public/images/logo/logoFooter.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Products",
    link: "/",
  },
  {
    title: "Services",
    link: "/",
  },
];
const HelpLinks = [
  {
    title: "Customer Support",
    link: "/",
  },
  {
    title: "Delivery Details",
    link: "/",
  },
  {
    title: "Terms & Conditions",
    link: "/",
  },
  {
    title: "Privacy Policy",
    link: "/",
  },
];
      
const CompaniesLinks = [
  {
    title: "Namaa",
    link: "/namaa",
  },
  {
    title: "Alpha Herbs",
    link: "/alpha-herbs",
  },
  {
    title: "Basiqat",
    link: "/basiqat",
  },
  {
    title: "Alpha Dates",
    link: "/alpha-dates",
  },
];
const Footer = () => {
  return (
    <div className="bg-bgGrayColor text-white">
      <section className="container py-10">
        <div className=" grid lg:grid-cols-3">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <Link href="">
              <Image
                src={Logo}
                alt="Logo"
                className="w-56 md:hover:scale-105 duration-300"
              />
            </Link>
            <p className="text-md mt-7">Contact Us</p>
            {/* Social Handle */}
            <div className="flex items-center gap-4 mt-6">
              <Link href="/">
                <FaInstagram className="text-2xl hover:text-blueColor duration-300" />
              </Link>
              <Link href="/">
                <FaFacebook className="text-2xl hover:text-blueColor duration-300" />
              </Link>
              <Link href="/">
                <FaLinkedin className="text-2xl hover:text-blueColor duration-300" />
              </Link>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer duration-300 hover:text-blueColor text-gray "
                    >
                      <Link href={link.link}>
                        <span>{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Company
                </h1>
                <ul className="flex flex-col gap-3">
                  {CompaniesLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer duration-300 hover:text-blueColor text-gray "
                    >
                      <Link href={link.link}>
                        <span>{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
