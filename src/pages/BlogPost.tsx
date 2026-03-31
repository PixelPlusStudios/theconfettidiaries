import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogData";

const BlogPost = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = blogPosts.find((p) => p.id === postId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-ivory pt-24 pb-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-display text-3xl font-semibold text-foreground">Story Not Found</h1>
            <Link to="/blog" className="text-sans mt-6 inline-block text-sm tracking-widest text-primary uppercase hover:text-primary/80">
              ← Back to Stories
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ivory">
        {/* Hero Image */}
        <motion.div
          className="relative h-[60vh] w-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <p className="text-sans text-xs font-medium tracking-[0.3em] text-primary-foreground/80 uppercase">
              {post.category} • {post.date}
            </p>
            <h1 className="text-display mt-4 max-w-3xl text-3xl font-semibold text-primary-foreground sm:text-4xl lg:text-5xl leading-tight">
              {post.title}
            </h1>
          </div>
        </motion.div>

        {/* Content */}
        <div className="container mx-auto max-w-3xl px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/blog"
              className="text-sans inline-flex items-center gap-2 text-xs font-medium tracking-widest text-primary uppercase hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Stories
            </Link>
          </motion.div>

          <div className="mt-10 space-y-6">
            {post.content.map((paragraph, i) => (
              <motion.p
                key={i}
                className="text-body text-lg leading-relaxed text-secondary-foreground sm:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="mx-auto h-px w-24 gradient-gold" />
            <p className="text-body mt-8 text-lg text-muted-foreground italic">
              Want us to be part of your story?
            </p>
            <Link
              to="/#contact"
              className="gradient-gold text-sans mt-4 inline-block rounded-full px-8 py-3 text-sm font-medium tracking-widest text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              GET IN TOUCH
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
