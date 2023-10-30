import "./globals.css";
import { Inter } from "next/font/google";
import { BlogContextProvider } from "@/components/context/BlogContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: "blog | admin",
   description: "blog admin dashboard",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <BlogContextProvider>
            <body className={inter.className}>{children}</body>
         </BlogContextProvider>
      </html>
   );
}
