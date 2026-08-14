import Layout from "../components/layout/Layout";

function Contact() {
  return (
    <Layout>
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="rounded-[32px] border border-gray-200 bg-white p-10 shadow-xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Contact ReadMith
            </p>
            <h1 className="mt-4 text-4xl font-black text-gray-900">
              Get In Touch
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Have questions, story ideas, or feedback? We would love to hear from you. Reach out to our team and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl bg-gray-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900">Email</h2>
              <p className="mt-4 text-gray-600 leading-7">
                Send us a message at <a href="mailto:contact@readmith.com" className="text-blue-600 hover:underline">contact@readmith.com</a> for general inquiries.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-3 w-full rounded-3xl border border-gray-200 bg-white px-5 py-4 text-gray-900 outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-3 w-full rounded-3xl border border-gray-200 bg-white px-5 py-4 text-gray-900 outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Message</label>
                <textarea
                  rows="5"
                  placeholder="Tell us how we can help..."
                  className="mt-3 w-full rounded-3xl border border-gray-200 bg-white px-5 py-4 text-gray-900 outline-none focus:border-blue-500"
                />
              </div>
              <button className="w-full rounded-3xl bg-gray-900 px-6 py-4 text-base font-semibold text-white transition hover:bg-black">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Contact;
