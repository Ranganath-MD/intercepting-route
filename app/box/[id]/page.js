import Link from "next/link";

export default function Box({ params }) {
  return (
    <div className="h-[90vh] grid place-items-center">
      <Link href="/">
        {"<-"} Go back
      </Link>
      <div className="h-40 w-40 grid place-items-center border border-slate-700 rounded-lg bg-gradient-to-r from-slate-800 to-black text-4xl">
        {params.id}
      </div>
    </div>
  );
}
