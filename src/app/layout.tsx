import type { Metadata } from "next";
import "./globals.css";
import NavigationDrawer from "./_components/NavigationDrawer";

export const metadata: Metadata = {
  title: "Emission Tracker",
  description: "당신의 회사의 탄소 배출량을 확인하세요",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex h-screen">
        <aside className="w-64">
          <NavigationDrawer />
        </aside>
        <main className="flex-1 p-3">{children}</main>
      </body>
    </html>
  );
}
