import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        <header className="relative w-full mx-auto">
          <nav className="bg-white text-indigo-800 font-bold 
          fixed top-0 right-0 left-0 z-50
          w-full mx-auto py-6 px-20 md:px-60
          flex items-center justify-between
          ">
            <Link className="nav-link" href="/">Home</Link>
            <div className="flex items-center gap-7">
              <Link className="nav-link" href="">About</Link>
              <Link className="nav-link" href="">Contacts</Link>
            </div>
          </nav>
        </header>
        <main className="bg-gray-50 min-h-screen mx-auto py-28 px-10 md:px-16">
          {children}
          {/*В layout.tsx обязательно должен быть {children} — сюда "вставится" контент из page.tsx.*/}
        </main>
        <footer className=" bg-indigo-900 text-white text-xs font-bold 
        w-full mx-auto py-6 
        flex items-center">
          <nav className="p-5 mx-auto flex items-center">
            <p className="p-5">footer</p>
            <p className="p-5">footer</p>
            <p className="p-5">footer</p>
          </nav>
        </footer>
      </body>
    </html>
  );
};
