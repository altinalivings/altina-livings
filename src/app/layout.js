import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Altina Livings - Premium Construction & Interiors",
  description: "Crafting timeless spaces for modern living.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* Tracking Scripts will be added here later */}
      </body>
    </html>
  );
}
