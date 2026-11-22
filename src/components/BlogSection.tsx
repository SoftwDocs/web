import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { BLOG_POSTS, type BlogPost } from '../data/softwdocsData';

interface BlogSectionProps {
  onSelectPost: (post: BlogPost) => void;
}

export function BlogSection({ onSelectPost }: BlogSectionProps) {
  return (
    <section id="blog" className="py-16 md:py-40 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-32 gap-10">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-red-600" />
              <span className="text-red-600 text-[10px] font-bold uppercase tracking-[0.4em]">
                Insights
              </span>
            </div>
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-serif font-bold text-white leading-[0.9] tracking-tighter uppercase mb-6">
              EDITORIAL <br />
              <span className="text-red-600 italic font-normal">JOURNAL</span>.
            </h2>
          </div>

          <button
            type="button"
            onClick={() => onSelectPost(BLOG_POSTS[0])}
            className="group relative overflow-hidden transition-all duration-500 font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-3 active:scale-95 px-8 py-3.5 text-[10px] rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm bg-transparent border border-white/10 text-white hover:border-red-600 w-fit"
          >
            <span className="relative z-10 flex items-center gap-3">
              View All Insights
              <ArrowRight
                size={16}
                className="group-hover:translate-x-2 transition-transform duration-500 ease-out"
              />
            </span>
            <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] bg-red-600" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {BLOG_POSTS.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 * idx }}
              className="group cursor-pointer"
            >
              <button
                type="button"
                onClick={() => onSelectPost(post)}
                className="block text-left w-full"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-[32px] md:rounded-[50px] mb-8 relative border border-white/5 bg-zinc-900 transition-all duration-700 group-hover:border-red-600/30 group-hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
                  <img
                    src={post.image}
                    alt={post.alt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-all duration-1000 scale-100 group-hover:scale-105 brightness-[0.85] group-hover:brightness-105"
                  />
                  <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                    <span className="px-5 py-2 bg-black/60 backdrop-blur-md rounded-full text-[8px] font-bold uppercase tracking-[0.3em] text-white border border-white/10 shadow-xl">
                      {post.tag}
                    </span>
                  </div>
                </div>

                <div className="px-4">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-6 h-[1px] bg-red-600" />
                    <div className="text-white/30 text-[9px] font-bold uppercase tracking-[0.5em]">
                      {post.date}
                    </div>
                  </div>

                  <h3 className="text-xl md:text-3xl font-serif font-bold text-white mb-6 leading-[1.2] group-hover:text-red-600 transition-colors duration-500 tracking-tight line-clamp-3">
                    {post.title}
                  </h3>

                  <p className="text-white/40 font-light leading-relaxed italic text-base md:text-lg opacity-80 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                    &ldquo;{post.excerpt}&rdquo;
                  </p>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
