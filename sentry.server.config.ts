// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://f62f46e3cc79944920bb79b57bf02b9d@o4507589088247808.ingest.de.sentry.io/4507589147099216",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1, // sets the % chance a given transaction will be sent to sentry to 100%. This means all transactions created in the app will be sent to Sentry for monitoring and tracking.

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  // Uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: process.env.NODE_ENV === 'development',
  
});
