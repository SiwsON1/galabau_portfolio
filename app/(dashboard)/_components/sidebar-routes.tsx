"use client";

import {  BookA, DollarSign, Layout, User } from "lucide-react";
import { usePathname } from "next/navigation";

import { SidebarItem } from "./sidebar-item";

const sidebarRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/admin",
  },
  {
    icon: BookA,
    label: "Orders",
    href: "/admin/orders",
  },
  {
    icon: User,
    label: "Customers",
    href: "/admin/customers",
  },
  {
    icon: DollarSign,
    label: "Prices",
    href: "/admin/prices",
  },
];



export const SidebarRoutes = () => {
  const pathname = usePathname();



  return (
    <div className="flex flex-col w-full">
      {sidebarRoutes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  )
}