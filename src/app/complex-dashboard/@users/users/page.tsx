import Link from "next/link";

export default async function UsersList() {
    await new Promise(resolve => setTimeout(() => resolve("Intentional Delay"), 2000));

    return (
        <div className="p-4">
            <ul className="space-y-2">
                <li className="hover:bg-gray-100 rounded-md transition-colors">
                    <Link href="/complex-dashboard/users/1" className="block p-2 text-blue-600 hover:text-blue-800">
                        John Doe
                    </Link>
                </li>
                <li className="hover:bg-gray-100 rounded-md transition-colors">
                    <Link href="/complex-dashboard/users/2" className="block p-2 text-blue-600 hover:text-blue-800">
                        Jane Doe
                    </Link>
                </li>
                <li className="hover:bg-gray-100 rounded-md transition-colors">
                    <Link href="/complex-dashboard/users/3" className="block p-2 text-blue-600 hover:text-blue-800">
                        John Smith
                    </Link>
                </li>
                <li className="hover:bg-gray-100 rounded-md transition-colors">
                    <Link href="/complex-dashboard/users/4" className="block p-2 text-blue-600 hover:text-blue-800">
                        Jane Smith
                    </Link>
                </li>
            </ul>
        </div>
    )
}
