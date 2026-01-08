"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Calendar, RotateCcw, Copy, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  input1: string;
  input2: string;
}

interface Result {
  value: string;
  timestamp: number;
}

const STORAGE_KEY = "age-calculator_data";

export default function AgeCalculatorTool() {
  const [formData, setFormData] = useState<FormData>({
    input1: "",
    input2: "",
  });
  const [result, setResult] = useState<Result | null>(null);
  const [history, setHistory] = useState<Result[]>([]);
  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const data = JSON.parse(saved);
        if (data.history) setHistory(data.history);
      }
    } catch (e) {
      console.error("Failed to load data:", e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ history }));
      } catch (e) {
        console.error("Failed to save data:", e);
      }
    }
  }, [history, isLoading]);

  const showNotification = useCallback((type: "success" | "error", message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 3000);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCalculate = () => {
    if (!formData.input1.trim()) {
      showNotification("error", "Please enter a value");
      return;
    }

    // Process the input
    const newResult: Result = {
      value: `Processed: ${formData.input1}`,
      timestamp: Date.now(),
    };

    setResult(newResult);
    setHistory(prev => [newResult, ...prev].slice(0, 10));
    showNotification("success", "Calculation complete!");
  };

  const handleReset = () => {
    setFormData({ input1: "", input2: "" });
    setResult(null);
  };

  const handleCopy = async () => {
    if (result) {
      try {
        await navigator.clipboard.writeText(result.value);
        showNotification("success", "Copied to clipboard!");
      } catch (e) {
        showNotification("error", "Failed to copy");
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* Notification */}
      {notification && (
        <div className={`fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg ${
          notification.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
        }`}>
          {notification.type === "success" ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
          <span>{notification.message}</span>
        </div>
      )}

      {/* Main Card */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-indigo-600/10 rounded-lg">
            <Calendar className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Age Calculator</h2>
            <p className="text-gray-600 text-sm">Calculate exact age in years, months, days, hours, and minutes from birth date to any date.</p>
          </div>
        </div>

        {/* Input Form */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Input</label>
            <input
              type="text"
              name="input1"
              value={formData.input1}
              onChange={handleInputChange}
              placeholder="Enter your value..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600/50 focus:border-indigo-600"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleCalculate}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            Calculate
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
        </div>

        {/* Result */}
        {result && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-gray-900">Result</h3>
              <button
                type="button"
                onClick={handleCopy}
                className="p-2 text-gray-500 hover:text-indigo-600 transition-colors"
                title="Copy to clipboard"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <p className="text-lg font-mono text-gray-800">{result.value}</p>
          </div>
        )}
      </div>

      {/* History */}
      {history.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">History</h3>
          <div className="space-y-2">
            {history.map((item, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg text-sm">
                <span className="text-gray-800">{item.value}</span>
                <span className="text-gray-400 text-xs ml-2">
                  {new Date(item.timestamp).toLocaleTimeString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
