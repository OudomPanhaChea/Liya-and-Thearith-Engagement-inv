import type { Metadata } from "next";
import { Moulpali, Kantumruy_Pro, Moul  } from "next/font/google";
import "./globals.css";

const moulpaliFont = Moulpali({
  weight: '400',
  variable: '--font-moulpali'
});

const moulFont = Moul({
  weight: '400',
  variable: '--font-moul'
});

const kantumruyProFont = Kantumruy_Pro({
  weight: ["400", "500", "600", "700"],
  variable: '--font-kantumruypro'
});

export const metadata: Metadata = {
  title: "លិខិតអញ្ជើញសិរីមង្គលពិធីភ្ជាប់ពាក្យ",
  description: "លិខិតអញ្ជើញសិរីមង្គលពិធីភ្ជាប់ពាក្យ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${moulpaliFont.variable} ${kantumruyProFont.variable} ${moulFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
