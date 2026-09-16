"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to send message.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <form className="grid gap-6 text-left" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-xs font-mono text-muted-foreground"
          >
            NAME
          </label>

          <Input
            id="name"
            name="name"
            placeholder="Your Full Name"
            required
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-xs font-mono text-muted-foreground"
          >
            EMAIL
          </label>

          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-xs font-mono text-muted-foreground"
        >
          MESSAGE
        </label>

        <Textarea
          id="message"
          name="message"
          placeholder="Enter your message..."
          className="min-h-37.5"
          required
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        size="lg"
        disabled={status === "sending"}
      >
        {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
      </Button>

      {status === "success" && (
        <p className="text-sm text-center text-primary">
          MESSAGE SENT SUCCESSFULLY.
        </p>
      )}

      {status === "error" && (
        <p className="text-sm text-center text-destructive">
          MESSAGE FAILED TO SEND. PLEASE TRY AGAIN.
        </p>
      )}
    </form>
  );
}