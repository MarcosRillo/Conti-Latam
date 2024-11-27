import { openSans, montserrat } from "@/app/ui/fonts";
import "./globals.css";

export const metadata = {
  title: "Conti Latam",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${openSans.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}