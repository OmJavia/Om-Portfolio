import '.././styles/globals.css';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Script from 'next/script';
import posthog from 'posthog-js';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { MotionConfig } from 'framer-motion';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-open-sans',
  display: 'swap',
});

// Initialize PostHog (client-side only)
if (typeof window !== 'undefined') {
  const token = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (token) {
    posthog.init(token, {
      api_host: '/ingest',
      ui_host: 'https://us.posthog.com',
      defaults: '2026-01-30',
      capture_exceptions: true,
      capture_pageview: false,
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

  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.capture('$pageview');
    }
    const handleRouteChange = () => posthog.capture('$pageview');
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <MotionConfig reducedMotion="user">
        <div className={`${openSans.variable} font-sans`}>
          <Component {...pageProps} />
        </div>
      </MotionConfig>

      <Analytics />
      <SpeedInsights />

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
