"use client"

import { useRouter } from "next/navigation"
import { startTransition } from "react"

export default function ErrorPage({ error, reset }: { error: Error, reset: () => void }) {
    return (
        <html>
            <body>
                <div>
                    <h1>{error.message}</h1>
                    <button onClick={() => window.location.reload()}>Refresh</button>
                </div>
            </body>
        </html>
    )
}