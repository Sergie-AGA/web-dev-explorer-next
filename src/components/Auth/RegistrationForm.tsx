"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { PersonIcon } from "@radix-ui/react-icons";
import { ActionButton } from "@/components/Buttons/ActionButton/ActionButton";
import { RegisterBodySchema, registerBodySchema } from "./authSchema";
import { supabase } from "@/lib/supabaseClient";
import { env } from "@/utils/env";

interface RegistrationFormProps {
  handleRegistration: (email: string) => void;
}

export function RegistrationForm({
  handleRegistration,
}: RegistrationFormProps) {
  const form = useForm<RegisterBodySchema>({
    resolver: zodResolver(registerBodySchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  async function onSubmit(values: RegisterBodySchema) {
    let { data, error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
    });

    if (data) {
      handleRegistration(values.email);
    } else if (error) {
      // Need an error handler
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input placeholder="webdev@explorer.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="passwordConfirmation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Confirm your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <ActionButton
          classes="w-full font-bold"
          type="submit"
          isLoading={status == "pending"}
          text="REGISTER"
        />
        <p className="text-destructive text-center">
          {/* {error
            ? error.response?.data?.error
              ? error.response?.data?.error
              : "An error has ocurred"
            : ""} */}
        </p>

        <Separator />
        <Link href="/login" className="ml-2 ">
          <p className="cursor-pointer flex items-center">
            <PersonIcon className="mr-2" />
            Already have an account?{" "}
            <span className="ml-2 underline">Log In</span>
          </p>
        </Link>
      </form>
    </Form>
  );
}
