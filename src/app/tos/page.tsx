import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | Builder\'s Club',
  description: 'Terms of Service for Builder\'s Club membership and platform usage.',
}

export default function TermsOfServicePage() {
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
            <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
            <p className="text-lg text-gray-600">Last updated: August 2025</p>
          </div>

          {/* Introduction */}
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to Builder&apos;s Club (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), operated by Sprike LLC, 8 The Green, STE R, Dover, DE 19901, United States. These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Builder&apos;s Club platform, including our courses, community, and resources (collectively, the &quot;Service&quot;).
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              By joining Builder&apos;s Club, you agree to these Terms. If you do not agree, please do not use our Service.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">1. Membership & Subscriptions</h3>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li className="list-disc">We offer both monthly and yearly subscriptions.</li>
              <li className="list-disc">Memberships are for single-user access only and may not be shared, sold, or transferred.</li>
              <li className="list-disc">Your subscription will automatically renew unless cancelled before the next billing date.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">2. Refund Policy</h3>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li className="list-disc">We offer an unconditional 7-day money-back guarantee from the date of purchase.</li>
              <li className="list-disc">To request a refund, email <a href="mailto:fabio@buildersclub.co" className="text-blue-600 hover:text-blue-800 underline">fabio@buildersclub.co</a> within 7 days of joining.</li>
              <li className="list-disc">Refunds after 7 days are not provided.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">3. Cancellation</h3>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li className="list-disc">You may cancel your membership at any time by emailing <a href="mailto:fabio@buildersclub.co" className="text-blue-600 hover:text-blue-800 underline">fabio@buildersclub.co</a>.</li>
              <li className="list-disc">Cancellation stops future billing, but no partial refunds are issued for unused time after the first 7 days.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">4. Acceptable Use</h3>
            <p className="text-gray-700">You agree not to:</p>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li className="list-disc">Share your account login or access with others.</li>
              <li className="list-disc">Copy, resell, or distribute our course content, templates, or materials.</li>
              <li className="list-disc">Engage in spam, harassment, or self-promotion within the community.</li>
            </ul>
            <p className="text-gray-700 font-medium">Violations may result in immediate termination of your membership without refund.</p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">5. Community Guidelines</h3>
            <p className="text-gray-700">Our community is built on respect and collaboration. Members must:</p>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li className="list-disc">Treat all members with respect.</li>
              <li className="list-disc">Avoid offensive language or discriminatory behavior.</li>
              <li className="list-disc">Keep discussions relevant to learning, building, and sharing.</li>
            </ul>
            <p className="text-gray-700 font-medium">We reserve the right to remove any member who violates these guidelines.</p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">6. Intellectual Property</h3>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li className="list-disc">All course content, videos, templates, and resources remain the exclusive property of Sprike LLC.</li>
              <li className="list-disc">You may use the code you create for your own projects and commercial purposes, but you may not resell our course content or claim it as your own.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">7. No Guarantee of Results</h3>
            <p className="text-gray-700 leading-relaxed">
              While many members achieve significant results, we do not guarantee that you will earn a specific income, achieve a particular business outcome, or build a successful product. Your success depends on your effort, skills, and market conditions.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">8. Payment Processing</h3>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li className="list-disc">All payments are securely processed via Stripe.</li>
              <li className="list-disc">You are responsible for any taxes or fees required by your local jurisdiction.</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">9. Limitation of Liability</h3>
            <p className="text-gray-700">We are not liable for:</p>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li className="list-disc">Technical issues, outages, or data loss.</li>
              <li className="list-disc">Business losses, revenue loss, or other damages arising from use of our Service.</li>
            </ul>
            <p className="text-gray-700 font-medium">Your use of Builder&apos;s Club is at your own risk.</p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">10. Privacy Policy</h3>
            <p className="text-gray-700 leading-relaxed">
              Our Privacy Policy explains how we collect, use, and protect your information. You can read it at: buildersclub.co/privacy-policy
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">11. Contact</h3>
            <p className="text-gray-700">
              If you have questions about these Terms, contact:{' '}
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