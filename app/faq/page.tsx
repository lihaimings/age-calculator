"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Is Age Calculator free to use?", a: "Yes, Age Calculator is completely free. No registration or payment required." },
  { q: "Is my data safe?", a: "All data is processed locally in your browser. We don't store any of your information on our servers." },
  { q: "Can I use this on mobile?", a: "Yes, Age Calculator is fully responsive and works great on all devices." },
  { q: "Do I need to create an account?", a: "No account needed. Just open the tool and start using it immediately." },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">FAQ</h1>
        <p className="text-gray-600 text-center mb-12">Frequently asked questions about Age Calculator</p>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
