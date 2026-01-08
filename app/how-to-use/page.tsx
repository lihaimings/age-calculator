import { CheckCircle } from "lucide-react";

export default function HowToUsePage() {
  const steps = [
    { title: "Open the Tool", desc: "Navigate to the home page to access Age Calculator." },
    { title: "Enter Your Data", desc: "Fill in the required information in the tool interface." },
    { title: "Get Results", desc: "Click the button to process and see your results instantly." },
    { title: "Save or Export", desc: "Save your results locally or export them as needed." },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">How to Use</h1>
        <p className="text-gray-600 text-center mb-12">Get started with Age Calculator in just a few steps</p>
        
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
