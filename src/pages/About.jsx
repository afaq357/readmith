import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";

function About() {
  return (
    <Layout>

      {/* ================= HERO ================= */}

      <section className="border-b border-gray-200 bg-gradient-to-b from-gray-50 to-white">

        <div className="mx-auto max-w-6xl px-6 py-20 text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
            About ReadMith
          </p>

          <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-black leading-tight tracking-tight text-gray-900 md:text-6xl">
            Stories Worth Reading.
            <br />
            Ideas Worth Sharing.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-600">
            ReadMith is an online publication built for curious readers.
            We publish thoughtful articles on technology, artificial
            intelligence, business, fashion, and current events to help
            people understand the world through reliable, easy-to-read,
            and practical content.
          </p>

          <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600"
            alt="ReadMith"
            className="mt-16 h-[320px] w-full rounded-[36px] object-cover shadow-2xl md:h-[520px]"
          />

        </div>

      </section>

      {/* ================= OUR STORY ================= */}

      <section className="py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12">

          <div className="lg:col-span-4">

            <p className="font-semibold uppercase tracking-[0.25em] text-blue-600">
              Our Story
            </p>

            <h2 className="mt-5 text-5xl font-black leading-tight text-gray-900">
              Built for People Who Love Learning
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-9 text-gray-600 lg:col-span-8">

            <p>
              The internet is filled with endless information, but finding
              trustworthy and well-structured content has become increasingly
              difficult. At ReadMith, we created a place where readers can
              discover carefully written articles that explain important ideas
              in a clear and engaging way.
            </p>

            <p>
              Rather than chasing clickbait headlines, we focus on creating
              content that provides lasting value. Whether you're interested in
              artificial intelligence, business strategy, emerging technology,
              digital transformation, or lifestyle trends, our goal is to help
              you understand not only what is happening but also why it matters.
            </p>

            <p>
              Every article is written with simplicity, accuracy, and
              readability in mind so readers of every experience level can
              learn something valuable. We believe knowledge should be
              accessible to everyone, regardless of their background or
              profession.
            </p>

          </div>

        </div>

      </section>

      {/* ================= VALUES ================= */}

      <section className="bg-gray-50 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16 text-center">

            <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
              What We Believe
            </p>

            <h2 className="mt-4 text-5xl font-black">
              Our Core Principles
            </h2>

          </div>

          <div className="grid gap-8 lg:grid-cols-3">

            <div className="rounded-[28px] bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <h3 className="text-2xl font-bold">
                Quality First
              </h3>

              <p className="mt-6 leading-8 text-gray-600">
                We focus on publishing informative, well-researched, and
                reader-friendly articles instead of producing large quantities
                of low-value content.
              </p>

            </div>

            <div className="rounded-[28px] bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <h3 className="text-2xl font-bold">
                Simple Explanations
              </h3>

              <p className="mt-6 leading-8 text-gray-600">
                Complex topics don't need complicated language. We simplify
                technology, business, and AI so everyone can understand them.
              </p>

            </div>

            <div className="rounded-[28px] bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <h3 className="text-2xl font-bold">
                Continuous Learning
              </h3>

              <p className="mt-6 leading-8 text-gray-600">
                We believe learning never stops. Every article is designed to
                help readers discover new ideas, improve their knowledge, and
                stay informed.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= STATS ================= */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-[28px] border border-gray-200 p-10 text-center">

              <h3 className="text-5xl font-black text-blue-600">
                15+
              </h3>

              <p className="mt-4 text-lg font-semibold">
                In-Depth Articles
              </p>

            </div>

            <div className="rounded-[28px] border border-gray-200 p-10 text-center">

              <h3 className="text-5xl font-black text-blue-600">
                5
              </h3>

              <p className="mt-4 text-lg font-semibold">
                Main Categories
              </p>

            </div>

            <div className="rounded-[28px] border border-gray-200 p-10 text-center">

              <h3 className="text-5xl font-black text-blue-600">
                100%
              </h3>

              <p className="mt-4 text-lg font-semibold">
                Original Content
              </p>

            </div>

            <div className="rounded-[28px] border border-gray-200 p-10 text-center">

              <h3 className="text-5xl font-black text-blue-600">
                Daily
              </h3>

              <p className="mt-4 text-lg font-semibold">
                Fresh Insights
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= TIMELINE ================= */}

      <section className="bg-gray-50 py-24">

        <div className="mx-auto max-w-5xl px-6">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
              Our Journey
            </p>

            <h2 className="mt-4 text-5xl font-black">
              Growing One Story at a Time
            </h2>

          </div>

          <div className="mt-20 space-y-10">

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <span className="text-sm font-semibold text-blue-600">
                2026
              </span>

              <h3 className="mt-2 text-2xl font-bold">
                ReadMith Was Founded
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                We launched ReadMith with a simple goal: publish useful,
                educational, and engaging articles that help readers understand
                today's rapidly changing world.
              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <span className="text-sm font-semibold text-blue-600">
                Today
              </span>

              <h3 className="mt-2 text-2xl font-bold">
                Publishing Across Multiple Categories
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                We continue expanding our library with articles covering AI,
                technology, business, fashion, and current news while
                maintaining high editorial standards.
              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <span className="text-sm font-semibold text-blue-600">
                Future
              </span>

              <h3 className="mt-2 text-2xl font-bold">
                Building a Trusted Knowledge Platform
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Our vision is to become a trusted destination where readers can
                discover reliable information, thoughtful insights, and
                practical knowledge every day.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-6xl rounded-[40px] bg-gradient-to-r from-gray-900 to-blue-700 px-10 py-20 text-center text-white shadow-2xl">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-200">
            Join ReadMith
          </p>

          <h2 className="mt-5 text-5xl font-black">
            Keep Learning Every Day
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-200">
            Discover articles that simplify complex topics, explore emerging
            technologies, explain business trends, and inspire curiosity. Join
            thousands of readers exploring the future through quality content.
          </p>

          <Link
            to="/"
            className="mt-10 inline-flex rounded-xl bg-white px-8 py-4 font-semibold text-gray-900 transition hover:scale-105 hover:bg-gray-100"
          >
            Explore Articles
          </Link>

        </div>

      </section>

    </Layout>
  );
}

export default About;
