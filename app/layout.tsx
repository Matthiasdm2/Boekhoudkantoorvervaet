import "./../styles/globals.css";
import { Poppins } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400","600","700"] });

export const metadata = {
  title: "Boekhoudkantoor Vervaet",
  description: "Uw cijfers, onze zorg. Persoonlijk, digitaal en toekomstgericht."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className={poppins.className}>
        <Navbar />
        <main className="mt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
