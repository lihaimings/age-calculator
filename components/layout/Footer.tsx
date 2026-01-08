import Link from "next/link";
import { Calendar } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-gray-900">Age Calculator</span>
            </Link>
            <p className="text-gray-600 text-sm">Calculate exact age in years, months, days, hours, and minutes from birth date to any date.</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/how-to-use" className="text-gray-600 hover:text-indigo-600">How to Use</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-indigo-600">FAQ</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-indigo-600">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-600 hover:text-indigo-600">About</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-indigo-600">Privacy</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-indigo-600">Terms</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <p className="text-gray-600 text-sm">
              Questions or feedback?<br />
              We&apos;d love to hear from you.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Age Calculator. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
