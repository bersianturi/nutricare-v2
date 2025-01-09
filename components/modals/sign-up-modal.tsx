"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface signUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignIn: () => void;
}

const SignUpModal = ({ isOpen, onClose, onSignIn }: signUpModalProps) => {
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
          <DialogTitle>Create an account</DialogTitle>
          <DialogDescription>
            Enter your credentials below to create account
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-y-4">
          <Form {...form}>
            <div className="flex gap-x-2">
              <FormField
                name="firstName"
                render={() => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="First name"
                        className="rounded-full bg-nc-bg border-0"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="firstName"
                render={() => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Last name"
                        className="rounded-full bg-nc-bg border-0"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
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
                  Have an account?{" "}
                  <Button
                    onClick={onSignIn}
                    variant={"link"}
                    className="hover:no-underline text-nc-orange p-0"
                  >
                    Sign in
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

export default SignUpModal;
