import PageBanner from "@/components/PageBanner";
import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Cleaning Tips & Guides | 780 Property Cleaners Blog",
  description: "Expert cleaning tips, maintenance guides, and advice from professional cleaners. Learn how to maintain your space between professional cleanings.",
  keywords: "cleaning tips, cleaning guides, home maintenance, cleaning advice",
};

const posts = [["blog-1.jpg", "How to prepare your home for a deep clean", "A few small steps can help a detailed cleaning visit focus on the areas that matter most.", "prepare-for-a-deep-clean"], ["blog-2.jpg", "What to expect from move-out cleaning", "A practical checklist for tenants, landlords, and homeowners planning a transition.", "move-out-cleaning-expectations"], ["blog-3.jpg", "Keeping a short-term rental guest-ready", "Simple routines that support a fresh, consistent experience between bookings.", "guest-ready-short-term-rental"], ["blog-4.jpg", "A better routine for busy households", "How recurring cleaning can make everyday upkeep easier to manage.", "cleaning-routine-for-busy-households"], ["blog-5.jpg", "Questions to ask before requesting a quote", "The key details that help a cleaner understand your property and recommend the right scope.", "questions-before-requesting-a-quote"], ["blog-6.jpg", "Commercial cleaning: planning for consistency", "Why access, frequency, timing, and scope all matter for a sustainable service plan.", "commercial-cleaning-consistency"]];

export default function BlogPage() {
  return (
    <>
      <PageBanner title="Cleaning Tips" />
      <section className="blog-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>Helpful Guides</span>
            <h2>Practical notes for a cleaner space</h2>
            <p>Ideas for maintaining homes, rentals, and workplaces between professional visits.</p>
          </div>
          <div className="row justify-content-center">
            {posts.map(([image, title, text, slug], index) => (
              <BlogCard
                key={title}
                image={image}
                title={title}
                text={text}
                slug={slug}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
