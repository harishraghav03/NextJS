import Script from "next/script";

const GoogleAnalyticsHead = () => {
  return (
    // beforeInteractive -> This script is loaded before Next.js injects any client-side code into our pages. This is called Hydration, e.g., Block detectors or cookie consent managers.
    // afterInteractive - default
    // lazyOnload - Background or low-priority scripts, e.g., chat plugins, social media widgets, etc.
    <Script id="google-analytics-script" strategy="beforeInteractive">
      {`(function(w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', 'GTM-5B8RSVL8');`}
      {/* This long string is passed as a child to the Script component, which will parse the string and interpret it as JavaScript code. */}
    </Script>
  );
};

export default GoogleAnalyticsHead;
