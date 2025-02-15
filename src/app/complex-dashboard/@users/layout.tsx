export default function UsersLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">This is users layout</h1>
            {children}
        </div>
    )
}