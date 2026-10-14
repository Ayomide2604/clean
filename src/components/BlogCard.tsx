"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface BlogCardProps {
  image: string;
  title: string;
  text: string;
  slug: string;
  index: number;
}

export default function BlogCard({ image, title, text, slug, index }: BlogCardProps) {
  return (
    <motion.div
      className="col-lg-4 col-md-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      <motion.div
        className="single-blog-card"
        whileHover={{ y: -10, transition: { duration: 0.3 } }}
      >
        <div className="blog-image">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link href={`/blog/${slug}`}>
              <img src={`/assets/images/blog/${image}`} alt="Cleaning guide" />
            </Link>
          </motion.div>
        </div>
        <div className="blog-content">
          <span>Clean Guide</span>
          <h3>
            <Link href={`/blog/${slug}`}>{title}</Link>
          </h3>
          <p>{text}</p>
          <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
            <Link href={`/blog/${slug}`} className="blog-btn">
              Read More <i className="ri-arrow-right-line"></i>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
