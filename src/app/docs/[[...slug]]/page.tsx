import { notFound } from "next/navigation";

export default async function Docs({ params }: { params: Promise<{ slug: string[] }> }) {
    const slug = (await params).slug;

    const conceptId = slug?.[0]
    const featureId = slug?.[1]
    const exampleId = slug?.[2]

    if (slug?.length === 1) {
        return <h1>Showing Docs for concept {conceptId}</h1>
    }
    if (slug?.length === 2) {
        return <h1>Showing Docs for feature {featureId} of concept {conceptId}</h1>
    }
    if (slug?.length === 3) {
        return <h1>Showing Docs for example {exampleId} of feature {featureId} of concept {conceptId}</h1>
    } if (slug?.length > 3) {
        return <h1>{notFound()}</h1>
    } else {
        // [[...slug]] : the extra square bracket is for optional catch all routes.
        return <h1>Showing Docs</h1>
    }
}