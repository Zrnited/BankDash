import type { Metadata } from "next";
import "./globals.css";
import GeneralLayout from "@/components/layout/general/GeneralLayout";

export const metadata: Metadata = {
  title: "Bank Dash",
  description: "Bank Dash dashboard application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GeneralLayout>{children}</GeneralLayout>
      </body>
    </html>
  );
}
