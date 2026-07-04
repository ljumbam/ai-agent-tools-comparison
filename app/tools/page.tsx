import Link from "next/link";
import { ArrowLeft, Code, Star, GitBranch } from "lucide-react";

export default function Tools() {
  const tools = [
    {
      id: "langgraph",
      name: "LangGraph",
      tagline: "Build stateful, multi-actor applications with LLMs",
      description: "LangGraph is a library for building stateful, multi-actor applications with LLMs, used to create agent and multi-agent workflows. It extends LangChain with the ability to coordinate multiple chains (or actors) across multiple steps of computation in a cyclic manner.",
      gradient: "from-blue-500 to-blue-600",
      textColor: "text-blue-600",
      developer: "LangChain",
      license: "MIT",
      language: "Python",
      stars: "5.2k",
      pros: [
        "Maximum flexibility and control over agent behavior",
        "Sophisticated state management and memory handling",
        "Built-in support for complex multi-agent orchestration",
        "Seamless integration with LangChain ecosystem",
        "Advanced debugging and monitoring capabilities",
        "Support for streaming and real-time interactions"
      ],
      cons: [
        "Steep learning curve requiring Python expertise",
        "No visual interface for non-technical users",
        "Requires significant setup and configuration",
        "Limited pre-built templates and examples",
        "Documentation can be complex for beginners"
      ],
      bestFor: [
        "Experienced developers building complex AI systems",
        "Applications requiring sophisticated reasoning workflows",
        "Multi-agent systems with complex interactions",
        "Projects needing fine-grained control over agent behavior",
        "Research and experimental AI applications"
      ],
      notIdealFor: [
        "Non-technical users without coding experience",
        "Simple automation tasks",
        "Rapid prototyping without coding",
        "Teams lacking Python expertise"
      ]
    },
    {
      id: "flowise",
      name: "Flowise",
      tagline: "Drag & drop UI to build your customized LLM flow",
      description: "Flowise is a low-code/no-code tool for developers to build customized LLM orchestration flows & AI agents. It provides a visual interface to create LangChain applications without writing code, making AI development accessible to a broader audience.",
      gradient: "from-green-500 to-green-600",
      textColor: "text-green-600",
      developer: "FlowiseAI",
      license: "Apache 2.0",
      language: "TypeScript/JavaScript",
      stars: "28.1k",
      pros: [
        "Intuitive drag-and-drop visual interface",
        "No coding required for basic workflows",
        "Built on top of proven LangChain framework",
        "Good selection of pre-built nodes and templates",
        "Active community and regular updates",
        "Easy deployment options including Docker"
      ],
      cons: [
        "Limited customization compared to code-first approaches",
        "May hit limitations with complex logic requirements",
        "Smaller ecosystem compared to n8n",
        "Less mature than established automation platforms",
        "Debugging can be challenging in visual interface"
      ],
      bestFor: [
        "Teams wanting to quickly prototype AI workflows",
        "Non-developers who need to build LLM applications",
        "Organizations already using LangChain",
        "Proof-of-concept and MVP development",
        "Educational and learning purposes"
      ],
      notIdealFor: [
        "Complex enterprise automation requirements",
        "Applications requiring extensive custom logic",
        "Teams needing comprehensive workflow management",
        "Mission-critical production systems without fallbacks"
      ]
    },
    {
      id: "n8n",
      name: "n8n",
      tagline: "Workflow automation for technical people",
      description: "n8n is a powerful workflow automation platform that helps you connect any app with an API. With a fair-code license and 350+ integrations, it enables you to build flexible workflows that integrate with AI services and traditional business applications.",
      gradient: "from-purple-500 to-purple-600",
      textColor: "text-purple-600",
      developer: "n8n GmbH",
      license: "Sustainable Use License",
      language: "TypeScript/JavaScript",
      stars: "44.8k",
      pros: [
        "Extensive library of 350+ pre-built integrations",
        "Mature platform with proven scalability",
        "Excellent error handling and retry mechanisms",
        "Strong community and enterprise support",
        "Flexible deployment options (cloud and self-hosted)",
        "Comprehensive workflow management features",
        "Growing AI and LLM integration capabilities"
      ],
      cons: [
        "AI-specific features are newer and less mature",
        "Can be overkill for simple AI-only workflows",
        "Learning curve for advanced workflow patterns",
        "Licensing changes have caused some community concerns",
        "Less specialized for pure AI agent development"
      ],
      bestFor: [
        "Comprehensive workflow automation with AI components",
        "Enterprise environments requiring reliability",
        "Teams needing extensive third-party integrations",
        "Hybrid workflows combining AI and traditional automation",
        "Organizations requiring audit trails and governance"
      ],
      notIdealFor: [
        "Pure AI research and experimentation",
        "Simple AI-only applications",
        "Teams specifically focused on multi-agent systems",
        "Projects requiring advanced AI reasoning capabilities"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center text-blue-600 hover:text-blue-700">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/comparison" className="text-gray-600 hover:text-gray-900">
                Comparison
              </Link>
              <Link href="/recommendations" className="text-gray-600 hover:text-gray-900">
                Recommendations
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Agent Tools Deep Dive
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive analysis of each platform, including pros, cons, and ideal use cases 
            to help you make an informed decision.
          </p>
        </div>

        <div className="space-y-12">
          {tools.map((tool) => (
            <div key={tool.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Header */}
              <div className={`bg-gradient-to-r ${tool.gradient} p-8`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{tool.name}</h2>
                    <p className="text-lg text-white/90">{tool.tagline}</p>
                  </div>
                  <div className="mt-4 md:mt-0 flex flex-wrap gap-4">
                    <div className="flex items-center text-white/90">
                      <Star className="h-4 w-4 mr-1" />
                      <span className="text-sm">{tool.stars} stars</span>
                    </div>
                    <div className="flex items-center text-white/90">
                      <Code className="h-4 w-4 mr-1" />
                      <span className="text-sm">{tool.language}</span>
                    </div>
                    <div className="flex items-center text-white/90">
                      <GitBranch className="h-4 w-4 mr-1" />
                      <span className="text-sm">{tool.license}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Overview</h3>
                  <p className="text-gray-600 leading-relaxed">{tool.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Pros */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">✅ Pros</h3>
                    <ul className="space-y-2">
                      {tool.pros.map((pro, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span className="text-gray-600">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cons */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">❌ Cons</h3>
                    <ul className="space-y-2">
                      {tool.cons.map((con, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span className="text-gray-600">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  {/* Best For */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Best For</h3>
                    <ul className="space-y-2">
                      {tool.bestFor.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Not Ideal For */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">⚠️ Not Ideal For</h3>
                    <ul className="space-y-2">
                      {tool.notIdealFor.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Comparison CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Compare Features Side-by-Side?
          </h2>
          <p className="text-lg text-white/90 mb-6">
            View our detailed feature comparison matrix to see exactly how these tools stack up.
          </p>
          <Link 
            href="/comparison"
            className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100 transition-colors"
          >
            View Feature Comparison
          </Link>
        </div>
      </div>
    </div>
  );
}