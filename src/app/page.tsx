import * as React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Loading from "./loading";
import { notFound } from "next/navigation";
import Link from "next/link";

// for TS
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();
  if (!users) notFound();

  return (
    <div className="flex flex-col items-center">
      <h1 className="uppercase tracking-wide text-3xl font-bold [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)] p-10">Users</h1>
      <div className="flex flex-wrap justify-center gap-6 m-10">
        {users.map((user) => (
          <Card key={user.id} className="w-[250px] 
          transition delay-150 duration-300 ease-in-out 
          hover:-translate-y-1 hover:scale-105 hover:bg-indigo-100">
            {!res.ok
            ? (<Loading />)
            : (<>
              <CardHeader>
                <CardTitle>{user.name}</CardTitle>
                <CardDescription>User name</CardDescription>
              </CardHeader>
              <CardContent>
                <CardTitle>{user.email}</CardTitle>
                <CardDescription>Email</CardDescription>
                <CardTitle>{user.company.name}</CardTitle>
                <CardDescription>Company</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href={`/userpage/${user.id}`}>
                  <Button>Details</Button>
                </Link>
              </CardFooter>
            </>)
            }
          </Card>
        ))}
      </div>
    </div>
  );
};