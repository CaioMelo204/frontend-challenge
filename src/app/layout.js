import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"container"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
