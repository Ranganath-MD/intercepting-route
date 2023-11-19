"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import Drawer from "@/components/Drawer";

export default function Box({ params }) {
  const pathname = usePathname();

  return (
    <Drawer
      isOpen={pathname.includes("/box")}
      headerChildren={<Link href="/">{"<-"} Go back</Link>}
      className="h-[90vh] grid place-items-center"
    >
      <div className="h-40 w-40 grid place-items-center border border-slate-700 rounded-lg bg-gradient-to-r from-slate-800 to-black text-4xl">
        {params.id}
      </div>
    </Drawer>
  );
}
