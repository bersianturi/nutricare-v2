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
import { useMediaQuery } from "@/hooks/use-media-query";
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "./ui/drawer";
import {
  Calculator,
  CookingPot,
  Home,
  LogIn,
  LogOut,
  Menu,
  MessagesSquare,
  Newspaper,
  UserRoundPlus,
} from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const pathname = usePathname();

  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  const menuItems = [
    {
      title: "Home",
      url: "/",
      icon: Home,
      active: pathname === "/",
    },
    {
      title: "BMI Calculate",
      url: "/bmi-calculate",
      icon: Calculator,
      active: pathname === "/bmi-calculate",
    },
    {
      title: "Article",
      url: "/",
      icon: Newspaper,
      active: pathname === "/",
    },
    {
      title: "Community",
      url: "/",
      icon: MessagesSquare,
      active: pathname === "/",
    },
    {
      title: "Food Nutrient",
      url: "/",
      icon: CookingPot,
      active: pathname === "/",
    },
  ];

  return isDesktop ? (
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
  ) : (
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
        <Drawer direction="right">
          <DrawerTrigger>
            <Menu />
          </DrawerTrigger>
          <DrawerContent className="py-6 px-4 gap-y-8">
            <VisuallyHidden>
              <DrawerTitle>MobileNav</DrawerTitle>
            </VisuallyHidden>
            <div className="flex justify-center items-center">
              <Image
                src={"/Logo.png"}
                alt="nutricare Logo"
                width={120}
                height={100}
              />
            </div>
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col space-y-2">
                {menuItems.map((item) => (
                  <Button
                    asChild
                    variant={"ghost"}
                    size={"lg"}
                    className="justify-start px-4 rounded-full"
                    key={item.title}
                  >
                    <Link
                      href={item.url}
                      className="hover:text-nc-green !text-[16px]"
                    >
                      <item.icon className="mr-2 h-4 w-4" aria-hidden />
                      {item.title}
                    </Link>
                  </Button>
                ))}
              </div>
              <div className="flex flex-col space-y-2">
                {/* <Link
                  href="#"
                  className="hover:text-nc-green hover:bg-nc-bg flex gap-x-2 font-medium items-center py-2 px-4 mx-2 rounded-md !text-[16px]"
                >
                  <Avatar>
                    <AvatarImage
                      src="/illustration/user.jpeg"
                      alt="@bersianturi_"
                      className="object-cover object-center"
                    />
                    <AvatarFallback>BS</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">
                      Bernard Sianturi
                    </span>
                    <span className="truncate text-xs">@bersianturi</span>
                  </div>
                </Link>
                <Button
                  asChild
                  variant={"ghost"}
                  size={"lg"}
                  className="justify-start"
                  key="Logout"
                >
                  <Link href="#" className="text-nc-orange !text-[16px]">
                    <LogOut className="mr-2 h-4 w-4" aria-hidden />
                    Logout
                  </Link>
                </Button> */}
                <Button
                  asChild
                  variant={"orange"}
                  size={"lg"}
                  className="justify-start px-4 rounded-full"
                  key="Login"
                >
                  <Link href="#" className="text-nc-orange !text-[16px]">
                    <LogIn className="mr-2 h-4 w-4" aria-hidden />
                    Login
                  </Link>
                </Button>
                <Button
                  asChild
                  variant={"ghost"}
                  size={"lg"}
                  className="justify-start px-4 rounded-full"
                  key="Register"
                >
                  <Link href="#" className="hover:text-nc-green !text-[16px]">
                    <UserRoundPlus className="mr-2 h-4 w-4" aria-hidden />
                    Register
                  </Link>
                </Button>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
