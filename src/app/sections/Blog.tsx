import React from "react";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

const Blog = () => {
  const previewPosts = blogPosts.slice(0, 2);

  return (
    <section className="section-pad" id="blog">
      <div className="wrap">
        <div className="reveal mb-[56px] flex flex-wrap items-end justify-between gap-[20px]">
          <div>
            <div
              className="eyebrow"
              data-circuit-node="blog"
              style={{ marginBottom: "14px" }}
            >
              <span className="relative flex flex-row items-center gap-[6px]">
                <span className="absolute -left-3 top-0 hidden md:block">
                  &lt;
                </span>
                <span className="material-symbols-outlined block text-[14px]">
                  {"article"}
                </span>
                <span className="hidden md:inline">{"Blog"}</span>
                <span className="absolute -right-6 top-0 hidden md:block">
                  /&gt;
                </span>
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.01em] text-ink-0">
              Notes &amp;
              <br />
              write-ups.
            </h2>
          </div>
          <span className="font-mono text-[12px] text-ink-2">
            <Link href="/blog" className="text-ink-2 hover:text-accent">
              SEE ALL ARTICLES →
            </Link>
          </span>
        </div>

        <div className="mt-[50px] space-y-[42px]">
          {previewPosts.map((post) => (
            <article
              key={post.slug}
              className="reveal border-t border-line pt-[32px]"
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="grid grid-cols-1 gap-[24px] md:grid-cols-[1fr_1.2fr] md:gap-[56px]">
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-accent">
                      {post.tag}
                    </span>
                    <h3 className="mt-[10px] font-display text-[clamp(1.3rem,2.2vw,1.6rem)] font-semibold leading-[1.15] text-ink-0 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-[12px] text-[14px] leading-[1.7] text-ink-1 line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-[16px] self-end">
                    <span className="font-mono text-[12.5px] text-ink-2">
                      {post.datePublished} · {post.readingTime}
                    </span>
                    <span className="text-accent">→</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="reveal mt-[40px]">
          <Link
            href="/blog"
            className="inline-flex items-center gap-[8px] rounded-[2px] border border-accent bg-accent px-[24px] py-[14px] font-mono text-[13px] font-medium text-accent-ink transition-colors hover:bg-[#f0b25d]"
          >
            See more articles
            <span className="inline-block transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
