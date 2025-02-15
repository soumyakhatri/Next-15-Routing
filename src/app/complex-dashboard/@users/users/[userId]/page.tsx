import Link from "next/link";
import BackButton from "./back-button";

export default async function UserDetails({params}: {params: Promise<{userId: string}>}){
    const {userId} = await params
    await new Promise(resolve => setTimeout(() => resolve("Intentional Delay"), 2000));

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <div className="mb-6">
                <BackButton />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Details For User {userId}
            </h1>
        </div>
    )
}