"use client"

import { useRouter } from "next/navigation"

export default function OrderProduct() {
    const router = useRouter()

    const placeOrder = () => {
        console.log("Placing Order...")
        router.replace("/order-placed")
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Place Your Order</h1>
                <button 
                    onClick={placeOrder}
                    className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Place Order
                </button>
            </div>
        </div>
    )
}