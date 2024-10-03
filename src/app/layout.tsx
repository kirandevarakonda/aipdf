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
  title: "ChatWithPdf App",
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