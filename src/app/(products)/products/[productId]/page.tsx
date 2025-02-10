import { Metadata } from "next"
import Link from "next/link"
import { redirect } from "next/navigation"

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

    if(parseInt(productId) > 1000){
        redirect("/products")
    }
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">
                Details about product {productId}
            </h1>
            <Link 
                href="/place-order"
                className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
                Place Order
            </Link>
        </div>
    );
}