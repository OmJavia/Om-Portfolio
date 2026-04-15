import '.././styles/globals.css';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
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