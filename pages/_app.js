import '.././styles/globals.css';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Script from 'next/script';
import posthog from 'posthog-js';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Initialize PostHog (client-side only)
if (typeof window !== 'undefined') {
  const token = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (token) {
    posthog.init(token, {
      api_host: '/ingest',
      ui_host: 'https://us.posthog.com',
      defaults: '2026-01-30',
      capture_exceptions: true,
      capture_pageview: false, // Managed manually via router events below
      debug: process.env.NODE_ENV === 'development',
    });
  } else if (process.env.NODE_ENV === 'development') {
    console.error(
      'NEXT_PUBLIC_POSTHOG_KEY variable required by PostHog is missing or un-configured, ' +
      'this causes events to be silently missed. ' +
      'This error stops appearing once NEXT_PUBLIC_POSTHOG_KEY is configured'
    );
  }
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Track pageviews on client-side route transitions
  useEffect(() => {
    const handleRouteChange = () => posthog.capture('$pageview');
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Include your main component */}
      <Component {...pageProps} />

      {/* Vercel Analytics */}
      <Analytics />

      {/* Vercel Speed Insights */}
      <SpeedInsights />

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-B6B3WNX3CG"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-B6B3WNX3CG');
        `}
      </Script>

      {/* Microsoft Clarity (Removed ID to fix shadow bug) */}
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "w0n6f4omu9");
        `}
      </Script>
    </>
  );
}

export default MyApp;