"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";
import SignInModal from "./modals/sign-in-modal";
import { useState } from "react";
import SignUpModal from "./modals/sign-up-modal";

const Navbar = () => {
  const pathname = usePathname();

  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  const menuItems = [
    {
      title: "Home",
      url: "/",
      active: pathname === "/",
    },
    {
      title: "BMI Calculate",
      url: "/bmi-calculate",
      active: pathname === "/bmi-calculate",
    },
    {
      title: "Article",
      url: "/",
      active: pathname === "/",
    },
    {
      title: "Community",
      url: "/",
      active: pathname === "/",
    },
    {
      title: "Food Nutrient",
      url: "/",
      active: pathname === "/",
    },
  ];

  return (
    <>
      <SignInModal
        isOpen={signInOpen}
        onClose={() => setSignInOpen(false)}
        onSignUp={() => {
          setSignInOpen(false);
          setSignUpOpen(true);
        }}
      />
      <SignUpModal
        isOpen={signUpOpen}
        onClose={() => setSignUpOpen(false)}
        onSignIn={() => {
          setSignUpOpen(false);
          setSignInOpen(true);
        }}
      />
      <nav className="border-b sticky top-0 z-50 bg-white">
        <div className="flex h-16 items-center justify-between lg:px-[100px] px-[25px]">
          <div className="flex items-center mt-[-6px]">
            <Link href={"/"}>
              <Image
                src={"/Logo.png"}
                alt="nutricare Logo"
                width={120}
                height={100}
              />
            </Link>
          </div>
          <div className="flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <Link href={item.url} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={
                          navigationMenuTriggerStyle() +
                          " text-nc-secondary bg-transparent hover:bg-transparent hover:text-nc-green focus:bg-transparent focus:text-nc-green active:text-nc-green"
                        }
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center gap-x-2">
            <Button
              size={"default"}
              variant={"orange"}
              className="rounded-full"
              onClick={() => setSignInOpen(true)}
            >
              Login
            </Button>
            <Button
              variant={"link"}
              className="hover:text-nc-green hover:no-underline text-nc-secondary"
              onClick={() => setSignUpOpen(true)}
            >
              Register
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
