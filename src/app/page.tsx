"use client";
import { Button } from "@/components/ui/button";
import { useSession , signIn , signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Home() {
  const {data: session} = useSession();
   const [openAIKey , setOpenAIKey] = useState("");
  const router = useRouter();

   const hanldeClick = () => {
       try {
         if(openAIKey === ""){
            alert("Please enter a valid key");
            return;
         }
         console.log(openAIKey);
         localStorage.setItem("openAPIKey" , openAIKey);
         router.push('/e-mails');
         
       } catch (error) {
         console.log(error);
         return;
       }
   }
  return (
    <>
      {
        session ? (
        <> 
          <div className="h-full mx-8 my-4 pt-2 flex gap-4 items-center">

              <h1 className="font-bold text-4xl" > Enter OpenAI key </h1>
              <input type="text" value={openAIKey} onChange={(e) => setOpenAIKey(e.target.value)} className="border-2 border-red-300 h-12 w-96 px-4 py-2 rounded-md" />
              <Button onClick={hanldeClick} className="bg-black px-4 py-2"> Submit </Button>
          </div>
        </>
        ) :  (
        <> 
        <div className="w-full flex flex-col justify-center items-center mt-10">
          <h1 className="font-bold text-4xl"> Welcome OnBoard</h1>
          <h5 className="text-sm text-pink-400"> Let's Start</h5>
        </div>
        </>
        )
      }
    </>
  );
}
