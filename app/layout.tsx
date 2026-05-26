import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Savory & Sage | Fine Dining Restaurant",
  description: "Experience the art of fine dining with seasonal ingredients and culinary passion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        {/* Webwill Editor Bridge — enables visual editing */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (window.self === window.top) return;
                var s = document.createElement('script');
                s.src = 'https://webwill.vercel.app/editor-bridge.js';
                s.async = true;
                document.body.appendChild(s);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
