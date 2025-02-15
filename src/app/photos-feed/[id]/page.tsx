import Image from "next/image";
import { wonders } from "../wonders";
import { notFound } from "next/navigation";

export default async function IndividualPhoto({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const photo = wonders.find(p => p.id === parseInt(id))
    if (photo) {
        return (
            <div className="max-w-3xl mx-auto p-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <Image 
                        src={photo.src} 
                        alt={photo.name} 
                        width={150} 
                        height={150}
                        className="w-full h-auto object-cover"
                    />
                    <div className="p-6">
                        <h1 className="text-2xl font-bold mb-2">{photo.name}</h1>
                        <p className="text-gray-600 mb-2">
                            <span className="font-semibold">Location:</span> {photo.location}
                        </p>
                        <p className="text-gray-600">
                            <span className="font-semibold">Photo by:</span> {photo.shotBy}
                        </p>
                    </div>
                </div>
            </div>
        )
    } else {
        notFound()
    }
}