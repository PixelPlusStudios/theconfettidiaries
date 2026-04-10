import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fetchBlogPosts } from "@/lib/sanityQueries";
import { urlFor } from "@/lib/sanity";
import { blogPosts as fallbackPosts } from "@/data/blogData";

const Blog = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const { data: sanityPosts } = useQuery({
    queryKey: ["blogPosts"],
    queryFn: fetchBlogPosts,
  });

  // Use Sanity data if available, otherwise fallback to static data
  const posts = sanityPosts && sanityPosts.length > 0
    ? sanityPosts.map((p: any) => ({
        id: p.slug?.current || p._id,
        title: p.title,
        excerpt: p.excerpt,
        image: p.image ? urlFor(p.image).width(800).height(600).url() : "",
        date: p.date,
        category: p.category,
      }))
    : fallbackPosts.map((p) => ({
        id: p.id,
        title: p.title,
        excerpt: p.excerpt,
        image: p.image,
        date: p.date,
        category: p.category,
      }));

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ivory pt-24 pb-16 pt-16">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div className="text-center" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-sans text-xs font-medium tracking-[0.3em] text-primary uppercase">Stories</p>
            <h1 className="text-display mt-4 text-4xl font-semibold text-foreground sm:text-5xl">Client Stories</h1>
            <div className="mx-auto mt-6 h-px w-24 gradient-gold" />
            <p className="text-body mt-6 text-lg text-muted-foreground">Every wedding we design carries a unique love story. Here are some of our favourites.</p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: any, i: number) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <motion.article
                  className="group cursor-pointer overflow-hidden rounded-xl bg-background shadow-sm transition-shadow hover:shadow-md"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="text-sans tracking-wider uppercase text-primary font-medium">{post.category}</span>
                      <span>•</span>
                      <span className="text-sans tracking-wider">{post.date}</span>
                    </div>
                    <h3 className="text-display mt-3 text-lg font-semibold text-foreground leading-snug">{post.title}</h3>
                    <p className="text-body mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">{post.excerpt}</p>
                    <span className="text-sans mt-4 inline-block text-xs font-medium tracking-widest text-primary uppercase transition-colors group-hover:text-primary/80">Read More →</span>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
