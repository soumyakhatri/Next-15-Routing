// const generateRandom = () => {
//     //returns either 0 or 1
//     return Math.floor(Math.random() * 2)
// }


export default function ProductIdLayout({ children }: { children: React.ReactNode }) {
    // if (generateRandom() === 1) {
    //     throw new Error("Error In Product Id Layout")
    // }
    return (
        <>
            <h1>ProductIdLayout</h1>
            {children}
        </>
    )
}