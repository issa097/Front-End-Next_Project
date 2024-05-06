// "use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  // function check() {
  //   if (localStorage.getItem("Token")) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }
  const coo = cookies()
  const them = coo.get('Token')


  // console.log("first", document.localStorage.getItem("Token"))
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex gap-4 justify-center aline-center bg-blue-400">
          <div className="w-[50%] flex justify-end gap-4">
            <Link href="/product">Create</Link>
            <Link href="/product/getproduct">Product</Link>
            <Link href="/product/category">Category</Link>
          </div>

          {
            them
              ? (
                <div className="flex justify-end w-[42%] gap-4">
                  <Link href="/register">Register</Link>

                </div>


              ) : (
                <div className="flex justify-end w-[42%] gap-4">
                  <Link href="/register">Register</Link>
                  <Link href="/login">Login</Link>

                </div>
              )
          }



        </nav>
        {children}
      </body>
    </html >
  );
}