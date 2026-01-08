"use client";

import { Calendar, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import ToolComponent from "@/components/tool/ToolComponent";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-600/10 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calendar className="w-4 h-4" />
            Free Online Tool
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Age Calculator</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">Calculate exact age in years, months, days, hours, and minutes from birth date to any date.</p>
        </div>
      </section>

      {/* Tool Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <ToolComponent />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-indigo-600/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Basic Age Calculator</h3>
              <p className="text-gray-600 text-sm">Powerful feature to help you work more efficiently.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-indigo-600/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Age Difference Calculator</h3>
              <p className="text-gray-600 text-sm">Powerful feature to help you work more efficiently.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-indigo-600/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Future Age Calculator</h3>
              <p className="text-gray-600 text-sm">Powerful feature to help you work more efficiently.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-indigo-600/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Age in Different Units</h3>
              <p className="text-gray-600 text-sm">Powerful feature to help you work more efficiently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-indigo-100 mb-8 max-w-xl mx-auto">
            Start using Age Calculator now. It&apos;s free and no registration required.
          </p>
          <Link
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Try Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
