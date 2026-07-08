import type { Metadata } from "next";
import { Manrope, Unbounded } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700", "800"],
});

const siteUrl = "https://mandarin-service.by";
const siteName = "Mandarin";
const title = "Mandarin - ремонт телефонов, ноутбуков и компьютеров в Минске";
const description =
  "Сервисный центр Mandarin в Минске: ремонт смартфонов, ноутбуков, компьютеров и планшетов. Бесплатная диагностика, гарантия до 6 месяцев, цены от 35 BYN.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: siteName,
  keywords: [
    "ремонт телефонов Минск",
    "ремонт ноутбуков Минск",
    "ремонт компьютеров Минск",
    "сервисный центр Минск",
    "замена экрана телефона",
    "ремонт после воды",
    "Mandarin ремонт",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_BY",
    url: "/",
    siteName,
    title,
    description,
    images: [
      {
        url: "/seo.jpg",
        width: 640,
        height: 640,
        alt: "Mandarin - сервисный центр по ремонту телефонов и компьютеров в Минске",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/seo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      inLanguage: "ru-BY",
      publisher: {
        "@id": `${siteUrl}/#business`,
      },
    },
    {
      "@type": ["LocalBusiness", "ElectronicsStore"],
      "@id": `${siteUrl}/#business`,
      name: `${siteName} - ремонт и аксессуары`,
      url: siteUrl,
      image: `${siteUrl}/seo.jpg`,
      logo: `${siteUrl}/seo.jpg`,
      description,
      telephone: "+375291234567",
      email: "hello@mandarin-service.by",
      priceRange: "35-520 BYN",
      currenciesAccepted: "BYN",
      paymentAccepted: "Cash, Card",
      address: {
        "@type": "PostalAddress",
        streetAddress: "ул. Примерная, 12",
        addressLocality: "Минск",
        addressCountry: "BY",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Минск",
        },
        {
          "@type": "Country",
          name: "Беларусь",
        },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "09:00",
          closes: "21:00",
        },
      ],
      makesOffer: [
        {
          "@type": "Offer",
          name: "Замена экрана смартфона",
          price: "140",
          priceCurrency: "BYN",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Замена батареи смартфона",
          price: "70",
          priceCurrency: "BYN",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Чистка ноутбука и замена термопасты",
          price: "45",
          priceCurrency: "BYN",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Замена матрицы ноутбука",
          price: "180",
          priceCurrency: "BYN",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Замена экрана планшета",
          price: "120",
          priceCurrency: "BYN",
          availability: "https://schema.org/InStock",
        },
      ],
      sameAs: [],
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#repair-service`,
      serviceType: "Ремонт телефонов, ноутбуков, компьютеров и планшетов",
      provider: {
        "@id": `${siteUrl}/#business`,
      },
      areaServed: {
        "@type": "City",
        name: "Минск",
      },
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "35",
        highPrice: "520",
        priceCurrency: "BYN",
        offerCount: "5",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${unbounded.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
