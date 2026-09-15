import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { profile } from "@/data/profile";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const siteUrl = getSiteUrl();
const title = "Prashant Kumar — AI/ML & Full-Stack Developer";

export const metadata: Metadata = {
  metadataBase: siteUrl ?? new URL("http://localhost:3100"),
  title: {
    default: title,
    template: "%s | Prashant Kumar",
  },
  description: profile.description,
  authors: [{ name: profile.name, url: profile.github }],
  ...(siteUrl ? { alternates: { canonical: "/" } } : {}),
  openGraph: {
    title,
    description: profile.description,
    siteName: "Prashant Kumar",
    type: "website",
    locale: "en_US",
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
