import Link from "next/link";
import { ArrowLeft, Users, Building, Lightbulb, Target, AlertTriangle } from "lucide-react";

export default function Recommendations() {
  const scenarios = [
    {
      title: "Startup/Small Team (2-5 people)",
      icon: <Users className="h-8 w-8" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      recommendation: "Flowise",
      reasoning: "Quick to prototype, minimal setup, visual development allows non-technical team members to contribute.",
      alternatives: [
        { tool: "n8n", reason: "If you need extensive third-party integrations" },
        { tool: "LangGraph", reason: "If your team has strong Python expertise" }
      ]
    },
    {
      title: "Mid-size Company (10-50 people)",
      icon: <Building className="h-8 w-8" />,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      recommendation: "n8n",
      reasoning: "Mature platform with enterprise features, extensive integrations, and ability to handle complex workflows across departments.",
      alternatives: [
        { tool: "Flowise", reason: "If AI workflows are your primary focus" },
        { tool: "LangGraph", reason: "If building proprietary AI systems is core to your business" }
      ]
    },
    {
      title: "Enterprise (50+ people)",
      icon: <Building className="h-8 w-8" />,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      recommendation: "n8n or LangGraph",
      reasoning: "n8n for comprehensive workflow automation with governance. LangGraph for sophisticated AI systems requiring maximum control.",
      alternatives: [
        { tool: "Flowise", reason: "For rapid AI prototyping alongside main platform" }
      ]
    },
    {
      title: "AI Research/Experimentation",
      icon: <Lightbulb className="h-8 w-8" />,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      recommendation: "LangGraph",
      reasoning: "Maximum flexibility for experimenting with novel AI architectures, multi-agent systems, and complex reasoning workflows.",
      alternatives: [
        { tool: "Flowise", reason: "For quick proof-of-concept validation" },
        { tool: "n8n", reason: "If integrating AI into existing research workflows" }
      ]
    }
  ];

  const useCases = [
    {
      useCase: "Customer Support Chatbot",
      simple: { tool: "Flowise", confidence: "High" },
      complex: { tool: "LangGraph", confidence: "High" },
      description: "Simple: FAQ bot with knowledge base. Complex: Multi-step reasoning with escalation workflows."
    },
    {
      useCase: "Document Processing Pipeline",
      simple: { tool: "n8n", confidence: "High" },
      complex: { tool: "LangGraph", confidence: "Medium" },
      description: "Simple: Extract, transform, store documents. Complex: AI-powered content analysis and routing."
    },
    {
      useCase: "Sales Lead Qualification",
      simple: { tool: "n8n", confidence: "High" },
      complex: { tool: "LangGraph", confidence: "High" },
      description: "Simple: Score and route leads. Complex: Multi-touch AI conversations for qualification."
    },
    {
      useCase: "Content Generation Workflow",
      simple: { tool: "Flowise", confidence: "High" },
      complex: { tool: "LangGraph", confidence: "High" },
      description: "Simple: Template-based content creation. Complex: Multi-agent content planning and creation."
    },
    {
      useCase: "Data Analysis & Reporting",
      simple: { tool: "n8n", confidence: "High" },
      complex: { tool: "n8n", confidence: "Medium" },
      description: "Simple: Scheduled reports and alerts. Complex: AI-powered insights and anomaly detection."
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
              <Link href="/tools" className="text-gray-600 hover:text-gray-900">
                Tools
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Recommendations &amp; Decision Framework
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert recommendations based on team size, use cases, and technical requirements 
            to help you choose the right AI agent platform.
          </p>
        </div>

        {/* Decision Framework */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Choose Based on Your Team Size &amp; Context
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {scenarios.map((scenario, index) => (
              <div 
                key={index} 
                className={`${scenario.bgColor} border ${scenario.borderColor} rounded-lg p-6`}
              >
                <div className="flex items-center mb-4">
                  <div className={scenario.color}>
                    {scenario.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 ml-3">
                    {scenario.title}
                  </h3>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Target className="h-5 w-5 text-gray-600 mr-2" />
                    <span className="font-medium text-gray-900">Recommended: {scenario.recommendation}</span>
                  </div>
                  <p className="text-sm text-gray-600">{scenario.reasoning}</p>
                </div>

                <div>
                  <div className="text-sm font-medium text-gray-900 mb-2">Alternatives:</div>
                  <div className="space-y-1">
                    {scenario.alternatives.map((alt, altIndex) => (
                      <div key={altIndex} className="text-sm text-gray-600">
                        <span className="font-medium">{alt.tool}:</span> {alt.reason}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Use Case Matrix */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Use Case Recommendations
          </h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                      Use Case
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                      Simple Implementation
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                      Complex Implementation
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {useCases.map((useCase, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {useCase.useCase}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="font-medium text-blue-600">{useCase.simple.tool}</span>
                          <span className={`ml-2 text-xs px-2 py-1 rounded ${
                            useCase.simple.confidence === 'High' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {useCase.simple.confidence}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="font-medium text-purple-600">{useCase.complex.tool}</span>
                          <span className={`ml-2 text-xs px-2 py-1 rounded ${
                            useCase.complex.confidence === 'High' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {useCase.complex.confidence}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {useCase.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Quick Decision Tree */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Quick Decision Tree
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">1</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Do you have Python developers on your team?</h3>
                  <p className="text-gray-600 mt-1">
                    <strong>Yes →</strong> Consider LangGraph for maximum flexibility<br/>
                    <strong>No →</strong> Go to step 2
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">2</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Is your primary focus on AI workflows?</h3>
                  <p className="text-gray-600 mt-1">
                    <strong>Yes →</strong> Choose Flowise for AI-first development<br/>
                    <strong>No →</strong> Go to step 3
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">3</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Do you need extensive third-party integrations?</h3>
                  <p className="text-gray-600 mt-1">
                    <strong>Yes →</strong> Choose n8n for comprehensive workflow automation<br/>
                    <strong>No →</strong> Consider Flowise for simpler AI-focused workflows
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Considerations */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1" />
            <div className="ml-3">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Key Considerations</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Start simple:</strong> You can always migrate to more complex tools as your needs grow</li>
                <li>• <strong>Team expertise:</strong> Choose tools that match your team&apos;s current skill level</li>
                <li>• <strong>Integration needs:</strong> Consider your existing tech stack and required integrations</li>
                <li>• <strong>Scaling requirements:</strong> Think about future growth and complexity needs</li>
                <li>• <strong>Support &amp; community:</strong> Evaluate the availability of help and resources</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Still Need Help Deciding?
            </h2>
            <p className="text-lg text-white/90 mb-6">
              Review our detailed feature comparison to see exactly how these tools differ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/comparison"
                className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100 transition-colors"
              >
                Feature Comparison
              </Link>
              <Link 
                href="/tools"
                className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors"
              >
                Detailed Tool Analysis
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}