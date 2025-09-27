"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationDrawer() {
  const navItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Emissions Overview", href: "/overview" },
    { name: "Reports", href: "/reports" },
  ];
  const pathname = usePathname();

  return (
    <nav className="h-full p-3 bg-[#F6F6F6] rounded-tr-md rounded-br-md">
      <p className="font-semibold text-xl mb-4 text-[#1BAD70]">
        🌍 Emission Tracker
      </p>
      <ul className=" flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li
              key={item.href}
              className={`cursor-pointer hover:font-semibold p-2 ${
                isActive ? "bg-[#EAEAEA] font-semibold rounded-md" : ""
              }`}
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
