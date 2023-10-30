import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1>Welcome You Are Signed In</h1>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
