export default function AuthLayout({children}: {children: React.ReactNode}) {
    return (
        <>
            <header style={{backgroundColor: "lightblue", padding: "1rem"}}>Auth Header</header>
                {children}
            <footer style={{backgroundColor: "lightblue", padding: "1rem"}}>Auth Footer</footer>
        </>)
}