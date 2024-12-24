"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { TriangleLeftIcon, FilePlusIcon } from "@radix-ui/react-icons";
import { ActionButton } from "@/components/Buttons/ActionButton/ActionButton";
import { loginBodySchema, LoginBodySchema } from "../types/authSchema";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ShadcnUi/Form";
import { Input } from "@/components/ShadcnUi/Input";
import { Separator } from "@radix-ui/react-separator";

interface LoginFormProps {
  returnAction: () => void;
}

export default function LoginForm({ returnAction }: LoginFormProps) {
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);

  const form = useForm<LoginBodySchema>({
    resolver: zodResolver(loginBodySchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginBodySchema) {
    setIsPending(true);
    let { data, error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });

    if (error) {
      defineError(error.message);
    } else if (data) {
      // Do something
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
              <FormDescription>
                <Link className="hover:underline" href="/forgot-password">
                  Forgotten Password?
                </Link>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <ActionButton
          classes="w-full font-bold"
          type="submit"
          isLoading={isPending}
          text="LOG IN"
          disabled={false}
        />
        <p className="text-red-600 text-center">{error && error}</p>

        <Separator />
        <p className="flex items-center hover:underline cursor-pointer">
          <FilePlusIcon className="mr-2" />
          <Link href="register">Create new account</Link>
        </p>
        <p
          className="cursor-pointer hover:underline flex items-center"
          onClick={returnAction}
        >
          <TriangleLeftIcon className="mr-2" />
          Back to options
        </p>
      </form>
    </Form>
  );
}
