"use client";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function Footer() {
  return (
    <footer className="bg-[#180409] text-gray-300" role="contentinfo">
      <Script type="application/ld+json" id="footer-json-ld">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "SeaNeB",
          "url": "https://www.seaneb.com",
          "logo": "https://www.seaneb.com/logo.svg",
          "sameAs": [
            "https://www.facebook.com/SeaNeB.Tech/",
            "https://x.com/SeaNeB",
            "https://about.seaneb.com/website/social/linkedin",
            "https://www.instagram.com/seaneb.tech/",
            "https://www.youtube.com/@seaneb",
          ],
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "contactType": "customer support",
              "url": "https://about.seaneb.com/contact"
            }
          ]
        })}
      </Script>

      <section className="bg-[#C02247] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6 md:flex-row md:justify-between md:text-left">
          {/* Text Section */}
          <div className="space-y-3 max-w-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
              Empower Your Business with SeaNeB
            </h2>
            <p className="text-sm sm:text-base font-light">
              Join thousands of local businesses growing digitally with SeaNeB.
              Download our app today to connect, manage, and scale your business smarter.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 mt-4 md:mt-0">
            <Link
              href="https://play.google.com/store/apps/details?id=com.seaneb.offers"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download SeaNeB App on Google Play Store"
            >
              <Image
                src="/google-play.svg"
                alt="Get it on Google Play"
                width={170}
                height={52}
                className="hover:opacity-90 transition-transform duration-200 hover:scale-105"
                priority
              />
            </Link>

            <Link
              href="https://apps.apple.com/app/seaneb/id1234567890"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download SeaNeB App on the App Store"
            >
              <Image
                src="/app-store.svg"
                alt="Download on the App Store"
                width={170}
                height={52}
                className="hover:opacity-90 transition-transform duration-200 hover:scale-105"
                priority
              />
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
            <Image
              src="/logo.svg"
              alt="SeaNeB Logo"
              width={180}
              height={60}
              className="w-36 sm:w-40"
            />
            <p className="text-sm sm:text-base text-white max-w-xs">
              SeaNeB connects local businesses, entrepreneurs, and communities
              through powerful digital platforms that promote sustainable
              growth, innovation, and empowerment.
            </p>
            <nav
              aria-label="Social Media Links"
              className="flex flex-wrap justify-center sm:justify-start gap-3 mt-4 text-xl text-[#C02247]"
            >
              <Link
                href="https://www.facebook.com/seanebofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75"
              >
                <i className="ri-facebook-fill"></i>
              </Link>
              <Link
                href="https://x.com/seanebofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75"
              >
                <i className="ri-twitter-x-fill"></i>
              </Link>
              <Link
                href="https://www.linkedin.com/company/seaneb/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75"
              >
                <i className="ri-linkedin-fill"></i>
              </Link>
              <Link
                href="https://www.instagram.com/seanebofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75"
              >
                <i className="ri-instagram-fill"></i>
              </Link>
              <Link
                href="https://www.youtube.com/@seanebofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75"
              >
                <i className="ri-youtube-fill"></i>
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              {[
                ["About SeaNeB App", "https://about.seaneb.com/about"],
                ["News & Blogs", "https://about.seaneb.com/blog"],
                ["Our Solutions", "https://about.seaneb.com/solutions"],
                ["Career", "https://www.linkedin.com/company/seaneb/jobs/"],
              ].map(([label, link]) => (
                <li key={label}>
                  <Link
                    href={link}
                    className="hover:text-[#C02247] transition-all"
                    rel="noopener noreferrer"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Policies</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              {[
                ["Acceptable Use Policy", "https://about.seaneb.com/acceptable-use-policy"],
                ["Terms & Conditions", "https://about.seaneb.com/terms-and-conditions"],
                ["Privacy Policy", "https://about.seaneb.com/privacy-policy"],
                ["Refund Policy", "https://about.seaneb.com/refund-policy"],
                ["Cookie Policy", "https://about.seaneb.com/cookie-policy"],
                ["Content Policy", "https://about.seaneb.com/content-policy"],
                ["CSAE", "https://about.seaneb.com/child-safety-standards-policy"],
              ].map(([label, link]) => (
                <li key={label}>
                  <Link
                    href={link}
                    className="hover:text-[#C02247] transition-all"
                    rel="noopener noreferrer"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              {[
                ["Help & Support", "https://about.seaneb.com/contact"]
              ].map(([label, link]) => (
                <li key={label}>
                  <Link
                    href={link}
                    className="hover:text-[#C02247] transition-all"
                    rel="noopener noreferrer"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm sm:text-base text-white">
          <p>
            Powered by{" "}
            <Link
              href="https://www.seaneb.com"
              className="text-[#C02247] hover:underline"
              rel="noopener noreferrer"
            >
              SeaNeB
            </Link>{" "}
            | Connecting People, Businesses & Progress | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
