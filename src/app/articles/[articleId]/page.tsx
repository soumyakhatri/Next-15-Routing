"use client"

import Link from "next/link";
import { use } from "react";

type Props = {
    params: Promise<{ articleId: string }>,
    searchParams: Promise<{ lang: string }>,
}

export default function Article({ params, searchParams }: Props) {
    const { articleId } = use(params)
    const { lang='en' } = use(searchParams)
    return <div>
        <h1>Server Component</h1>
        <h1>While page.tsx has access to both params and searchParams, layout.tsx has access to only params for both server and client components</h1>
        <h1>Reading {articleId} in {lang}</h1>
        <Link href={`/articles/article-15?lang=en`}>English</Link>
        <Link href={`/articles/article-15?lang=es`}>Spanish</Link>
        <Link href={`/articles/article-15?lang=fr`}>French</Link>
    </div>
}