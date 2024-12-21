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
      .min(6, { message: "Password must be at least 6 characters long." }),
    passwordConfirmation: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long." }),
  })
  .refine((schema) => schema.password === schema.passwordConfirmation, {
    path: ["passwordConfirmation"],
    message: "Passwords don't match",
  });

export type RegisterBodySchema = z.infer<typeof registerBodySchema>;

export const loginBodySchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("Invalid e-mail format."),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." }),
});

export type LoginBodySchema = z.infer<typeof loginBodySchema>;
