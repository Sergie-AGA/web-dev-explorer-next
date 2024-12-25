"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ShadcnUi/Form";
import { Input } from "@/components/ShadcnUi/Input";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { PersonIcon } from "@radix-ui/react-icons";
import { ActionButton } from "@/components/Buttons/ActionButton/ActionButton";
import { RegisterBodySchema, registerBodySchema } from "../types/authSchema";
import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";
import { Separator } from "@/components/ShadcnUi/Separator";

interface RegistrationFormProps {
  handleRegistration: (email: string) => void;
}

export function RegistrationForm({
  handleRegistration,
}: RegistrationFormProps) {
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);

  const form = useForm<RegisterBodySchema>({
    resolver: zodResolver(registerBodySchema),
  });

  async function onSubmit(values: RegisterBodySchema) {
    setIsPending(true);
    let { data, error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
    });

    if (error) {
      defineError(error.message);
    } else if (data) {
      handleRegistration(values.email);
    }
    setIsPending(false);
  }

  function defineError(error: string) {
    setError(error ? `Error: ${error}` : "An error has occurred");
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
          isLoading={isPending}
          text="REGISTER"
        />

        <p className="text-red-600 text-center">{error && error}</p>

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
