"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "primereact/button";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import Logo from "@/public/assets/icons/logo.svg";

const navIcons = [
  { src: "/assets/icons/search.svg", alt: "search" },
  { src: "/assets/icons/black-heart.svg", alt: "heart" },
  { src: "/assets/icons/user.svg", alt: "user" },
];

const Navbar = () => {
  const { status } = useSession();
  return (
    <header className="w-full">
      <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f5] px-10 py-3">
        <div className="flex items-center gap-4 text-[#111418]">
          <div className="size-4"></div>
          <Link href="/" className="flex items-center gap-1">
            <Image src={Logo} width={145} height={45} alt="logo" />

            {/* <p className="nav-logo">
              track<span className="text-primary">My</span>price
            </p> */}
          </Link>
        </div>
        <div className="flex">
          <IconField iconPosition="left">
            <InputIcon className="pi pi-search"> </InputIcon>
            <InputText
              placeholder="Search by product name"
              style={{ borderRadius: "10px 0px 0px 10px" }}
            />
          </IconField>
          <Button
            label="Search"
            className="bg-[#000000] border-none focus:bg-none hover:bg-none"
            style={{ borderRadius: "0px 10px 10px 0px" }}
          />
        </div>
        <div className="flex items-center gap-9">
          <a
            className="text-[#111418] text-sm font-medium leading-normal"
            href="#"
          >
            Popular Products
          </a>
          <a
            className="text-[#111418] text-sm font-medium leading-normal"
            href="#"
          >
            Price Drops
          </a>
          {/* <a
            className="text-[#111418] text-sm font-medium leading-normal"
            href="#"
          >
            Categories
          </a> */}
        </div>
        {status == "unauthenticated" ? (
          <div className="flex gap-2">
            <Link
              href="/auth/signup"
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f0f2f5] text-[#111418] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
            >
              <div
                className="text-[#111418]"
                data-icon="Bell"
                data-size="20px"
                data-weight="regular"
              >
                Signup
              </div>
            </Link>
            <Link
              href="/auth/signin"
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 text-[#111418] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
            >
              <div
                className="text-[#111418]"
                data-icon="User"
                data-size="20px"
                data-weight="regular"
              >
                Signin
              </div>
            </Link>
          </div>
        ) : (
          <div className="flex gap-2">
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f0f2f5] text-[#111418] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
              <div
                className="text-[#111418]"
                data-icon="Bell"
                data-size="20px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
                </svg>
              </div>
            </button>
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f0f2f5] text-[#111418] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
              <div
                className="text-[#111418]"
                data-icon="User"
                data-size="20px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                </svg>
              </div>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
