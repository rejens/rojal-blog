import { Inter } from "next/font/google";

import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/header/Header";

export const metadata = {
   title: "blog | admin",
   description: "blog admin dashboard",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className="">
            <div className="flex flex-1 min-h-screen">
               <div className="w-1/5 h-screen ">
                  <Sidebar />
               </div>
               <div className="flex-1">
                  <Header />
                  <main className="bg-slate-100  h-screen">{children}</main>
               </div>
            </div>
         </body>
      </html>
   );
}
