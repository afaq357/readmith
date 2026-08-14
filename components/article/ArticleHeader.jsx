import { Link } from "react-router-dom";
import { Calendar, Clock, ChevronRight } from "lucide-react";

function ArticleHeader({ article }) {
  return (
    <section className="bg-white pt-16 pb-8">
      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* Breadcrumb */}
        <nav className="mb-8 flex flex-wrap items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
          <Link to="/" className="transition hover:text-blue-600">Home</Link>
          <ChevronRight size={14} />
          <span className="text-blue-600">{article.category}</span>
          <ChevronRight size={14} />
          <span className="truncate max-w-[200px]">{article.title}</span>
        </nav>

        {/* Title */}
        <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
          {article.title}
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500 md:text-xl">
          {article.description}
        </p>

        {/* Author Row */}
        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-8 border-t border-slate-100 pt-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-lg font-bold text-slate-700 ring-1 ring-slate-200">
              {article.author?.charAt(0) || "A"}
            </div>
            <div className="text-left">
              <h3 className="text-sm font-bold text-slate-900">{article.author}</h3>
              <p className="text-xs font-semibold text-slate-400">Editorial Team</p>
            </div>
          </div>

          <div className="h-8 w-px bg-slate-100 hidden sm:block"></div>

          <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-slate-400">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>
                {new Date(article.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="mx-auto mt-12 max-w-7xl px-6">
        <div className="overflow-hidden rounded-[32px] shadow-lg ring-1 ring-slate-100">
          <img
            src={article.image}
            alt={article.title}
            className="h-[400px] w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[550px] lg:h-[700px]"
          />
        </div>
      </div>
    </section>
  );
}

export default ArticleHeader;
