"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [{
    name: "Login",
    href: "/login"
}, {
    name: "Register",
    href: "/register"
}, {
    name: "Forgot Password",
    href: "/forgot-password"
}]

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    return (
        <>
            <header style={{ backgroundColor: "lightblue", padding: "1rem" }}>
                <h1>Auth Header</h1>
                {
                    navLinks.map(link => {
                        const isActive = pathname === link.href || (pathname.startsWith(link.href) && pathname !== "/")
                        return <Link href={link.href} className={isActive ? "mr-4 font-bold" : "mr-4 text-blue-500"}>{link.name}</Link>
                    })
                }
            </header>

            {children}
            <footer style={{ backgroundColor: "lightblue", padding: "1rem" }}>Auth Footer</footer>
        </>)
}