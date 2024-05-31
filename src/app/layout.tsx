import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import MainContainer from "./containers/main";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "katilmiyorum",
  description: "bir seylere katilmayanlarin ortak noktasi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={playfairDisplay.className}>
        <MainContainer>
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
        </MainContainer>
      </body>
    </html>
  );
}
