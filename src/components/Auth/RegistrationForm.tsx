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
import {
  registerBodySchema,
  RegisterBodySchema,
} from "../../services/AuthService";
import { AuthHandler } from "../../services/AuthService";
import { ActionButton } from "@/components/Buttons/ActionButton";
import { useMutation } from "@tanstack/react-query";
import { ServerError } from "../../services/FetchService";

interface RegistrationResponse {
  data: {
    attributes: {
      email: string;
    };
  };
}

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

  const { status, data, error, mutate } = useMutation<
    unknown,
    ServerError,
    RegisterBodySchema
  >({
    mutationKey: ["register"],
    mutationFn: AuthHandler.register,
    onSuccess: (response) => {
      const registrationResponse = response as RegistrationResponse;
      console.log(
        "%c Logged!",
        "background: #01579b; color: white; padding: 2px 4px; border-radius: 4px"
      );
      console.log(response);
      handleRegistration(registrationResponse.data.attributes.email);
    },
  });

  async function onSubmit(values: RegisterBodySchema) {
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
          {error
            ? error.response?.data?.error
              ? error.response?.data?.error
              : "An error has ocurred"
            : ""}
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
