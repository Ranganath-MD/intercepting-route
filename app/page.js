import Link from "next/link";

export default function Home() {
  const data = Array.from({ length: 10 })

  return (
    <main className="pt-20 px-10 grid gap-4 grid-cols-fluid">
      {
        data.map((_, i) => {
          return (
            <Link
              href={`/box/${i+1}`}
              key={i}
              className="h-[96px] grid place-items-center border border-slate-700 rounded-lg bg-gradient-to-r from-slate-800 to-black"
            >
              {i + 1}
            </Link>
          );
        })
      }
    </main>
  )
}
