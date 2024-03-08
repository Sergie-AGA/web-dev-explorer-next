"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  title: z.string().max(80),
  url: z.string().url(),
  header: z.string().optional(),
  body: z.string().optional(),
  response: z.string().optional(),
});

export default function ItemEditor() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {}

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <div className="flex gap-4">
          <div className="flex-1">
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
              name="header"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>API Header</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="API Call Headers"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Optionally set custom headers for the api call
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
                      placeholder="API Call Body"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Optionally set custom body for the api call
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex-1">
            <FormField
              control={form.control}
              name="response"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>API Response</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="API Response"
                      className="resize-none"
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
        </div>
        <div>
          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}

// Continuing: switch between executing now (and implement it) and scheduling
