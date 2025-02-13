import Link from "next/link"

export const metadata = {
    description: "Products Home Page"
}

// const generateRandom = () => {
//     //returns either 0 or 1
//     return Math.floor(Math.random() * 2)
// }

export default function ProductsPage() {
    // if (generateRandom() === 1) {
    //     throw new Error("Error In Products Page")
    // }
    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-8">Products List</h1>
            <div className="flex flex-col space-y-4">
                <Link href="/products/1" className="p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                    Product One
                </Link>
                <Link href="/products/2" className="p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                    Product Two
                </Link>
                <Link href="/products/3" replace className="p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                    Product Three
                </Link>
                <Link href="/products/1001" replace className="p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                    Product One Thousand One
                </Link>
            </div>
        </div>
    )
}