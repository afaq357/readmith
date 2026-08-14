import { Link } from "react-router-dom";
import { useState } from "react";
import { categories } from "../../data/categories";

function Footer() {
  const [footerSubmitted, setFooterSubmitted] = useState(false);
  const [footerError, setFooterError] = useState(false);

  const handleFooterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements[0].value;
    if (!email || !email.includes("@")) {
      setFooterError(true);
      setTimeout(() => setFooterError(false), 3000);
      return;
    }
    setFooterSubmitted(true);
    e.target.reset();
    setTimeout(() => setFooterSubmitted(false), 4000);
  };
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand & Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-black text-gray-900">ReadMith</h2>
            <p className="leading-relaxed text-gray-500">
              Premium articles covering tech, business, AI, and global trends.
            </p>
            <a 
              href="mailto:contact@readmith.com" 
              className="block text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              contact@readmith.com
            </a>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-gray-900 mb-6">Categories</h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    to={`/category/${category.slug}`}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-gray-900 mb-6">Company</h3>
            <ul className="space-y-3">
              {["About", "Contact", "Privacy Policy", "Terms"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-gray-900 mb-6">Newsletter</h3>
            <p className="text-sm text-gray-500 mb-4">Get the latest insights delivered weekly.</p>
            <form onSubmit={handleFooterSubmit} className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="h-10 w-full rounded-lg bg-gray-50 px-4 text-sm border border-gray-200 outline-none focus:border-blue-500"
                required
              />
              <button className="h-10 w-full rounded-lg bg-gray-900 font-semibold text-white hover:bg-gray-800 transition-colors">
                Subscribe
              </button>

              {footerSubmitted && (
                <p className="text-sm text-green-600">Thanks — check your inbox!</p>
              )}

              {footerError && (
                <p className="text-sm text-red-600">Please enter a valid email.</p>
              )}
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} ReadMith. All rights reserved.</p>
          <p>Built with React & Tailwind</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;