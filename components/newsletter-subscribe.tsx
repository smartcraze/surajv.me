"use client";

import { FormEvent, useMemo, useState } from "react";
import { Loader2, Mail } from "lucide-react";

type SubscribeResponse = {
  data?: {
    subscribeToNewsletter?: {
      status?: string;
      __typename?: string;
    };
  };
  errors?: Array<{ message?: string }>;
};

const NEWSLETTER_MUTATION = `mutation SubscribeToNewsletter($input: SubscribeToNewsletterInput!) {
  subscribeToNewsletter(input: $input) {
    status
    __typename
  }
}`;

const PUBLICATION_ID =
  process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_ID ?? "6934510a8437477f66ef6163";

function isEmailValid(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  const canSubmit = useMemo(() => {
    return isEmailValid(email) && !isSubmitting;
  }, [email, isSubmitting]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isEmailValid(email) || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setMessage(null);
    setIsError(false);

    try {
      const response = await fetch("https://gql-beta.hashnode.com/", {
        method: "POST",
        headers: {
          accept:
            "application/graphql-response+json, application/graphql+json, application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          operationName: "SubscribeToNewsletter",
          query: NEWSLETTER_MUTATION,
          variables: {
            input: {
              email: email.trim(),
              publicationId: PUBLICATION_ID,
            },
          },
        }),
      });

      const payload = (await response.json()) as SubscribeResponse;
      const status = payload?.data?.subscribeToNewsletter?.status;

      if (!response.ok || payload?.errors?.length || !status) {
        throw new Error(payload?.errors?.[0]?.message || "Unable to subscribe right now.");
      }

      setMessage("Subscribed successfully. Check your inbox for confirmation.");
      setEmail("");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Something went wrong while subscribing.";
      setIsError(true);
      setMessage(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      aria-label="Subscribe to newsletter"
      className="w-full max-w-2xl mx-auto rounded-xl border border-zinc-700/70 bg-zinc-900/40 p-4 sm:p-5"
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800 text-zinc-200">
          <Mail aria-hidden="true" className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <h3 className="text-base sm:text-lg font-semibold text-zinc-100">
            Subscribe to the newsletter
          </h3>
          <p className="text-sm text-zinc-400 mt-1">
            Get latest case studies, dev notes, and build updates.
          </p>
        </div>
      </div>

      <form onSubmit={onSubmit} className="mt-4 flex flex-col sm:flex-row gap-2">
        <label htmlFor="newsletter-email" className="sr-only">
          Email
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@domain.com"
          autoComplete="email"
          required
          className="h-10 w-full rounded-md border border-zinc-700 bg-zinc-950/70 px-3 text-sm text-zinc-100 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
        />
        <button
          type="submit"
          disabled={!canSubmit}
          className="h-10 shrink-0 rounded-md border border-zinc-600 bg-zinc-100 px-4 text-sm font-medium text-zinc-900 hover:bg-white disabled:cursor-not-allowed disabled:opacity-60 transition-colors inline-flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
              Subscribing...
            </>
          ) : (
            "Subscribe"
          )}
        </button>
      </form>

      {message ? (
        <p
          className={`mt-3 text-sm ${
            isError ? "text-rose-400" : "text-emerald-400"
          }`}
          role="status"
          aria-live="polite"
        >
          {message}
        </p>
      ) : null}
    </section>
  );
}
