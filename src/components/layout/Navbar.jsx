import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { categories } from "../../data/categories";
import SearchModal from "../SearchModal";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const scrollLatest = () => {
    setMobileOpen(false);
    if (window.location.pathname !== "/") {
      window.location.href = "/#latest";
      return;
    }
    document.getElementById("latest")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl transition-all">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="text-2xl md:text-3xl font-black tracking-tight text-slate-900"
          >
            Read<span className="text-blue-600">Mith</span>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden items-center gap-8 lg:flex">
            {categories.map((item) => (
              <NavLink
                key={item.slug}
                to={`/category/${item.slug}`}
                className={({ isActive }) =>
                  `relative text-sm font-bold tracking-wide transition-colors py-2 ${
                    isActive
                      ? "text-blue-600"
                      : "text-slate-500 hover:text-slate-900"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Search - Now visible on mobile */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-600 transition hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              aria-label="Open search"
            >
              <Search size={20} />
            </button>

            {/* Desktop CTA */}
            <button
              onClick={scrollLatest}
              className="hidden h-10 items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-bold text-white transition hover:bg-blue-600 md:flex"
            >
              Latest Articles
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-600 transition hover:bg-slate-100 lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden bg-white lg:hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? "max-h-[600px] border-t border-slate-100 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 p-6">
            {categories.map((item) => (
              <NavLink
                key={item.slug}
                to={`/category/${item.slug}`}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `flex items-center rounded-2xl px-4 py-3.5 text-sm font-bold transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`
                  
