import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Builder\'s Club',
  description: 'Privacy Policy for Builder\'s Club - how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="space-y-8">
          {/* Back Button */}
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back
          </Link>

          {/* Page Title */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
            <p className="text-lg text-gray-600">Last updated: August 2025</p>
          </div>

          {/* Introduction */}
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              Builder&apos;s Club (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is operated by Sprike LLC, 8 The Green, STE R, Dover, DE 19901, United States. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains what we collect, how we use it, and your rights.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              By using Builder&apos;s Club, you agree to this Privacy Policy.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">1. Information We Collect</h3>
            <p className="text-gray-700">We collect the following information when you join Builder&apos;s Club:</p>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li className="list-disc"><strong>Personal details:</strong> Name, email address</li>
              <li className="list-disc"><strong>Billing information:</strong> Payment details processed securely by Stripe (we do not store your full card number)</li>
              <li className="list-disc"><strong>Usage data:</strong> Course progress, community posts, and activity within our platform</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">2. How We Collect Information</h3>
            <p className="text-gray-700">We collect your information:</p>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li className="list-disc">During the checkout process when you subscribe</li>
              <li className="list-disc">Through your activity inside our community platform and course content hosted on Skool</li>
              <li className="list-disc">When you interact with our emails or respond to surveys</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">3. How We Use Your Information</h3>
            <p className="text-gray-700">We use your information to:</p>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li className="list-disc">Provide access to our course, community, and related features</li>
              <li className="list-disc">Process payments and manage subscriptions</li>
              <li className="list-disc">Send important account and course-related updates</li>
              <li className="list-disc">Improve our content and member experience</li>
              <li className="list-disc">Send occasional marketing emails (you can unsubscribe at any time)</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">4. Third-Party Services That Process Your Data</h3>
            <p className="text-gray-700">We use trusted third-party services to run Builder&apos;s Club:</p>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li className="list-disc"><strong>Stripe</strong> – Payment processing</li>
              <li className="list-disc"><strong>Skool</strong> – Hosting course videos and community discussions</li>
              <li className="list-disc"><strong>ConvertKit</strong> – Email communications</li>
            </ul>
            <p className="text-gray-700">These services may store and process your data according to their own privacy policies.</p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">5. Data Storage & Retention</h3>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li className="list-disc">Your data is stored on secure servers located in the United States.</li>
              <li className="list-disc">We retain your information as long as you have an active account.</li>
              <li className="list-disc">You may request deletion of your data at any time (see Section 7).</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">6. Cookies & Tracking</h3>
            <p className="text-gray-700">Our platform and third-party services may use cookies to:</p>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li className="list-disc">Keep you logged in</li>
              <li className="list-disc">Track course progress</li>
              <li className="list-disc">Analyze usage and improve our service</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">7. Your Rights</h3>
            <p className="text-gray-700">You have the right to:</p>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li className="list-disc">Request a copy of your personal data</li>
              <li className="list-disc">Request deletion of your personal data</li>
              <li className="list-disc">Opt out of marketing emails by clicking &quot;unsubscribe&quot; in any message</li>
            </ul>
            <p className="text-gray-700">
              To exercise these rights, email <a href="mailto:fabio@buildersclub.co" className="text-blue-600 hover:text-blue-800 underline font-medium">fabio@buildersclub.co</a>.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">8. Changes to This Policy</h3>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated date.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">9. Contact Us</h3>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, contact:{' '}
              <a href="mailto:fabio@buildersclub.co" className="text-blue-600 hover:text-blue-800 underline font-medium">
                fabio@buildersclub.co
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}