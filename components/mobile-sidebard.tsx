import React from 'react'; // Potwierdź, że import React jest na górze
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "./sidebar";
import Socials from "./socials";

interface MobileSidebarProps {
  navFixed: boolean;
}

export const MobileSidebar = ({ navFixed }: MobileSidebarProps) => {
  const menuColorClass = navFixed ? "text-anthracit1" : "text-white";

  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <Menu className={menuColorClass} />
      </SheetTrigger>
      <SheetContent side="left" className="p-12 flex flex-col justify-between h-full bg-white">
        <Sidebar />
        <Socials containerStyles="flex gap-x-3 text-steelblue" />
      </SheetContent>
    </Sheet>
  );
};