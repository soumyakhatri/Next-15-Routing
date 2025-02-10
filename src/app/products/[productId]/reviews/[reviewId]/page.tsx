export const generateMetadata = async ({params}: {params: Promise<{productId: string, reviewId: string}>}) => {
    const {productId, reviewId} = (await params)
    return {
        title: `Review ${reviewId} for product ${productId}`,
    }
}

export default async function ReviewDetails({params}: {params: Promise<{productId: string, reviewId: string}>}){
    const {productId, reviewId} = await params;
    return <h1>Review {reviewId} of product {productId}</h1>
}