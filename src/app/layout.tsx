import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Status P-E Pte Ltd | Precision Engineering Solutions in Singapore",
    template: "%s | Status P-E Pte Ltd",
  },
  description:
    "Your one-stop precision engineering solutions partner in Singapore. CNC Milling, Turning, Grinding, Wire Cutting, Waterjet, Laser Cutting, Sheet Metal Bending and Surface Treatment.",
  keywords: [
    "precision engineering",
    "CNC milling",
    "CNC turning",
    "precision grinding",
    "wire cutting",
    "waterjet cutting",
    "laser cutting",
    "sheet metal bending",
    "surface treatment",
    "prototyping",
    "reverse engineering",
    "Singapore manufacturing",
    "CNC machining Singapore",
    "precision parts Singapore",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_SG",
    siteName: "Status P-E Pte Ltd",
    title: "Status P-E Pte Ltd | Precision Engineering Solutions in Singapore",
    description:
      "Your one-stop precision engineering solutions partner in Singapore. CNC Milling, Turning, Grinding, Wire Cutting, Waterjet, Laser Cutting, Sheet Metal Bending and Surface Treatment.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Status P-E Pte Ltd | Precision Engineering Solutions in Singapore",
    description:
      "Your one-stop precision engineering solutions partner in Singapore. CNC Milling, Turning, Grinding, Wire Cutting, Waterjet, Laser Cutting, Sheet Metal Bending and Surface Treatment.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-steel-950 text-white antialiased font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Status P-E Pte Ltd",
              description:
                "Your one-stop precision engineering solutions partner in Singapore. CNC Milling, Turning, Grinding, Wire Cutting, Waterjet, Laser Cutting, Sheet Metal Bending and Surface Treatment.",
              url: "https://www.statuspe.com.sg",
              telephone: "+6597373178",
              email: "damien.ang@statuspe.com.sg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Blk 9010, Tampines Street 93, #01-137",
                addressLocality: "Singapore",
                postalCode: "528844",
                addressCountry: "SG",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 1.3544,
                longitude: 103.9401,
              },
              foundingDate: "2005",
              areaServed: "Singapore",
              serviceType: [
                "CNC Milling",
                "CNC Turning",
                "Precision Grinding",
                "Wire Cutting",
                "Waterjet Cutting",
                "Laser Cutting",
                "Sheet Metal Bending",
                "Surface Treatment",
                "Prototyping",
                "Reverse Engineering",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
