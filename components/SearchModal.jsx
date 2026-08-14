import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, X, Clock } from "lucide-react";
import { articles } from "../data/articles";

function SearchModal({ open, onClose }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) {
      setQuery(""); // Clear search on close
      return;
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  const filteredArticles = useMemo(() => {
    if (!query.trim()) return articles.slice(0, 5); // Show fewer defaults for mobile

    return articles.filter((article) => {
      const search = query.toLowerCase();
      return (
        article.title.toLowerCase().includes(search) ||
        article.description.toLowerCase().includes(search) ||
        article.category.toLowerCase().includes(search)
      );
    });
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-4 sm:pt-16 px-4 bg-slate-900/60 backdrop-blur-md">
      
      {/* Background Overlay */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative w-full max-w-3xl overflow-hidden rounded-[24px] sm:rounded-[32px] bg-white shadow-2xl ring-1 ring-slate-900/5 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header / Input */}
        <div className="flex items-center gap-3 sm:gap-4 border-b border-slate-100 px-4 sm:px-6 py-4">
          <Search size={24} className="text-blue-600 shrink-0" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, topics, or keywords..."
            className="flex-1 bg-transparent text-base sm:text-lg font-medium text-slate-900 placeholder-slate-400 outline-none"
          />
          <button
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            aria-label="Close search"
          >
            <X size={20} />
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[70vh] sm:max-h-[60vh] overflow-y-auto overscroll-contain pb-4">
          
          {/* Status Bar */}
          <div className="bg-slate-50/50 px-6 py-3 text-xs font-black uppercase tracking-widest text-slate-400">
            {!query ? "Trending Right Now" : `${filteredArticles.length} Result${filteredArticles.length !== 1 ? "s" : ""} Found`}
          </div>

          {/* Empty State */}
          {filteredArticles.length === 0 ? (
            <div className="py-20 text-center px-6">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-50 text-slate-300">
                <Search size={32} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">No matches found</h3>
              <p className="mt-2 text-slate-500">
                We couldn't find anything for "{query}". Try adjusting your search.
              </p>
            </div>
          ) : (
            
            /* Results List */
            <div className="flex flex-col">
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  to={`/article/${article.slug}`}
                  onClick={onClose}
                  className="group flex flex-col sm:flex-row gap-4 border-b border-slate-50 p-4 sm:p-6 transition hover:bg-slate-50"
                >
                  {/* Image - Responsive Size */}
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-48 w-full sm:h-24 sm:w-32 shrink-0 rounded-2xl object-cover ring-1 ring-slate-900/5 transition-transform duration-300 group-hover:scale-[1.02] sm:group-hover:scale-100"
                  />
                  
                  {/* Text Details */}
                  <div className="flex flex-1 flex-col justify-center">
                    <span className="mb-2 w-fit rounded-md bg-blue-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-600">
                      {article.category}
                    </span>
                    <h3 className="text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-blue-600 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="mt-1 hidden sm:block text-sm text-slate-500 line-clamp-1">
                      {article.description}
                    </p>
                    <div className="mt-3 flex items-center gap-4 text-xs font-semibold text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} />
                        {article.readTime}
                      </span>
                      <span>
                        {new Date(article.publishedAt).toLocaleDateString("en-US", {
                          month: "short", day: "numeric", year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
