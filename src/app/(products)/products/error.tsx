"use client"

import { useRouter } from "next/navigation"
import { startTransition } from "react"

export default function ErrorPage({ error, reset }: { error: Error, reset: () => void }) {
    const router = useRouter()
    const retry = () => {
        startTransition(() => {
            router.refresh()
            reset()
        })
    }
    return (
        <>  <h1>Error Page In Root Of Products</h1>
            <h1>{error.message}</h1>
            <button onClick={retry}>Retry</button>
        </>
    )
}