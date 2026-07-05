# AI Agent Tools Comparison

A comprehensive comparison website for AI agent platforms including LangGraph, Flowise, and n8n. This site provides detailed feature comparisons, pros/cons analysis, and expert recommendations to help teams choose the right AI agent tool for their needs.

## Features

- **Detailed Feature Comparison Matrix**: Side-by-side comparison of capabilities across all three platforms
- **In-depth Tool Analysis**: Comprehensive pros, cons, and use case analysis for each tool
- **Expert Recommendations**: Decision frameworks based on team size, technical expertise, and project requirements
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **SEO Optimized**: Proper metadata and semantic HTML for search engine visibility

## Tools Covered

### LangGraph
- Code-first framework for building stateful, multi-actor AI applications
- Advanced state management and complex reasoning workflows
- Best for experienced developers needing maximum flexibility

### Flowise  
- Visual drag-and-drop interface for building LangChain flows
- No-code/low-code approach to AI workflow development
- Ideal for rapid prototyping and teams without extensive coding experience

### n8n
- Comprehensive workflow automation platform with growing AI capabilities
- 350+ pre-built integrations with extensive enterprise features
- Perfect for hybrid workflows combining AI and traditional automation

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-agent-tools-comparison
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Static export ready for any hosting platform

## Project Structure

```
/app
  /comparison      # Feature comparison matrix page
  /tools          # Detailed tool analysis page  
  /recommendations # Decision framework and recommendations
  layout.tsx      # Root layout with metadata
  page.tsx        # Homepage
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'feat: add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)
- Inspired by the need for better AI tooling comparisons in the developer community