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
import Image from "next/image";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
        {children}
        <div className="auth-asset">
          <div>
            <Image 
            src='/icons/auth-image.svg'
            alt='Auth Image'
            width={500}
            height={500}
            />
          </div>
        </div>
    </main>
  );
}
