import { Users, Target, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Age Calculator</h1>
        <p className="text-xl text-gray-600 mb-8">Calculate exact age in years, months, days, hours, and minutes from birth date to any date.</p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">User Focused</h3>
            <p className="text-gray-600 text-sm">Built with users in mind</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Precise Results</h3>
            <p className="text-gray-600 text-sm">Accurate and reliable</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Free Forever</h3>
            <p className="text-gray-600 text-sm">No hidden costs</p>
          </div>
        </div>
      </div>
    </div>
  );
}
