import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "../components/Navbar";



export const metadata = {
  title: "Niropekkho Swartho",
  description: "We smile at the happiness of others.",
  icons: {
    icon: "/favicon.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body>
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
