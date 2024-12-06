import Image from "next/image";
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

interface NewsItemPageProps {
    params: Promise<{
        slug: string;
    }>
}

export default async function NewsItemPage(props: NewsItemPageProps) {
    const { slug } = await props.params;
    const newsItem = DUMMY_NEWS.find((news) => news.slug === slug);

    if (!newsItem) {
        notFound();
    }
    const { title, image, date, content } = newsItem;

    return (
        <article className="news-article">
            <header>
                <Image src={`/images/news/${image}`} alt={title} width={400} height={400} />
                <h1>{title}</h1>
                <time dateTime={date}>{date}</time>
            </header>
            <p>{content}</p>
        </article>
    );
}
