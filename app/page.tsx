import Link from "next/link";
import { ArrowRight, Zap, Users, Code } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Zap className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">AI Agent Tools</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/comparison" className="text-gray-600 hover:text-gray-900">
                Comparison
              </Link>
              <Link href="/tools" className="text-gray-600 hover:text-gray-900">
                Tools
              </Link>
              <Link href="/recommendations" className="text-gray-600 hover:text-gray-900">
                Recommendations
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Choose the Right
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}AI Agent Tool
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive comparison of LangGraph, Flowise, and n8n - the leading platforms 
            for building intelligent automation workflows and AI agents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/comparison"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              View Comparison
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              href="/tools"
              className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Explore Tools
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <Code className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Deep Dive</h3>
            <p className="text-gray-600">
              In-depth analysis of architecture, programming models, and technical capabilities 
              of each platform.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <Users className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Use Case Matching</h3>
            <p className="text-gray-600">
              Find the perfect tool for your specific needs, from simple workflows 
              to complex AI agent systems.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <Zap className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Recommendations</h3>
            <p className="text-gray-600">
              Data-driven recommendations based on team size, technical expertise, 
              and project requirements.
            </p>
          </div>
        </div>

        {/* Tools Preview */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            The Tools We Compare
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-blue-500 to-blue-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">LangGraph</h3>
                <p className="text-gray-600 mb-4">
                  Code-first framework for building stateful, multi-actor AI applications 
                  with complex reasoning capabilities.
                </p>
                <Link 
                  href="/tools/langgraph"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn more →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-green-500 to-green-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Flowise</h3>
                <p className="text-gray-600 mb-4">
                  Visual drag-and-drop interface for building LangChain flows 
                  with an intuitive no-code approach.
                </p>
                <Link 
                  href="/tools/flowise"
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  Learn more →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-purple-500 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">n8n</h3>
                <p className="text-gray-600 mb-4">
                  Powerful workflow automation platform with extensive integrations 
                  and growing AI capabilities.
                </p>
                <Link 
                  href="/tools/n8n"
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}