export default async function BlogOne(){
    await new Promise(resolve => setTimeout(() => resolve("Intentional Delay"), 2000))
    return <h1>Blog One</h1>
}