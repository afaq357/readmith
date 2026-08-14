import { Link } from "react-router-dom";
import { useState } from "react";
import Layout from "../components/layout/Layout";
import { articles } from "../data/articles";
import { categories } from "../data/categories";

const featuredArticles = articles.filter(
  (article) => article.featured
);

const spotlightArticles = [...articles]
  .filter((article) => ["news", "celebrities"].includes(article.category))
  .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
  .slice(0, 4);

const heroArticle = spotlightArticles[0] || featuredArticles[0];
const sidebarArticles = spotlightArticles.slice(1, 4);

const latestArticles = [...articles]
  .sort((a, b) => {
    const priorityA = ["news", "celebrities"].includes(a.category) ? 1 : 0;
    const priorityB = ["news", "celebrities"].includes(b.category) ? 1 : 0;

    return priorityB - priorityA || new Date(b.publishedAt) - new Date(a.publishedAt);
  })
  .slice(0, 6);

const editorPick =
  spotlightArticles.find((article) => article.id !== heroArticle.id) ||
  featuredArticles.find((article) => article.id !== heroArticle.id) ||
  latestArticles[0];

function Home() {
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [newsletterError, setNewsletterError] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements[0].value;
    if (!email || !email.includes("@")) {
      setNewsletterError(true);
      setTimeout(() => setNewsletterError(false), 3000);
      return;
    }
    setNewsletterSubmitted(true);
    e.target.reset();
    setTimeout(() => setNewsletterSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Layout>
        
        {/* ================= HERO SECTION ================= */}
        <section className="mx-auto max-w-7xl px-6 pt-10 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Main Hero */}
            <Link
              to={`/article/${heroArticle.slug}`}
              className="group lg:col-span-8 relative rounded-[32px] overflow-hidden shadow-lg ring-1 ring-slate-900/5"
            >
              <img
                src={heroArticle.image}
                alt={heroArticle.title}
                className="h-[450px] md:h-[550px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                <span className="inline-block px-4 py-1.5 bg-blue-600 text-white text-xs font-black uppercase tracking-widest rounded-lg mb-4 shadow-sm">
                  {heroArticle.category}
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
                  {heroArticle.title}
                </h2>
                <div className="flex items-center gap-4 text-sm font-medium text-slate-300">
                  <span>{heroArticle.author}</span>
                  <span className="h-1 w-1 rounded-full bg-slate-500"></span>
                  <span>{heroArticle.readTime}</span>
                </div>
              </div>
            </Link>

            {/* Sidebar Hero */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-6">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-4">
                Trending Now
              </h3>
              <div className="flex flex-col gap-6 flex-1 justify-center">
                {sidebarArticles.map((article) => (
                  <Link
                    key={article.id}
                    to={`/article/${article.slug}`}
                    className="group flex items-start gap-5"
                  >
                    <div className="overflow-hidden rounded-2xl ring-1 ring-slate-900/5 shrink-0">
                      <img
                        src={article.image}
                        className="w-24 h-24 object-cover transition-transform duration-500 group-hover:scale-110"
                        alt={article.title}
                      />
                    </div>
                    <div className="flex flex-col justify-center py-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-1">
                        {article.category}
                      </span>
                      <h4 className="font-bold text-slate-900 group-hover:text-blue-600 leading-snug line-clamp-2 transition-colors">
                        {article.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= NEWS & CELEBRITY SPOTLIGHT ================= */}
        <section className="py-20 bg-slate-50 border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-blue-600">Fresh Picks</p>
                <h2 className="mt-2 text-4xl font-black text-slate-900">News & Celebrity Highlights</h2>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {spotlightArticles.map((article) => (
                <Link
                  key={article.id}
                  to={`/article/${article.slug}`}
                  className="group flex flex-col bg-white rounded-[24px] overflow-hidden shadow-sm ring-1 ring-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={article.image}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      alt={article.title}
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <span className="text-xs font-black text-blue-600 uppercase tracking-widest mb-3">
                      {article.category}
                    </span>
                    <h3 className="text-xl font-bold leading-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="mt-4 flex-1 text-slate-500 text-sm leading-relaxed line-clamp-3">
                      {article.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ================= LATEST ARTICLES ================= */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-blue-600">Fresh Content</p>
                <h2 className="mt-2 text-4xl font-black text-slate-900">Latest Updates</h2>
              </div>
              <Link to="/latest" className="hidden sm:inline-block text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">
                View all stories →
              </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {latestArticles.map((article) => (
                <Link 
                  key={article.id} 
                  to={`/article/${article.slug}`}
                  className="group flex flex-col bg-white rounded-[24px] overflow-hidden shadow-sm ring-1 ring-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={article.image} 
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      alt={article.title} 
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-8">
                    <span className="text-xs font-black text-blue-600 uppercase tracking-widest mb-3">
                      {article.category}
                    </span>
                    <h3 className="text-2xl font-bold leading-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="mt-4 flex-1 text-slate-500 text-sm line-clamp-2 leading-relaxed">
                      {article.description}
                    </p>
                    <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-between text-xs font-semibold text-slate-400">
                      <span>{article.readTime}</span>
                      <span className="text-blue-600 group-hover:translate-x-1 transition-transform">Read →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ================= LIGHT CATEGORIES GRID ================= */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-900">Explore Topics</h2>
              <p className="mt-4 text-slate-500">Dive into our expertly curated categories.</p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((cat, index) => {
                const count = articles.filter(a => a.category === cat.slug).length;
                return (
                  <Link
                    key={cat.slug}
                    to={`/category/${cat.slug}`}
                    className="group relative flex flex-col items-center justify-center p-10 rounded-[32px] bg-slate-50 ring-1 ring-slate-100 hover:bg-white hover:shadow-xl hover:ring-blue-100 transition-all duration-300"
                  >
                    <span className="absolute top-6 right-6 text-4xl font-black text-slate-200 group-hover:text-blue-50 transition-colors">
                      0{index + 1}
                    </span>
                    <span className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors relative z-10 mt-4">
                      {cat.name}
                    </span>
                    <span className="mt-2 text-xs font-semibold text-slate-500 tracking-widest uppercase relative z-10">
                      {count} Articles
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= EDITOR'S PICK ================= */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-widest text-blue-400 mb-4">
                  Editor's Choice
                </p>
                <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
                  {editorPick.title}
                </h2>
                <p className="text-lg text-slate-400 leading-relaxed mb-10">
                  {editorPick.description}
                </p>
                <Link 
                  to={`/article/${editorPick.slug}`}
                  className="inline-flex items-center justify-center h-14 px-8 rounded-xl bg-blue-600 font-bold hover:bg-blue-500 transition-colors"
                >
                  Read Featured Story
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 blur-[100px] opacity-20 rounded-full"></div>
                <img 
                  src={editorPick.image} 
                  alt={editorPick.title} 
                  className="relative rounded-[32px] object-cover aspect-square shadow-2xl ring-1 ring-white/10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= NEWSLETTER ================= */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-600 mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-4">Get the weekly dispatch.</h2>
            <p className="text-lg text-slate-500 mb-10">Join 5,000+ readers getting our best content delivered straight to their inbox every Sunday.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 h-14 bg-slate-50 px-6 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow" 
                required
              />
              <button 
                type="submit"
                className="h-14 bg-slate-900 text-white px-8 rounded-xl font-bold hover:bg-blue-600 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>

              {newsletterSubmitted && (
                <p className="mt-3 text-green-600">Thanks — check your inbox!</p>
              )}

              {newsletterError && (
                <p className="mt-3 text-red-600">Please enter a valid email.</p>
              )}
            </form>
          </div>
        </section>

      </Layout>
    </div>
  );
}

export default Home;