"use client"

import { usePathname } from "next/navigation"

export default function LoadingUsersDetails(){
    const path = usePathname()
    return <h1>Loading Details For User {path.split('/').pop()}....</h1>
}