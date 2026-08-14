import { Link } from "react-router-dom";
import { articles } from "../../data/articles";
import { Clock } from "lucide-react";

function RelatedArticles({ currentArticle }) {
  const sameCategory = articles.filter(
    (article) =>
      article.id !== currentArticle.id &&
      article.category === currentArticle.category
  );

  const others = articles.filter(
    (article) =>
      article.id !== currentArticle.id &&
      article.category !== currentArticle.category
  );

  const related = [...sameCategory, ...others].slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="mt-16 border-t border-slate-100 pt-16">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-blue-600">
            Keep Reading
          </p>
          <h2 className="mt-2 text-3xl font-black text-slate-900">
            Related Articles
          </h2>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {related.map((article) => (
          <Link
            key={article.id}
            to={`/article/${article.slug}`}
            className="group flex flex-col overflow-hidden rounded-[24px] bg-white shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src={article.image}
                alt={article.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 rounded-lg bg-white/95 backdrop-blur-sm px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-sm">
                {article.category}
              </div>
            </div>

            <div className="flex flex-1 flex-col p-8">
              <h3 className="text-xl font-bold leading-tight text-slate-900 transition group-hover:text-blue-600">
                {article.title}
              </h3>
              <p className="mt-3 flex-1 line-clamp-2 text-sm text-slate-500 leading-relaxed">
                {article.description}
              </p>
              
              <div className="mt-6 flex items-center justify-between border-t border-slate-50 pt-6 text-xs font-semibold text-slate-400">
                <span>
                  {new Date(article.publishedAt).toLocaleDateString("en-US", {
                    month: "short", day: "numeric", year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1.5 group-hover:text-blue-600 transition-colors">
                  <Clock size={14} /> {article.readTime}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default RelatedArticles;