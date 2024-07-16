import { fetch } from "@/features/auth/services/FetchService";
import { IEndpoints } from "@/features/auth/services/FetchService";
import z from "zod";

// Schemas
export const registerBodySchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "This field has to be filled." })
      .email("Invalid e-mail format."),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 character slong." }),
    passwordConfirmation: z
      .string()
      .min(6, { message: "Password must be at least 6 character slong." }),
  })
  .refine((schema) => schema.password === schema.passwordConfirmation, {
    path: ["confirmPassword"],
    message: "Password don't match",
  });
export type RegisterBodySchema = z.infer<typeof registerBodySchema>;

export const loginBodySchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("Invalid e-mail format."),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 character slong." }),
});
export type LoginBodySchema = z.infer<typeof loginBodySchema>;

// Handler
export class AuthHandler {
  static async register(data: RegisterBodySchema) {
    return await fetch({
      ...authEndpoints.register,
      data,
    });
  }
  static async login(data: LoginBodySchema) {
    return await fetch({
      ...authEndpoints.login,
      data,
    });
  }
}

// Endpoints
const authEndpoints: IEndpoints = {
  register: {
    url: "http://localhost:3333/auth/register",
    method: "post",
  },
  login: {
    url: "http://localhost:3333/auth/login",
    method: "post",
  },
};
