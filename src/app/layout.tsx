import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { FixedPlugin, Layout } from "@/components";



export const metadata: Metadata = {
  title: "Elewade Nigeria Limited ",
  description:
    "npm",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
    
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body>
        <Layout>
          {children}
          <FixedPlugin />
        </Layout>
      </body>
    </html>
  );
}
