import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Please Sign In</h1>
      <Link href='/dashboard'>Sign In</Link>
    </div>
  )
}
