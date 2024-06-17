import Footer from "./components/Footer/Footer";
import Navbar from "./components/Misc/Navbar";
import PreLoader from "./components/Misc/PreLoader";
import "./globals.css";

export const metadata = {
  title: "Read Realm",
  description: "A space for bibilophile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-main-bg relative font-body">
        <Navbar />
        {children}
        <Footer />
        <PreLoader />
      </body>
    </html>
  );
}
