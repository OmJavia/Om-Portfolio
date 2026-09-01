// lib/posthog-server.js
// Server-side PostHog client (singleton) for Next.js API routes.
// Uses posthog-node — never import posthog-js in server-side code.

import { PostHog } from 'posthog-node';

let posthogClient = null;

export function getPostHogClient() {
  if (!posthogClient) {
    const token = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!token) {
      if (process.env.NODE_ENV === 'development') {
        console.error(
          'NEXT_PUBLIC_POSTHOG_KEY variable required by PostHog is missing or un-configured, ' +
          'this causes events to be silently missed. ' +
          'This error stops appearing once NEXT_PUBLIC_POSTHOG_KEY is configured'
        );
      }
      return null;
    }
    posthogClient = new PostHog(token, {
      host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
      flushAt: 1,
      flushInterval: 0,
    });
  }
  return posthogClient;
}
