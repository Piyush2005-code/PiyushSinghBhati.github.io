# AI Robotics Visionary - Portfolio Website

A modern, interactive portfolio website showcasing research, projects, and expertise in AI and Robotics. Built with cutting-edge web technologies and designed for optimal performance and user experience.

## 🌟 Features

- **Interactive Hero Section** - Engaging introduction with dynamic animations
- **Research Interests** - Highlight your research focus areas
- **About Section** - Tell your story and background
- **Research Projects** - Showcase your research contributions
- **Portfolio Projects** - Display your best work
- **Skills Section** - Visual representation of technical expertise
- **Contact Integration** - Easy ways for visitors to reach you
- **Responsive Design** - Perfect on all devices (mobile, tablet, desktop)
- **Dark Mode Support** - Modern, eye-friendly interface
- **Background Music** - Ambient audio for enhanced experience

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn installed

### Installation & Development

```bash
# Step 1: Clone the repository
git clone https://github.com/yourusername/ai-robotics-visionary.git
cd ai-robotics-visionary

# Step 2: Install dependencies
npm install

# Step 3: Start the development server
npm run dev
```

The application will open at `http://localhost:5173` with hot module reloading enabled.

## 🛠️ Available Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production (optimized)
npm run build:dev    # Build in development mode
npm run preview      # Preview production build locally
npm run lint         # Run ESLint checks
npm run test         # Run tests once
npm run test:watch   # Run tests in watch mode
```

## 🏗️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite (lightning-fast builds)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Component State**: React Query
- **Form Validation**: React Hook Form
- **Testing**: Vitest
- **Linting**: ESLint

## 📁 Project Structure

```
src/
├── components/        # Reusable React components
│   ├── Navigation    # Header navigation
│   ├── HeroSection   # Main hero section
│   ├── AboutSection  # About/bio section
│   ├── ResearchSection   # Research highlights
│   ├── ProjectsSection   # Portfolio projects
│   ├── SkillsSection     # Technical skills
│   └── ContactSection    # Contact information
├── pages/            # Page components
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── App.tsx           # Main App component
└── main.tsx          # Application entry point
```

## 🎨 Customization

To personalize your portfolio:

1. **Update Content**: Edit component files in `src/components/`
2. **Modify Colors**: Update Tailwind theme in `tailwind.config.ts`
3. **Change Fonts**: Modify `index.css` and Tailwind config
4. **Add Images**: Place assets in `public/` directory
5. **Background Music**: Update audio file in `BackgroundMusic` component

## 🚢 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages
See [CONTRIBUTING.md](CONTRIBUTING.md) for deployment instructions.

## 📝 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) for more information on how to:
- Report bugs
- Suggest enhancements
- Submit pull requests
- Follow our development standards

## 📧 Contact & Support

For questions or support, please open an issue on GitHub or contact through the portfolio website contact form.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the component library
- [Tailwind CSS](https://tailwindcss.com/) for styling utilities
- [Vite](https://vitejs.dev/) for the build tool
- All contributors who help improve this project

---

**Made with ❤️ by Piyush Singh Bhati**
