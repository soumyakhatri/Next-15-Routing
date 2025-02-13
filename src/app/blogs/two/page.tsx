export default async function BlogTwo(){
    await new Promise(resolve => setTimeout(() => {
        resolve("Intentional Delay")
    }, 2000))
    return <h1>Blog Two</h1>
}