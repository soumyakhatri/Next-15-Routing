import { Metadata } from "next"

type Props = { 
    params: Promise<{ productId: string }> 
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const { productId } = await params
    const product = await new Promise(resolve => {
        setTimeout(() => {
            resolve("iPhone")
        }, 1000);
    })
    return {
        title: `Details about ${product} ${productId}`,
        description: "Products Details"
    }
}


export default async function ProductDetails({ params }: { params: Promise<{ productId: string }> }) {
    const { productId } = await params;
    return <h1>Details about product {productId}</h1>
}