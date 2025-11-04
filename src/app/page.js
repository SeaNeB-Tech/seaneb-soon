"use client";

import Head from "next/head";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterLine,
  RiLinkedinBoxLine,
  RiYoutubeLine
} from "react-icons/ri";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>SeaNeB – Empowering Local Businesses Digitally</title>

        <meta
          name="description"
          content="SeaNeB connects local businesses, entrepreneurs, and communities through powerful digital platforms that promote sustainable growth, innovation, and empowerment."
        />

        <meta
          name="keywords"
          content="SeaNeB, digital business solutions, local economy, business growth, entrepreneur tools"
        />
        <meta name="author" content="SeaNeB" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png?v=2" />
        <link rel="canonical" href="https://www.seaneb.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="SeaNeB – Empowering Local Businesses Digitally" />
        <meta
          property="og:description"
          content="Join SeaNeB to grow your business digitally. Connect, collaborate, and scale smarter with our innovative ecosystem."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.seaneb.com/" />
        <meta property="og:image" content="https://www.seaneb.com/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SeaNeB – Empowering Local Businesses Digitally" />
        <meta
          name="twitter:description"
          content="SeaNeB helps local businesses connect with customers and grow through digital empowerment."
        />
        <meta name="twitter:image" content="https://www.seaneb.com/og-image.jpg" />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SeaNeB",
            "url": "https://www.seaneb.com/",
            "logo": "https://www.seaneb.com/logo.svg",
            "sameAs": [
              "https://www.facebook.com/SeaNeB.Tech/",
              "https://x.com/SeaNeB",
              "https://about.seaneb.com/website/social/linkedin",
              "https://www.instagram.com/seaneb.tech/",
              "https://www.youtube.com/@seaneb"
            ]
          })}
        </script>
      </Head>

      <Navbar />

      <div
        className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/seaneb-bg.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>

        <div className="relative z-10 text-center max-w-xl sm:max-w-2xl lg:max-w-3xl text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Welcome to SeaNeB
          </h1>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Empowering Businesses, Building Communities
          </h3>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 px-2 sm:px-0">
            SeaNeB bridges the gap between innovation and growth — helping local
            businesses thrive with digital tools, community connections, and smarter
            engagement platforms.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 sm:gap-6 mt-8 text-xl sm:text-2xl">
            <a
              href="https://www.facebook.com/SeaNeB.Tech/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-[#C02247] transition-colors"
            >
              <RiFacebookFill />
            </a>
            <a
              href="https://x.com/SeaNeB"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-[#C02247] transition-colors"
            >
              <RiTwitterLine />
            </a>
            <a
              href="https://about.seaneb.com/website/social/linkedin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#C02247] transition-colors"
            >
              <RiLinkedinBoxLine />
            </a>
            <a
              href="https://www.youtube.com/@seaneb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-[#C02247] transition-colors"
            >
              <RiYoutubeLine />
            </a>
            <a
              href="https://www.instagram.com/seaneb.tech/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-[#C02247] transition-colors"
            >
              <RiInstagramLine />
            </a>
          </div>
        </div>
      </div>


      <Footer />
    </>
  );
}
