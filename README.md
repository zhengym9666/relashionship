# Relationship Conflict Navigator

A web application designed to help users navigate sensitive relationship conversations by providing tailored dialogue templates.

## Features

- **Standard Templates**: Pre-built conversation templates for common relationship conflicts
- **AI-Powered Templates**: Personalized templates generated using DeepSeek R1 AI based on user's specific situation
- **Conflict Type Selection**: Choose from various relationship conflict categories
- **Situation Customization**: Describe your specific situation for more relevant AI-generated templates
- **Copy Functionality**: Easily copy generated templates to clipboard
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Tech Stack

- **Frontend**: React 18 + Next.js 14
- **Styling**: Tailwind CSS
- **Backend**: Next.js API Routes
- **AI Integration**: DeepSeek R1 via OpenRouter API
- **State Management**: React useState hooks

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- OpenRouter API key (for AI features)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/relationship-conflict-navigator.git
cd relationship-conflict-navigator
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory with your OpenRouter API key:

```bash
OPENROUTER_API_KEY=your-api-key-here
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:3000`

## Usage

### Standard Templates
1. Select a conflict type from the available options
2. View generated conversation templates
3. Copy the template you want to use

### AI-Powered Templates
1. Describe your specific situation in detail
2. Select the conflict type
3. Choose your partner's personality type
4. Click "Generate AI Templates"
5. View and copy the personalized templates

## Project Structure

```
├── app/
│   ├── api/
│   │   └── ai/
│   │       └── generate-template/route.ts  # AI API endpoint
│   ├── components/
│   │   ├── ConflictSelector.tsx           # Conflict type selector
│   │   ├── FAQ.tsx                        # FAQ section
│   │   ├── Header.tsx                     # Page header
│   │   ├── TemplateGenerator.tsx          # Template display component
│   │   └── Tabs.tsx                       # Tab navigation
│   ├── data/
│   │   └── conflictTemplates.ts           # Pre-defined conflict templates
│   ├── page.tsx                           # Main page
│   └── globals.css                        # Global styles
├── public/                                # Static assets
├── .env.local                              # Environment variables (not tracked)
├── next.config.js                         # Next.js configuration
├── package.json                           # Project dependencies
├── postcss.config.js                      # PostCSS configuration
├── tailwind.config.js                     # Tailwind CSS configuration
└── tsconfig.json                          # TypeScript configuration
```

## AI Integration

The application uses DeepSeek R1 AI through the OpenRouter API to generate personalized templates. The AI is prompted with:
- User's specific situation
- Conflict type
- Partner's personality

This allows for highly customized and relevant conversation templates.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
