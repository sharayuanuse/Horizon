/*
export default: This makes RootLayout the default export of the module, allowing it to be imported 
                without curly braces in other files.

function RootLayout({ children }): This declares a function component named RootLayout. It accepts 
                                   a single argument, which is an object containing the children property.

Readonly<...>: This makes the children prop read-only, meaning it can't be modified within the component.

{ children: React.ReactNode }: This defines the type of the children prop. React.ReactNode is a type that 
                               can represent any renderable React content (e.g., elements, strings, numbers, etc.).

The component returns a JSX structure that consists of a <main> HTML element.
Inside <main>, there is static content (SIDEBAR) and the dynamic content represented by {children}.

{children}: This is a special prop in React that represents whatever elements are nested inside the RootLayout 
            component when it's used elsewhere in the application.
*/

import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from 'next/image';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = {firstName: 'Sharayu', lastName: 'Anuse'};
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn}/>
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image
            src="/icons/logo.svg"
            width={30}
            height={30}
            alt="logo"/>
            <div>
              <MobileNav user={loggedIn}/>
            </div>
          </div>
          {children}
        </div>
    </main>
  );
}
