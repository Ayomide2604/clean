import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import { getPost, posts } from "@/data/posts";
import type { Metadata } from "next";
import Script from "next/script";

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | 780 Property Cleaners`,
    description: post.excerpt,
    keywords: "cleaning tips, cleaning guides, home maintenance, Edmonton cleaning",
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <PageBanner title="Cleaning Tips" />
      <article className="blog-details-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-content">
                  <div className="article-image">
                    <img src={`/assets/images/blog/${post.image}`} alt="Cleaning guide" />
                  </div>
                  <ul className="entry-meta">
                    <li><i className="ri-calendar-2-line"></i> Clean Guide</li>
                    <li><i className="ri-book-open-line"></i> Edmonton Cleaning Tips</li>
                  </ul>
                  <h3>{post.title}</h3>
                  <p>{post.intro}</p>
                  <div className="blog-desc-quote">
                    <p>Practical cleaning advice is always most useful when it fits the property, the people using it, and the time available.</p>
                  </div>
                  {post.body && post.body.map((section, index) => (
                    <div key={index}>
                      <h3>{section.heading}</h3>
                      <p>{section.content}</p>
                    </div>
                  ))}
                  <h3>Key things to keep in mind</h3>
                  <ul className="blog-desc-list">
                    {post.points.map((point) => (
                      <li key={point}><i className="ri-check-line"></i>{point}</li>
                    ))}
                  </ul>
                  <p>{post.conclusion}</p>
                  <p>Every property is different. If you are unsure which service is right for your home, rental, or workplace, share the details and we can help you choose a practical next step.</p>
                  <Link href="/contact" className="default-btn"><i className="ri-chat-1-line"></i> Request a quote</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <Script
        id={`article-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.excerpt,
            "author": {
              "@type": "Organization",
              "name": "780 Property Cleaners",
              "logo": "https://780propertycleaners.ca/logo.png"
            },
            "publisher": {
              "@type": "Organization",
              "name": "780 Property Cleaners",
              "logo": {
                "@type": "ImageObject",
                "url": "https://780propertycleaners.ca/logo.png"
              }
            }
          })
        }}
      />
    </>
  );
}
