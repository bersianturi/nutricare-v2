"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface signInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignUp: () => void;
}

const SignInModal = ({ isOpen, onClose, onSignUp }: signInModalProps) => {
  const form = useForm();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="lg:max-w-[425px] px-10">
        <div className="flex justify-center items-center mb-4">
          <Image
            src={"/Logo.png"}
            alt="nutricare Logo"
            width={120}
            height={100}
          />
        </div>
        <DialogHeader className="flex sm:text-center justify-center items-center mb-4">
          <DialogTitle>Login to your account</DialogTitle>
          <DialogDescription>
            Enter you credentials below to login
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-y-4">
          <Form {...form}>
            <FormField
              name="email"
              render={() => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email address"
                      className="rounded-full bg-nc-bg border-0"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="email"
              render={() => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Password"
                      className="rounded-full bg-nc-bg border-0"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex flex-col gap-y-2">
              <Button
                type="submit"
                variant={"green"}
                className="w-full rounded-full mt-4"
              >
                Login
              </Button>
              <div className="flex justify-center">
                <p className="text-sm">
                  Don&apos;t have an account?{" "}
                  <Button
                    onClick={onSignUp}
                    variant={"link"}
                    className="hover:no-underline text-nc-orange p-0"
                  >
                    Sign up
                  </Button>
                </p>
              </div>
            </div>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;
