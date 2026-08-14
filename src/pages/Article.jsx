
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Layout from "../components/layout/Layout";
import RelatedArticles from "../components/article/RelatedArticles";
import { articles } from "../data/articles";
import { articleContent } from "../content";
import ArticleHeader from "../components/article/ArticleHeader";
import ArticleSidebar from "../components/article/ArticleSidebar";

function Article() {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <Layout>
        <div className="flex min-h-[70vh] items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-black text-slate-900">404</h1>
            <p className="mt-4 text-lg text-slate-500">Article Not Found</p>
            <Link to="/" className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
              Return Home
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const Content = articleContent[article.content];

  const [articleNewsletterSubmitted, setArticleNewsletterSubmitted] = useState(false);
  const [articleNewsletterError, setArticleNewsletterError] = useState(false);

  const handleArticleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements[0].value;
    if (!email || !email.includes("@")) {
      setArticleNewsletterError(true);
      setTimeout(() => setArticleNewsletterError(false), 3000);
      return;
    }
    setArticleNewsletterSubmitted(true);
    e.target.reset();
    setTimeout(() => setArticleNewsletterSubmitted(false), 4000);
  };

  return (
    <Layout>
      <ArticleHeader article={article} />

      {/* ================= MAIN CONTENT & SIDEBAR ================= */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            
            {/* Article Body */}
            <div className="lg:col-span-8">
              <article
                className="
                  prose prose-lg max-w-none 
                  prose-slate 
                  prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900
                  prose-p:leading-relaxed prose-p:text-slate-600
                  prose-h2:mt-12 prose-h2:text-3xl prose-h2:border-b prose-h2:border-slate-100 prose-h2:pb-4
                  prose-h3:text-2xl prose-h3:mt-8
                  prose-img:rounded-3xl prose-img:shadow-sm prose-img:ring-1 prose-img:ring-slate-100
                  prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50/50 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:text-slate-800 prose-blockquote:not-italic prose-blockquote:rounded-r-2xl
                  prose-a:text-blue-600 prose-a:font-semibold prose-a:underline-offset-4 hover:prose-a:text-blue-700
                  prose-li:text-slate-600
                "
              >
                <Content />
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <ArticleSidebar />
            </div>
            
          </div>
        </div>
      </section>

      {/* ================= LIGHT NEWSLETTER ================= */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-slate-50 px-8 py-16 text-center ring-1 ring-slate-100 md:px-16">
          <div className="mx-auto max-w-2xl">
            <p className="text-xs font-black uppercase tracking-widest text-blue-600">
              Join Our Community
            </p>
            <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
              Stay ahead of the curve.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-500">
              Join thousands of readers receiving the latest technology, AI, business, and lifestyle articles directly in their inbox every week.
            </p>
            <form onSubmit={handleArticleNewsletterSubmit} className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-14 flex-1 rounded-xl bg-white px-5 text-slate-900 placeholder-slate-400 outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 transition-shadow"
                required
              />
              <button className="h-14 rounded-xl bg-slate-900 px-8 font-bold text-white transition hover:bg-blue-600 whitespace-nowrap">
                Subscribe
              </button>

              {articleNewsletterSubmitted && (
                <p className="mt-3 text-green-600">Thanks — check your inbox!</p>
              )}

              {articleNewsletterError && (
                <p className="mt-3 text-red-600">Please enter a valid email.</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ================= RELATED ================= */}
      <section className="bg-white pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <RelatedArticles currentArticle={article} />
        </div>
      </section>

    </Layout>
  );
}

export default Article;
