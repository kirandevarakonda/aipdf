//header in layout
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import FileUpload from "../components/FileUpload";
// import { Button } from "../components/ui/button";
// // import { UserButton, useUser } from "@clerk/nextjs";
// import { auth, currentUser } from "@clerk/nextjs/server";
// import { LogInIcon, ArrowRight } from "lucide-react";
// import Link from "next/link";
// import { checkSubscription } from "@/lib/subscription";
// import SubscriptionButton from "../components/SubscriptionButton";
// import { db } from "@/lib/db";
// import { chats } from "@/lib/db/schema";
// import { eq } from "drizzle-orm";
// import {
//   ClerkProvider,
//   SignInButton,
//   SignedIn,
//   SignedOut,
//   UserButton
// } from '@clerk/nextjs'
// import Provider from "@/components/Provider";
// import { Toaster } from "react-hot-toast";
// import Header from "../components/Header"
// import HeaderAuth from "../components/Headerauth";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "ChatWithPdf App",
// };

// export default async function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const { userId } = auth();
//     console.log(userId);
//     const isAuth = !!userId;
//     const isPro = await checkSubscription();
//     let firstChat;
    
//     if (userId) {
//       firstChat = await db.select().from(chats).where(eq(chats.userId, userId));
//       if (firstChat) {
//         firstChat = firstChat[0];
//       }
//     }
//   return (
//     <ClerkProvider>
//       <Provider>
//         <html lang="en">
//           <body className={inter.className}>
//           {/* {isAuth ? <HeaderAuth /> : <Header />} */}

//             {children}


//             <Toaster />
//           </body>
//         </html>

//       </Provider>
//     </ClerkProvider>

//   );
// }


//layout without header
// 

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import Provider from "@/components/Provider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "aipdf.chat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <Provider>

        <html lang="en">
          <body className={inter.className}>

            {children}


            <Toaster />
          </body>
        </html>

      </Provider>
    </ClerkProvider>

  );
}



// import { authOptions } from '../../pages/api/auth/[...nextauth]';
// import { getServerSession } from 'next-auth'
// import './globals.css'
// import { Inter } from 'next/font/google'
// import SessionProvider from './SessionProvider';
// import Login from './Login';
// import Home from './page';

// const inter = Inter({ subsets: ['latin'] })

// export default async function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   const session = await getServerSession(authOptions);
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//       <SessionProvider session={session}>
//         {!session ? (
//           <Login/>
//         ): (
//           <Home/>
//         )}
//       </SessionProvider>
//       </body>
//     </html>
//   )
// }