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
        <script
          dangerouslySetInnerHTML={{ __html: `
            if (window.self !== window.top) {
              const s = document.createElement('script')
              s.src = window.location.origin.includes('localhost')
                ? 'http://localhost:3000/editor-bridge.js'
                : 'https://webwill.com/editor-bridge.js'
              document.body.appendChild(s)
            }
          `}}
        />
      </body>
    </html>
  );
}
