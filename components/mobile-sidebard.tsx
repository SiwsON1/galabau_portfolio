import { Menu, MessageCircle, PhoneCall } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "./sidebar";
import Socials from "./socials";

export const MobileSidebar = () => {


  return (
    <Sheet>
      <SheetTrigger className="text-black md:hidden pr-4 hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-12 flex flex-col justify-between h-full bg-white">
        <Sidebar />
        <Socials containerStyles="flex gap-x-3 text-steelblue" />
      </SheetContent>
    </Sheet>
  );
};