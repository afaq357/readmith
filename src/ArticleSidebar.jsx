import { Link as LinkIcon } from "lucide-react";
import { useState } from "react";
import { categories } from "../../data/categories";

// Recreating the removed Lucide brand icons as standard SVGs
const Facebook = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Twitter = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

function ArticleSidebar() {
  const headings = [
    "Introduction",
    "AI Is Becoming Mainstream",
    "Automation Across Industries",
    "Challenges Businesses Face",
    "Future Opportunities",
    "Conclusion",
  ];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("Article link copied!");
    } catch (err) {
      console.error(err);
    }
  };

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const encodedUrl = encodeURIComponent(currentUrl);
  const pageTitle = typeof document !== "undefined" ? document.title : "";
  const facebookHref = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const twitterHref = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodeURIComponent(pageTitle)}`;
  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  const [sidebarSubmitted, setSidebarSubmitted] = useState(false);
  const [sidebarError, setSidebarError] = useState(false);

  const handleSidebarSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements[0].value;
    if (!email || !email.includes("@")) {
      setSidebarError(true);
      setTimeout(() => setSidebarError(false), 3000);
      return;
    }
    setSidebarSubmitted(true);
    e.target.reset();
    setTimeout(() => setSidebarSubmitted(false), 4000);
  };

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28 space-y-8">
        
        {/* ================= TABLE OF CONTENTS ================= */}
        <div className="rounded-[24px] border border-slate-100 bg-white p-8 shadow-sm">
          <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">
            On this page
          </h3>
          <ul className="mt-5 space-y-4 border-l-2 border-slate-50 pl-4">
            {headings.map((heading) => (
              <li key={heading}>
                <a
                  href={`#${heading.toLowerCase().replaceAll(" ", "-")}`}
                  className="block text-sm font-medium text-slate-500 transition-all hover:-translate-y-0.5 hover:text-blue-600"
                >
                  {heading}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= SHARE ================= */}
        <div className="rounded-[24px] border border-slate-100 bg-white p-8 shadow-sm">
          <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">
            Share Article
          </h3>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={facebookHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-600 transition hover:bg-[#1877F2] hover:text-white"
            >
              <Facebook size={18} />
            </a>

            <a
              href={twitterHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Twitter"
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-600 transition hover:bg-[#1DA1F2] hover:text-white"
            >
              <Twitter size={18} />
            </a>

            <a
              href={linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-600 transition hover:bg-[#0A66C2] hover:text-white"
            >
              <Linkedin size={18} />
            </a>

            <button
              onClick={copyLink}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-600 transition hover:bg-slate-900 hover:text-white"
              aria-label="Copy link"
            >
              <LinkIcon size={18} />
            </button>
          </div>
        </div>

        {/* ================= CATEGORIES ================= */}
        <div className="rounded-[24px] border border-slate-100 bg-white p-8 shadow-sm">
          <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">
            Topics
          </h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.slug}
                className="rounded-lg bg-slate-50 px-4 py-2 text-xs font-bold text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* ================= LIGHT NEWSLETTER ================= */}
        <div className="overflow-hidden rounded-[24px] bg-slate-50 p-8 ring-1 ring-slate-100">
          <h3 className="text-lg font-black text-slate-900">Never miss a story</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            Get the latest insights delivered directly to your inbox.
          </p>
          <form onSubmit={handleSidebarSubmit}>
            <input
              type="email"
              placeholder="Your email address"
              className="mt-6 h-12 w-full rounded-xl bg-white px-4 text-sm text-slate-900 placeholder-slate-400 outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500"
              required
            />
            <button className="mt-3 h-12 w-full rounded-xl bg-slate-900 text-sm font-bold text-white transition hover:bg-blue-600 shadow-sm">
              Subscribe Now
            </button>

            {sidebarSubmitted && (
              <p className="mt-2 text-sm text-green-600">Thanks — check your inbox!</p>
            )}

            {sidebarError && (
              <p className="mt-2 text-sm text-red-600">Please enter a valid email.</p>
            )}
          </form>
        </div>
      </div>
    </aside>
  );
}

export default ArticleSidebar;