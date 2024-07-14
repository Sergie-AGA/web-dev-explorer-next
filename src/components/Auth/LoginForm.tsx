"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { TriangleLeftIcon, FilePlusIcon } from "@radix-ui/react-icons";
import { LoginBodySchema, loginBodySchema } from "../../services/AuthService";
import { AuthHandler } from "../../services/AuthService";
import { ActionButton } from "@/components/Buttons/ActionButton";
import { useMutation } from "@tanstack/react-query";
import { ServerError } from "../../services/FetchService";

interface LoginFormProps {
  returnAction: () => void;
}

export function LoginForm({ returnAction }: LoginFormProps) {
  const form = useForm<LoginBodySchema>({
    resolver: zodResolver(loginBodySchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { status, data, error, mutate } = useMutation<
    unknown,
    ServerError,
    LoginBodySchema
  >({
    mutationKey: ["login"],
    mutationFn: AuthHandler.login,
  });

  async function onSubmit(values: LoginBodySchema) {
    mutate(values);
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
                <Input placeholder="random@teams.com" {...field} />
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
          isLoading={status == "pending"}
          text="LOG IN"
        />
        <p className="text-destructive text-center">
          {error ? error.response?.data?.error : ""}
        </p>

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
