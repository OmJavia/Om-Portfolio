import '.././styles/globals.css';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Include your main component */}
      <Component {...pageProps} />
      
      {/* Vercel Analytics */}
      <Analytics />

      {/* Vercel Speed Insights */}
      <SpeedInsights />
    </>
  );
}

export default MyApp;