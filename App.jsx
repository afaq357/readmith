import React, { useState } from "react";

const posts = [
  {
    category: "USA NEWS",
    title: "The Latest Stories and Updates Making Headlines Across the USA",
    date: "September 23, 2026",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=900&q=80",
    text: "Stay updated with the latest stories, developments and interesting events from across the United States."
  },
  {
    category: "TRENDING",
    title: "A Trending Story Everyone Is Talking About Today",
    date: "September 23, 2026",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=900&q=80",
    text: "Here are some of the trending stories and topics attracting attention online today."
  },
  {
    category: "VIRAL",
    title: "This Viral Story Has Quickly Spread Across Social Media",
    date: "September 22, 2026",
    image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=900&q=80",
    text: "A look at one of the stories currently getting significant attention across social platforms."
  },
  {
    category: "ENTERTAINMENT",
    title: "Entertainment News and Stories Trending Right Now",
    date: "September 22, 2026",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80",
    text: "Catch up on entertainment stories and topics that are currently trending with readers."
  },
  {
    category: "LIFESTYLE",
    title: "Interesting Lifestyle Stories You May Have Missed",
    date: "September 21, 2026",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80",
    text: "Discover interesting lifestyle stories, ideas and conversations from around the web."
  },
  {
    category: "USA",
    title: "What Is Trending Across America This Week",
    date: "September 21, 2026",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
    text: "A collection of current stories and topics attracting attention across the United States."
  },
  {
    category: "VIRAL STORIES",
    title: "A New Viral Story Is Getting Attention Online",
    date: "September 20, 2026",
    image: "https://images.unsplash.com/photo-1551817958-d9d86fb29431?auto=format&fit=crop&w=900&q=80",
    text: "Take a look at the latest viral conversation making its way around social media."
  },
  {
    category: "NEWS",
    title: "Latest News and Updates From Around the Country",
    date: "September 20, 2026",
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=900&q=80",
    text: "Read the latest updates and stories from communities across the United States."
  },
  {
    category: "TRENDING",
    title: "The Story Behind One of Today's Biggest Online Trends",
    date: "September 19, 2026",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
    text: "A closer look at an online trend that has captured attention recently."
  },
  {
    category: "USA NEWS",
    title: "More Stories Making Headlines Across the United States",
    date: "September 19, 2026",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=900&q=80",
    text: "Explore more stories and updates from across the USA."
  }
];

