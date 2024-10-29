"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ShadcnUi/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ShadcnUi/Form";
import { Textarea } from "@/components/ShadcnUi/Textarea";
import { Input } from "@/components/ShadcnUi/Input";
import ToggleGroup from "./ToggleGroup";
import { useState } from "react";
import { Label } from "@/components/ShadcnUi/Label";
import { Switch } from "@/components/ShadcnUi/Switch";
import { IconRefresh } from "@tabler/icons-react";

const FormSchema = z.object({
  title: z.string().min(1).max(80),
  url: z.string().url(),
  method: z.string().min(1, { message: "A HTTP Method is required" }),
  headers: z
    .string()
    .optional()
    .refine(
      (value) => {
        if (value) {
          try {
            JSON.parse(value);
            return true;
          } catch (error) {
            return false;
          }
        }
        return true;
      },
      { message: "Invalid JSON format for headers" }
    )
    .transform((value) => (value ? JSON.parse(value) : {})),
  body: z
    .string()
    .optional()
    .refine(
      (value) => {
        if (value) {
          try {
            JSON.parse(value);
            return true;
          } catch (error) {
            return false;
          }
        }
        return true;
      },
      { message: "Invalid JSON format for the body" }
    )
    .transform((value) => (value ? JSON.parse(value) : {})),
  response: z.string().optional(),
});

export default function ItemEditor() {
  const [isScheduled, setIsScheduled] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      body: "",
      headers: "",
      method: "",
      title: "",
      url: "",
      response: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  async function handleFetch() {
    try {
      const headers = form.getValues("headers");
      console.log(headers);
      const options = {
        method: form.getValues("method"),
        // headers,
      };
      console.log(form.getValues("headers"));

      if (form.getValues("method") !== "GET") {
        options.body = JSON.stringify(form.getValues("body"));
      }

      const res = await fetch(form.getValues("url"), options);

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const responseData = await res.json();

      form.setValue("response", JSON.stringify(responseData, null, 2));
    } catch (error) {
      console.error("Error during fetch:", error.message);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <div className="flex gap-4">
          <div className="flex-1 flex flex-col gap-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Title" {...field} />
                  </FormControl>
                  <FormDescription>This identifies the task</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>API link</FormLabel>
                  <FormControl>
                    <Input placeholder="Link" {...field} />
                  </FormControl>
                  <FormDescription>The API that will be saved</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="method"
              render={({ field }) => (
                <div>
                  <FormLabel>API HTTP Method</FormLabel>
                  <FormControl>
                    <div className="py-2">
                      <ToggleGroup
                        {...field}
                        onClick={(value) => {
                          const currentValue = form.getValues("method");
                          form.setValue(
                            "method",
                            value === currentValue ? "" : value
                          );
                        }}
                        values={["GET", "POST", "PATCH", "PUT", "DELETE"]}
                      />
                    </div>
                  </FormControl>
                  <FormDescription>
                    The HTTP Method to be used for this API call
                  </FormDescription>
                  <FormMessage />
                </div>
              )}
            />
            <FormField
              control={form.control}
              name="headers"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>API Headers</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="API Headers"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Optionally set custom headers for the API call
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="body"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>API Body</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="API Body"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Optionally set custom body for the API call
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex items-center space-x-2">
              <Label htmlFor="schedule">Schedule API Call for later</Label>
              <Switch
                id="schedule"
                onCheckedChange={(value) => setIsScheduled(value)}
              />
            </div>
            {isScheduled ? (
              <div>Hey</div>
            ) : (
              <div className="flex flex-col gap-4">
                <Button
                  onClick={handleFetch}
                  type="button"
                  variant="secondary"
                  className="flex items-center gap-4"
                >
                  <IconRefresh />
                  Update response
                </Button>
                <FormField
                  control={form.control}
                  name="response"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>API Response</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="API Response"
                          readOnly
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        The response of your API call. Automatically filled.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
          </div>
        </div>
        <div>
          <Button variant="default" type="submit">
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
}
