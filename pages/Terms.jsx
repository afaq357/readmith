import Layout from "../components/layout/Layout";

function Terms() {
  return (
    <Layout>

      {/* Hero */}

      <section className="border-b border-gray-200 bg-gradient-to-b from-gray-50 to-white">

        <div className="mx-auto max-w-5xl px-6 py-16 text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Legal
          </span>

          <h1 className="mt-6 text-5xl font-black tracking-tight text-gray-900">
            Terms of Service
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            These Terms of Service govern your access to and use of ReadMith.
            By browsing or using our website, you agree to comply with these
            terms. Please read them carefully before using our services.
          </p>

          <p className="mt-6 text-sm text-gray-500">
            Last Updated: July 2026
          </p>

        </div>

      </section>

      {/* Content */}

      <section className="bg-gray-50 py-20">

        <div className="mx-auto max-w-5xl px-6">

          <div className="rounded-[32px] bg-white p-10 shadow-xl">

            <div className="space-y-12">

              <section>

                <h2 className="text-3xl font-bold text-gray-900">
                  1. Acceptance of Terms
                </h2>

                <p className="mt-5 leading-8 text-gray-600">
                  By accessing or using ReadMith, you acknowledge that you
                  have read, understood, and agree to be bound by these Terms
                  of Service. If you do not agree with any part of these terms,
                  please discontinue use of the website immediately.
                </p>

              </section>

              <section>

                <h2 className="text-3xl font-bold text-gray-900">
                  2. Use of Our Website
                </h2>

                <p className="mt-5 leading-8 text-gray-600">
                  ReadMith provides educational articles, news, opinions,
                  guides, and informational content. You agree to use the
                  website only for lawful purposes and in a manner that does
                  not interfere with other users or the operation of the site.
                </p>

                <ul className="mt-6 list-disc space-y-3 pl-6 text-gray-600">
                  <li>Do not misuse or attempt to disrupt our services.</li>
                  <li>Do not copy or republish content without permission.</li>
                  <li>Respect applicable laws and regulations.</li>
                  <li>Do not use automated tools that negatively impact website performance.</li>
                </ul>

              </section>

              <section>

                <h2 className="text-3xl font-bold text-gray-900">
                  3. Intellectual Property
                </h2>

                <p className="mt-5 leading-8 text-gray-600">
                  Unless otherwise stated, all articles, graphics, branding,
                  logos, designs, and original content published on ReadMith
                  are protected by intellectual property laws. Unauthorized
                  reproduction, modification, or distribution is prohibited
                  without prior written consent.
                </p>

              </section>

              <section>

                <h2 className="text-3xl font-bold text-gray-900">
                  4. Accuracy of Information
                </h2>

                <p className="mt-5 leading-8 text-gray-600">
                  We strive to publish accurate and up-to-date information.
                  However, technology, business, finance, and news change
                  rapidly, and we cannot guarantee that every article will
                  always remain current or error-free.
                </p>

              </section>

              <section>

                <h2 className="text-3xl font-bold text-gray-900">
                  5. Third-Party Links
                </h2>

                <p className="mt-5 leading-8 text-gray-600">
                  Some articles may reference external websites or services.
                  These links are provided solely for convenience. ReadMith is
                  not responsible for the availability, accuracy, or content
                  of third-party websites.
                </p>

              </section>

              <section>

                <h2 className="text-3xl font-bold text-gray-900">
                  6. Limitation of Liability
                </h2>

                <p className="mt-5 leading-8 text-gray-600">
                  ReadMith and its contributors shall not be liable for any
                  direct, indirect, incidental, or consequential damages
                  resulting from the use of this website or reliance on any
                  published content.
                </p>

              </section>

              <section>

                <h2 className="text-3xl font-bold text-gray-900">
                  7. Changes to These Terms
                </h2>

                <p className="mt-5 leading-8 text-gray-600">
                  We may revise these Terms of Service from time to time.
                  Updated versions will be published on this page with a new
                  revision date. Continued use of ReadMith constitutes
                  acceptance of any updated terms.
                </p>

              </section>

              <section>

                <h2 className="text-3xl font-bold text-gray-900">
                  8. Contact Us
                </h2>

                <p className="mt-5 leading-8 text-gray-600">
                  If you have questions regarding these Terms of Service,
                  please contact us. We are happy to assist with any concerns
                  relating to your use of ReadMith.
                </p>

              </section>

            </div>

          </div>

        </div>

      </section>

      {/* Bottom CTA */}

      <section className="px-6 pb-24">

        <div className="mx-auto max-w-5xl rounded-[32px] bg-gradient-to-r from-gray-900 to-blue-700 px-10 py-14 text-center text-white">

          <h2 className="text-4xl font-black">
            Thank You for Visiting ReadMith
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-200">
            We appreciate your trust in ReadMith. Our goal is to provide
            informative, reliable, and engaging content while maintaining a
            safe and respectful experience for every reader.
          </p>

        </div>

      </section>

    </Layout>
  );
}

export default Terms;
