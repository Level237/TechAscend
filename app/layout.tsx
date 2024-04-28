"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Provider, useSelector } from "react-redux";
import store from "@/store/store";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 
  return (
    <html lang="en">
      <body className={``}>
      <main className=" flex-col items-center overflow-x-hidden bg-gradient-to-r from-blue-300 to-slate-50 ">
      <Provider store={store}>
        <Header/>
        
        {children}
        <section className="w-[100%] bg-[#003366]  py-16 ">
      <Footer/>
     </section>
     </Provider>
        </main>
        </body>
    </html>
  );
}
