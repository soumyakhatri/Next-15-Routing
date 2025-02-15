export default function ComplexDashboardLayout({
    children,
    users,
    revenue,
    analytics
}: {
    children: React.ReactNode,
    users: React.ReactNode,
    revenue: React.ReactNode,
    analytics: React.ReactNode
}) {
    return (
        <div className="p-4">
            <div className="mb-6">
                {children}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg border border-gray-200 shadow-sm">
                    {users}
                </div>
                <div className="p-4 rounded-lg border border-gray-200 shadow-sm">
                    {revenue}
                </div>
                <div className="p-4 rounded-lg border border-gray-200 shadow-sm">
                    {analytics}
                </div>
            </div>
        </div>
    )
}