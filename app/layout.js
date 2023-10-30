import "./globals.css";
import { Inter } from "next/font/google";

import Provider from "@/components/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: "blog | admin",
   description: "blog admin dashboard",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body suppressHydrationWarning={true}>
            <Provider>{children}</Provider>
            {/* {children} */}
         </body>
      </html>
   );
}
