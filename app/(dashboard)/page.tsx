import { Button } from '@/components/ui/button';
import { ArrowRight, CreditCard, Database } from 'lucide-react';
import { Terminal } from './terminal';

export default function HomePage() {
  return (
    <main>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                Landhacker
                <span className="block text-green-500">Automate Your Land Investing</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Use AI to automate land comp analysis, marketing, and outreach to invest smarter and faster.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <a
                  href="https://vercel.com/templates/next.js/next-js-saas-starter"
                  target="_blank"
                >
                  <Button className="bg-white hover:bg-gray-100 text-black border border-gray-200 rounded-full text-lg px-8 py-4 inline-flex items-center justify-center">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <Terminal />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Feature 1: Geographic Parcel Exploration */}
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mt-4">Explore Land Parcels</h3>
              <p className="mt-2 text-base text-gray-500">
                Use an interactive map to explore and select land parcels, triggering AI-powered analysis.
              </p>
            </div>

            {/* Feature 2: AI-Powered Land Comps Generation */}
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                <CreditCard className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mt-4">AI-Powered Comps</h3>
              <p className="mt-2 text-base text-gray-500">
                Generate accurate land comps using AI, leveraging public data, tax records, and historical sales.
              </p>
            </div>

            {/* Feature 3: Automated Marketing & Outreach */}
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <ArrowRight className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mt-4">Automated Outreach</h3>
              <p className="mt-2 text-base text-gray-500">
                Automate marketing campaigns with direct mail, SMS, and email outreach to drive land sales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action: Tokens and AI Usage */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Tokenized AI Usage for Seamless Investment
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Purchase tokens to access AI-driven land comps and grow your investment portfolio efficiently.
            </p>
            <div className="mt-8">
              <a href="#"
                className="inline-block bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600">
                Buy Tokens & Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
