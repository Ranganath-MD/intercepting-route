"use client"
import { useState } from "react";
import Drawer from "@/components/Drawer";
import Link from "next/link";

export default function Box({ params }) {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <Drawer
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      headerChildren={<Link href="/" onClick={() => setIsOpen(false)}>{"<-"} Go back</Link>}
      className="h-[90vh] grid place-items-center"
    >
      <div className="h-40 w-40 grid place-items-center border border-slate-700 rounded-lg bg-gradient-to-r from-slate-800 to-black text-4xl">
        {params.id}
      </div>
    </Drawer>
  );
}
