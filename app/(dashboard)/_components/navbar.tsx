import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

import { MobileSidebar } from "./mobile-sidebar"

export const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <MobileSidebar />
      <Link href="/">
            <Button size="sm" variant="ghost">
              <LogOut className="h-4 w-4 mr-2" />
              Back to HomePage
            </Button>
            </Link>
    </div>
  )
}