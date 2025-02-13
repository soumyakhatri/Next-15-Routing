import Link from "next/link";

export default function Blogs() {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
            <div className="flex flex-col space-y-4">
                <Link 
                    href="/blogs/one" 
                    className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                    Blog One
                </Link>
                <Link 
                    href="/blogs/two"
                    className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                    Blog Two
                </Link>
            </div>
        </div>
    );
}