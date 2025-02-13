import { Metadata } from "next"

export const metadata: Metadata = {
    title: {absolute: "Blog Page"}
}

export default async function BlogsLayout({ children }: {children: React.ReactNode}) {
    await new Promise(resolve => setTimeout(() => {
        resolve("Intentional Delay")
    }, 2000))
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Blogs Layout</h1>
            <main className="prose prose-lg">
                {children}
            </main>
        </div>
    )
}