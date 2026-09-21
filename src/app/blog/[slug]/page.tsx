import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import { getPost, posts } from "@/data/posts";

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return <><PageBanner title="Cleaning Tips" /><article className="blog-details-area ptb-100"><div className="container"><div className="row justify-content-center"><div className="col-lg-8 col-md-12"><div className="blog-details-desc"><div className="article-content"><div className="article-image"><img src={`/assets/images/blog/${post.image}`} alt="Cleaning guide" /></div><ul className="entry-meta"><li><i className="ri-calendar-2-line"></i> Clean Guide</li><li><i className="ri-book-open-line"></i> Edmonton Cleaning Tips</li></ul><h3>{post.title}</h3><p>{post.intro}</p><div className="blog-desc-quote"><p>Practical cleaning advice is always most useful when it fits the property, the people using it, and the time available.</p></div><h3>Key things to keep in mind</h3><ul className="blog-desc-list">{post.points.map((point) => <li key={point}><i className="ri-check-line"></i>{point}</li>)}</ul><p>Every property is different. If you are unsure which service is right for your home, rental, or workplace, share the details and we can help you choose a practical next step.</p><Link href="/contact" className="default-btn"><i className="ri-chat-1-line"></i> Request a quote</Link></div></div></div></div></div></article></>;
}
