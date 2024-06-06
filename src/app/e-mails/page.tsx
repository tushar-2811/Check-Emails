"use client";
import React, { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const page = () => {
    const openAIKey = localStorage.getItem("openAPIKey");
    const { data: session } = useSession();
    const imageUrl = session?.user?.image as string;
    const accessToken = session?.user?.accessToken as string;
    const [dataM , setDataM] = useState();

    useEffect(() => {
        try {
             const getData = async() =>  {
                  const response = await fetch("https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults="+5 , {
                    method : "GET",
                    headers : new Headers({Authorization : `Bearer ${accessToken}`})
                  })

                  const data = await response.json();
                  setDataM(data);
            }
            getData();
        } catch (error) {
            console.log(error);
            return;
        }
    },[])

    const handleClassification = () => {
         console.log(accessToken);
         console.log(dataM);
    }
    return (
        <div className='border-2 w-full'>

            <div className='flex justify-between items-center mx-14 my-4'>

                <div className='flex items-center'>
                    <Image src={imageUrl} alt='users image' width={32} height={32} className='rounded-full' />
                    <div className='mx-2'>
                        <h1 className='text-xl font-medium'>{session?.user?.name} </h1>
                        <h4 className='text-sm'> {session?.user?.email} </h4>
                    </div>
                </div>

                <div className='flex justify-end'> {/* This div will push the button to the end */}
                    <Button onClick={handleClassification} className='px-4 py-2 bg-black  rounded-md'>Classify</Button>
                </div>

            </div>



            <div className='mx-14 my-4'>
                E-maild
            </div>
        </div>

    )
}

export default page
