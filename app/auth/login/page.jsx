import LoginPage from "@/components/auth/LoginPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
export default async function HomePage() {
   const session = await getServerSession();

   if (session) {
      redirect("/admin");
   }
   return (
      <>
         <LoginPage />
      </>
   );
}
