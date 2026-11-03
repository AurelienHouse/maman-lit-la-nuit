import { BOOK_REVIEWS } from "@/data/books";
import { BookDetailClient } from "@/components/BookDetailClient";

export function generateStaticParams() {
  return BOOK_REVIEWS.map((book) => ({
    slug: book.slug,
  }));
}

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const fallbackBook = BOOK_REVIEWS.find((b) => b.slug === slug);

  return <BookDetailClient slug={slug} fallbackBook={fallbackBook} />;
}
