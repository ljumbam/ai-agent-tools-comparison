import Link from "next/link";
import { ArrowLeft, Check, X, Minus } from "lucide-react";

export default function Comparison() {
  const features = [
    {
      category: "Development Approach",
      items: [
        {
          feature: "Visual/No-Code Interface",
          langgraph: false,
          flowise: true,
          n8n: true,
          description: "Drag-and-drop workflow builder"
        },
        {
          feature: "Code-First Development",
          langgraph: true,
          flowise: false,
          n8n: "partial",
          description: "Primary development through coding"
        },
        {
          feature: "Hybrid Approach",
          langgraph: false,
          flowise: "partial",
          n8n: true,
          description: "Mix of visual and code-based development"
        }
      ]
    },
    {
      category: "AI Capabilities",
      items: [
        {
          feature: "LLM Integration",
          langgraph: true,
          flowise: true,
          n8n: true,
          description: "Support for various language models"
        },
        {
          feature: "Multi-Agent Systems",
          langgraph: true,
          flowise: "partial",
          n8n: false,
          description: "Multiple AI agents working together"
        },
        {
          feature: "Memory & State Management",
          langgraph: true,
          flowise: true,
          n8n: "partial",
          description: "Persistent conversation and workflow state"
        },
        {
          feature: "RAG (Retrieval Augmented Generation)",
          langgraph: true,
          flowise: true,
          n8n: "partial",
          description: "Knowledge base integration with AI responses"
        }
      ]
    },
    {
      category: "Technical Features",
      items: [
        {
          feature: "Graph-based Workflows",
          langgraph: true,
          flowise: true,
          n8n: true,
          description: "Node-based workflow representation"
        },
        {
          feature: "Conditional Logic",
          langgraph: true,
          flowise: true,
          n8n: true,
          description: "If/then branching in workflows"
        },
        {
          feature: "Error Handling",
          langgraph: true,
          flowise: "partial",
          n8n: true,
          description: "Robust error recovery and handling"
        },
        {
          feature: "Streaming Responses",
          langgraph: true,
          flowise: true,
          n8n: false,
          description: "Real-time response streaming"
        }
      ]
    },
    {
      category: "Deployment & Scaling",
      items: [
        {
          feature: "Self-Hosted Deployment",
          langgraph: true,
          flowise: true,
          n8n: true,
          description: "Deploy on your own infrastructure"
        },
        {
          feature: "Cloud Hosting Options",
          langgraph: "partial",
          flowise: true,
          n8n: true,
          description: "Managed cloud deployment available"
        },
        {
          feature: "Horizontal Scaling",
          langgraph: true,
          flowise: "partial",
          n8n: true,
          description: "Scale across multiple instances"
        },
        {
          feature: "API Access",
          langgraph: true,
          flowise: true,
          n8n: true,
          description: "REST/GraphQL API endpoints"
        }
      ]
    },
    {
      category: "Integrations",
      items: [
        {
          feature: "Pre-built Connectors",
          langgraph: "partial",
          flowise: "partial",
          n8n: true,
          description: "Ready-made integrations with popular services"
        },
        {
          feature: "Custom Integrations",
          langgraph: true,
          flowise: true,
          n8n: true,
          description: "Build your own connectors"
        },
        {
          feature: "Webhook Support",
          langgraph: true,
          flowise: true,
          n8n: true,
          description: "HTTP webhook triggers and actions"
        }
      ]
    },
    {
      category: "Learning Curve",
      items: [
        {
          feature: "Beginner Friendly",
          langgraph: false,
          flowise: true,
          n8n: true,
          description: "Easy to get started for non-developers"
        },
        {
          feature: "Documentation Quality",
          langgraph: true,
          flowise: "partial",
          n8n: true,
          description: "Comprehensive and well-maintained docs"
        },
        {
          feature: "Community Support",
          langgraph: "partial",
          flowise: "partial",
          n8n: true,
          description: "Active community and forums"
        }
      ]
    }
  ];

  const renderIcon = (value: boolean | string) => {
    if (value === true) {
      return <Check className="h-5 w-5 text-green-600" />;
    } else if (value === false) {
      return <X className="h-5 w-5 text-red-500" />;
    } else {
      return <Minus className="h-5 w-5 text-yellow-600" />;
    }
  };

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Feature Comparison Matrix
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Detailed side-by-side comparison of capabilities, features, and technical specifications 
            across LangGraph, Flowise, and n8n.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 uppercase tracking-wider">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-900 uppercase tracking-wider">
                    LangGraph
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-900 uppercase tracking-wider">
                    Flowise
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-900 uppercase tracking-wider">
                    n8n
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {features.map((category, categoryIndex) => (
                  <>
                    <tr key={categoryIndex} className="bg-gray-100">
                      <td colSpan={4} className="px-6 py-3 text-sm font-semibold text-gray-900">
                        {category.category}
                      </td>
                    </tr>
                    {category.items.map((item, itemIndex) => (
                      <tr key={`${categoryIndex}-${itemIndex}`} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {item.feature}
                            </div>
                            <div className="text-sm text-gray-500">
                              {item.description}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          {renderIcon(item.langgraph)}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {renderIcon(item.flowise)}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {renderIcon(item.n8n)}
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Legend</h3>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center">
              <Check className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-sm text-gray-600">Full Support</span>
            </div>
            <div className="flex items-center">
              <Minus className="h-5 w-5 text-yellow-600 mr-2" />
              <span className="text-sm text-gray-600">Partial Support / Requires Additional Setup</span>
            </div>
            <div className="flex items-center">
              <X className="h-5 w-5 text-red-500 mr-2" />
              <span className="text-sm text-gray-600">Not Supported</span>
            </div>
          </div>
        </div>

        {/* Quick Summary Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">LangGraph</h3>
            <p className="text-sm text-gray-600 mb-4">
              Best for developers who need maximum control and flexibility in building 
              sophisticated AI agent systems with complex reasoning workflows.
            </p>
            <div className="text-xs text-gray-500">
              <strong>Strengths:</strong> Code-first, multi-agent systems, advanced state management
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Flowise</h3>
            <p className="text-sm text-gray-600 mb-4">
              Ideal for teams wanting to quickly prototype and deploy LangChain-based 
              AI workflows without extensive coding requirements.
            </p>
            <div className="text-xs text-gray-500">
              <strong>Strengths:</strong> Visual interface, LangChain integration, rapid prototyping
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">n8n</h3>
            <p className="text-sm text-gray-600 mb-4">
              Perfect for comprehensive workflow automation with growing AI capabilities, 
              extensive integrations, and enterprise features.
            </p>
            <div className="text-xs text-gray-500">
              <strong>Strengths:</strong> Extensive integrations, mature platform, hybrid approach
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}