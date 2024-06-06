"use client";
import { Button } from "@/components/ui/button";
import { useSession , signIn , signOut } from "next-auth/react";

export default function Home() {
  const {data: session} = useSession();
  return (
    <>
    <h1 className="text-xl font-mono font-medium text-sky-400">E-mails App</h1>
    {
       session ? (
        <>
          <h1>Hello , {session.user?.email}</h1>
          <Button onClick={() => signOut()} >SignOut</Button>
        </>
       ) 
       : (
        <> 
         <h1>Not Signed In</h1>
         <Button onClick={() => signIn()}>Sign In</Button>
        </>
       )
    }
    </>
  );
}
