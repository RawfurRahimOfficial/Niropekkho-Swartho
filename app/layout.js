
import "./globals.css";



export const metadata = {
  title: "Niropekkho Swartho",
  description: "We smile at the happiness of others.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
