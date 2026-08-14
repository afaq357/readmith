import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Clock, ChevronRight } from "lucide-react";
import Layout from "../components/layout/Layout";
import { articles } from "../data/articles";
import { categories } from "../data/categories";

function Category() {
  const { slug } = useParams();
  
  // Find the current category object
  const category = categories.find((c) => c.slug === slug);
  
  // Filter articles that belong to this category
  const categoryArticles = articles.filter(
    (article) => article.category === slug
  );

  if (!category) {
    return (
      <Layout>
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
          <h1 className="text-6xl font-black text-slate-900">404</h1>
          <p className="mt-4 text-xl text-slate-600">Category not found.</p>
          <Link to="/" className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700">
            Return Home
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* ================= HEADER SECTION ================= */}
      <section className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6">
          <nav className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <ChevronRight size={14} />
            <span className="text-blue-600">Archive</span>
          </nav>
          
          <h1 className="text-5xl font-black text-slate-900 md:text-6xl">
            {category.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Browse our collection of {categoryArticles.length} insights, guides, and stories focused on {category.name.toLowerCase()}.
          </p>
        </div>
      </section>

      {/* ================= ARTICLES GRID ================= */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          {categoryArticles.length > 0 ? (
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {categoryArticles.map((article) => (
                <Link
                  key={article.id}
                  to={`/article/${article.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <span className="mb-3 text-xs font-bold uppercase tracking-wider text-blue-600">
                      {article.category}
                    </span>
                    <h2 className="mb-3 text-xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-blue-600">
                      {article.title}
                    </h2>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-500 line-clamp-3">
                      {article.description}
                    </p>
                    
                    <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-medium text-slate-400">
                      <span>{article.publishedAt}</span>
                      <span className="flex items-center gap-1">
                        <Clock size={13} /> {article.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl bg-slate-50 py-20 text-center">
              <h3 className="text-2xl font-bold text-slate-900">No articles found</h3>
              <p className="mt-2 text-slate-500">Check back later for new content in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* ================= BOTTOM NEWSLETTER ================= */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-slate-900 px-8 py-16 text-center text-white shadow-2xl">
          <h2 className="text-3xl font-black md:text-4xl">Stay updated on {category.name}</h2>
          <p className="mt-4 text-slate-400">Get the latest articles delivered straight to your inbox.</p>
          <form onSubmit={(e) => {
            e.preventDefault();
            const email = e.target.elements[0].value;
            if (!email || !email.includes('@')) return;
            e.target.reset();
            // show a quick browser alert as lightweight feedback
            alert('Thanks — check your inbox!');
          }} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className="h-14 flex-1 rounded-xl bg-white/10 px-5 text-white outline-none ring-1 ring-white/20 focus:ring-blue-500"
              required
            />
            <button className="h-14 rounded-xl bg-blue-600 px-8 font-bold transition hover:bg-blue-500">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}

export default Category;
