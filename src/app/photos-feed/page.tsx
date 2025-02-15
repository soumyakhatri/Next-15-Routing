import Image from "next/image";
import { wonders } from "./wonders";
import Link from "next/link";

export default function PhotosFeed() {
    return (
        <div className="max-w-6xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Seven Wonders Of the World</h1>
            <div className="flex flex-wrap gap-8 justify-center">
                {wonders.map(({ src, name, shotBy, location, id }) => {
                    return (

                        <li key={name} className="list-none bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <Link href={`/photos-feed/${id}`} key={name}>
                                <Image
                                    src={src}
                                    alt={name}
                                    width={300}
                                    height={300}
                                    className="object-cover w-[300px] h-[200px]"
                                />
                            </Link>
                            <div className="p-4">
                                <p className="font-semibold text-lg mb-2">{name}</p>
                                <p className="text-gray-600 text-sm">Photo By: {shotBy}</p>
                                <p className="text-gray-600 text-sm">{location}</p>
                            </div>
                        </li>

                    );
                })}
            </div>
        </div >
    );
}