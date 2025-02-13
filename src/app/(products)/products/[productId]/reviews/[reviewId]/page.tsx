import { notFound, redirect } from "next/navigation";

export const generateMetadata = async ({ params }: { params: Promise<{ productId: string, reviewId: string }> }) => {
    const { productId, reviewId } = (await params)
    return {
        title: `Review ${reviewId} for product ${productId}`,
    }
}

// const generateRandom = () => {
//     //returns either 0 or 1
//     return Math.floor(Math.random() * 2)
// }

export default async function ReviewDetails({ params }: { params: Promise<{ productId: string, reviewId: string }> }) {
    const { productId, reviewId } = await params;

    // if (generateRandom() === 1) {
    //     throw new Error("Error In Review Id")
    // }

    if (parseInt(productId) > 1000) {
        return notFound()
    }

    return <>
        <h1>Review {reviewId} of product {productId}</h1>
    </>
}