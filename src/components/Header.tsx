"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import { useSession , signIn , signOut } from "next-auth/react";


const Header = () => {
    const {data: session} = useSession();
  return (
    <div className='w-full h-16 bg-black/70 flex px-8 justify-between items-center'>
       <div>
       <h1 className="text-xl font-mono font-medium text-white">E-mails App</h1>
       </div>

       <div>
       {
       session ? (
        <>
        <div className='flex items-center gap-x-4'>
        <h1>{session.user?.email}</h1>
          <Button onClick={() => signOut()} >SignOut</Button>
        </div>
        
        </>
       ) 
       : (
        <> 
         <Button onClick={() => signIn()}>Sign In</Button>
        </>
       )
    }
       </div>
    </div>
  )
}

export default Header
