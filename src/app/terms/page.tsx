import RootLayout from '@/app/layout'

export default function TermsPage() {
  return (
    <RootLayout>
      <div className="flex w-full max-w-6xl items-start mx-auto pt-20">
        <div className="container mx-auto my-8 p-8 bg-white shadow-lg min-h-svh">
          <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
            <p>
              Welcome to Sheba Queue, a platform provided by [Kawsar Ahmed], the
              frontend engineer.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Services</h2>
            <p>
              As a frontend engineer, I offer personalized services related to
              frontend development, including but not limited to [list of
              services].
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. Payment</h2>
            <p>
              Payment for services is [your payment terms]. [Include any details
              about taxes or additional fees.]
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. Confidentiality</h2>
            <p>
              All information shared during the course of our engagement will be
              treated as confidential.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">5. Termination</h2>
            <p>Either party may terminate the services with [notice period].</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">6. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in
              accordance with the laws of [your country or jurisdiction].
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">7. Contact</h2>
            <p>
              If you have any questions or concerns regarding these terms and
              conditions, please contact prokawsar@gmail.com.
            </p>
          </section>
        </div>
      </div>
    </RootLayout>
  )
}
