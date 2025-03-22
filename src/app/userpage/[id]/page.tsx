import Image from "next/image";
import { Button } from "@/components/ui/button";
import Loading from "@/app/loading";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function Userpage ({ params } : { params: Promise<{ id: number }>}) {
   const { id } = await params

   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
   const users = await res.json();
   if (!users) notFound();

   return (
      <div className="flex flex-col items-center justify-items-center align-content-center">
         <h1 className="uppercase tracking-wide text-3xl font-bold [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)] p-10">User page</h1>
         {/* user card*/}
         <div className="bg-white border-solid border-1 border-gray-300 rounded-2xl 
         flex flex-col gap-2 
         p-5 m-10 sm:flex-row sm:items-center sm:gap-6 sm:py-4
         relative">
            {!res.ok
            ? (<Loading />)
            : (<>
               <div className="space-y-6 p-10 text-center sm:text-left">
                  <div className="space-y-0.5">
                     <p className="pb-6 text-lg font-semibold text-black">{users.name}</p>
                     <p className="font-medium text-gray-500">Username: 
                        <span className="font-light text-gray-500"> {users.username}</span></p>
                     <p className="font-medium text-gray-500">Email: 
                        <span className="font-light text-gray-500"> {users.email}</span></p>
                     <p className="font-medium text-gray-500">Address:
                        <span className="font-light text-gray-500"> {users.address.street}, {users.address.suite}, {users.address.city}, {users.address.zipcode}</span></p>
                     <p className="font-medium text-gray-500">Phone number:
                        <span className="font-light text-gray-500"> {users.phone}</span></p>
                     <p className="font-medium text-gray-500">Web-site:
                        <span className="font-light text-gray-500"> {users.website}</span></p>
                     <p className="font-medium text-gray-500">Company:
                        <span className="font-light text-gray-500"> {users.company.name}</span></p>
                     <p className="font-light text-gray-500">{users.company.catchPhrase}</p>
                     <p className="font-light text-gray-500">{users.company.bs}</p>
                  </div>
                  <Button>Message</Button>
               </div>
               <Link href={`/`} className="absolute top-6 right-6 cursor-pointer">
               <Image
                  src="/btn-close.svg"
                  width={20}
                  height={20}
                  alt="close button"
                  className="!h-[20px] !w-[20px] object-contain" />
               </Link>
            </>)
            }
         </div>
      </div>
   );
};