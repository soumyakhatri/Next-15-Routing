import { Metadata } from "next"

export const metadata: Metadata = {
    title: {absolute: "Blog Page"}
}

export default function BlogsLayout({ children }: {children: React.ReactNode}) {
    return (
        <>
            <h1>Blogs Layout</h1>
            {children}
        </>
    )
}