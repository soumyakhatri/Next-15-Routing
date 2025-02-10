import Link from "next/link";

type Props = {
    params: Promise<{ articleId: string }>,
    searchParams: Promise<{ lang: string }>,
}

export default async function ArticleClient({ params, searchParams }: Props) {
    const { articleId } = await params
    const { lang='en' } = await searchParams
    return <div>
        <h1>Client Component</h1>
        <h1>While page.tsx has access to both params and searchParams, layout.tsx has access to only params for both server and client components</h1>
        <h1>Reading {articleId} in {lang}</h1>
        <Link href={`/articles/article-15?lang=en`}>English</Link>
        <Link href={`/articles/article-15?lang=es`}>Spanish</Link>
        <Link href={`/articles/article-15?lang=fr`}>French</Link>
    </div>
}