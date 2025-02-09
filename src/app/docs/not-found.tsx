"use client"

import { usePathname } from "next/navigation"

export default async function(){
    const pathName = usePathname()
    console.log(pathName)
    return <h1>Docs not found</h1>
}