function App() {
  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter((post) =>
    `${post.title} ${post.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="site">

      <header className="header">
        <div className="header-inner">

          <a href="/" className="logo">
            Daily USA News Story
          </a>

          <button className="menu-button">
            ☰
          </button>

        </div>
      </header>

      <nav className="nav">
        <div className="nav-inner">
          <a href="/">Home</a>
          <a href="#contact">Contact Us</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#cookie">Cookie Policy</a>
          <a href="#disclaimer">Disclaimer</a>
        </div>
      </nav>

      <main className="main">

        <section className="hero">
          <h1>Daily USA News Story</h1>

          <p>
            Latest USA news, trending stories and viral stories from around the web.
          </p>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search stories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button>
              Search
            </button>
          </div>
        </section>

        <section className="content">

          <div className="section-title">
            <h2>Latest Stories</h2>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="no-results">
              No stories found.
            </div>
          ) : (
            <div className="posts">

              {filteredPosts.map((post, index) => (
                <article className="post-card" key={index}>

                  <a href={`#post-${index}`} className="post-image">
                    <img
                      src={post.image}
                      alt={post.title}
                    />
                  </a>

                  <div className="post-content">

                    <div className="post-category">
                      {post.category}
                    </div>

                    <h2>
                      <a href={`#post-${index}`}>
                        {post.title}
                      </a>
                    </h2>

                    <div className="post-meta">
                      By Daily USA News Story &nbsp; • &nbsp; {post.date}
                    </div>

                    <p>
                      {post.text}
                    </p>

                    <a
                      href={`#post-${index}`}
                      className="read-more"
                    >
                      Read More →
                    </a>

                  </div>

                </article>
              ))}

            </div>
          )}

          <div className="pagination">
            <a className="active" href="#page1">1</a>
            <a href="#page2">2</a>
            <a href="#page3">3</a>
            <span>...</span>
            <a href="#page7">7</a>
            <a href="#next">Next →</a>
          </div>

        </section>

      </main>

      <footer className="footer">

        <div className="footer-inner">

          <h3>Daily USA News Story</h3>

          <p>
            Latest USA news, viral stories, trending topics and interesting stories.
          </p>

          <div className="footer-links">
            <a href="#contact">Contact Us</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#cookie">Cookie Policy</a>
            <a href="#disclaimer">Disclaimer</a>
          </div>

          <p className="copyright">
            © 2026 Daily USA News Story. All rights reserved.
          </p>

        </div>

      </footer>

      <style>{`

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #f5f5f5;
          color: #222;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        .site {
          min-height: 100vh;
        }

        .header {
          background: #ffffff;
          border-bottom: 1px solid #e5e5e5;
        }

        .header-inner {
          max-width: 1100px;
          margin: auto;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 27px;
          font-weight: 800;
          color: #111827;
        }

        .menu-button {
          border: none;
          background: transparent;
          font-size: 24px;
          cursor: pointer;
        }

        .nav {
          background: #ffffff;
          border-bottom: 1px solid #e5e5e5;
        }

        .nav-inner {
          max-width: 1100px;
          margin: auto;
          padding: 12px 20px;
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }

        .nav-inner a {
          font-size: 14px;
          color: #444;
        }

        .nav-inner a:hover {
          color: #1877f2;
        }

        .main {
          max-width: 1100px;
          margin: auto;
        }

        .hero {
          background: #ffffff;
          margin: 25px 20px;
          padding: 35px 25px;
          text-align: center;
          border-radius: 8px;
        }

        .hero h1 {
          margin: 0 0 10px;
          font-size: 34px;
          color: #111827;
        }

        .hero p {
          margin: 0 auto 25px;
          color: #666;
          font-size: 16px;
        }

        .search-box {
          max-width: 600px;
          margin: auto;
          display: flex;
        }

        .search-box input {
          flex: 1;
          min-width: 0;
          padding: 13px;
          border: 1px solid #d5d5d5;
          border-radius: 5px 0 0 5px;
          font-size: 15px;
          outline: none;
        }

        .search-box button {
          border: none;
          padding: 0 20px;
          background: #1877f2;
          color: white;
          border-radius: 0 5px 5px 0;
          cursor: pointer;
          font-weight: 600;
        }

        .content {
          padding: 0 20px 40px;
        }

        .section-title {
          border-bottom: 2px solid #222;
          margin-bottom: 20px;
        }

        .section-title h2 {
          margin: 0 0 8px;
          font-size: 24px;
        }

        .posts {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .post-card {
          background: #ffffff;
          display: grid;
          grid-template-columns: 280px 1fr;
          border-radius: 7px;
          overflow: hidden;
          border: 1px solid #e4e4e4;
        }

        .post-image {
          width: 100%;
          height: 210px;
          overflow: hidden;
        }

        .post-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .post-content {
          padding: 20px;
        }

        .post-category {
          color: #1877f2;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .post-content h2 {
          margin: 0 0 8px;
          font-size: 23px;
          line-height: 1.25;
        }

        .post-content h2 a:hover {
          color: #1877f2;
        }

        .post-meta {
          color: #888;
          font-size: 12px;
          margin-bottom: 12px;
        }

        .post-content p {
          color: #555;
          line-height: 1.6;
          margin: 0 0 15px;
          font-size: 15px;
        }

        .read-more {
          color: #1877f2;
          font-weight: 700;
          font-size: 14px;
        }

        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 7px;
          margin-top: 30px;
          flex-wrap: wrap;
        }

        .pagination a,
        .pagination span {
          padding: 9px 13px;
          background: #ffffff;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
        }

        .pagination .active {
          background: #1877f2;
          color: white;
          border-color: #1877f2;
        }

        .no-results {
          background: white;
          padding: 40px;
          text-align: center;
        }

        .footer {
          background: #111827;
          color: white;
          margin-top: 20px;
        }

        .footer-inner {
          max-width: 1100px;
          margin: auto;
          padding: 40px 20px;
          text-align: center;
        }

        .footer h3 {
          margin: 0 0 10px;
          font-size: 22px;
        }

        .footer p {
          color: #cbd5e1;
          font-size: 14px;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          margin: 25px 0;
        }

        .footer-links a {
          color: #ffffff;
          font-size: 14px;
        }

        .copyright {
          border-top: 1px solid #374151;
          padding-top: 20px;
        }

        @media (max-width: 700px) {

          .logo {
            font-size: 21px;
          }

          .nav-inner {
            gap: 14px;
          }

          .hero {
            margin: 15px 10px;
            padding: 25px 15px;
          }

          .hero h1 {
            font-size: 27px;
          }

          .content {
            padding: 0 10px 30px;
          }

          .post-card {
            grid-template-columns: 1fr;
          }

          .post-image {
            height: 210px;
          }

          .post-content {
            padding: 17px;
          }

          .post-content h2 {
            font-size: 20px;
          }

          .search-box {
            width: 100%;
          }

        }

      `}</style>

    </div>
  );
}

export default App;
