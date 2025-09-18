# News Explorer

A modern, responsive news application built with React that allows users to search, browse, and save news articles from around the world.

## 🌟 Live Demo

**Frontend**: [https://visionary-semifreddo-188112.netlify.app/](https://visionary-semifreddo-188112.netlify.app/)

## 📋 Features

### Core Functionality

- **News Search**: Search for news articles using the NewsAPI
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Cards**: Clickable news cards with hover effects
- **Save Articles**: Bookmark articles for later reading (authentication required)
- **User Authentication**: Sign up and sign in functionality

### User Interface

- **Modern Design**: Clean, professional interface with smooth animations
- **Loading States**: Visual feedback with spinning preloader during searches
- **Modal System**: Elegant login/register modals with multiple close options
- **Navigation**: Seamless routing between home and saved articles pages
- **Success Feedback**: User-friendly confirmation modals for actions
- **Interactive Tooltips**: Helpful save/unsave action indicators

## 🛠️ Technology Stack

### Frontend

- **React 18.2.0** - Modern UI library with functional components and hooks
- **React Router DOM 6.8.0** - Client-side routing
- **Vite 4.1.0** - Fast build tool and development server
- **CSS3** - Modern styling with Flexbox and CSS Grid
- **BEM Methodology** - Consistent CSS class naming convention

### Development Tools

- **ESLint 9.35.0** - Modern flat config with comprehensive linting rules
- **React ESLint Plugins** - React-specific code quality enforcement
- **JSX A11y Plugin** - Accessibility linting for better UX
- **VS Code Integration** - Auto-fix on save and real-time error detection
- **Code Formatting** - Automated code style consistency

### APIs & Services

- **NewsAPI** - Real-time news data from multiple sources
- **Netlify** - Frontend hosting and deployment

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Modern web browser with ES2022 support

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/halilaybarr/Final-Project.git
   cd Final-Project
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:

   ```env
   VITE_NEWS_API_KEY=your_newsapi_key_here
   ```

4. **Run code quality checks** (optional but recommended)

   ```bash
   npm run lint:check
   ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/
│   ├── App/                 # Root component
│   ├── Header/              # Navigation and user menu
│   ├── Main/                # Main page with search and results
│   ├── NewsCard/            # Individual news article card
│   ├── SearchForm/          # News search functionality
│   ├── Preloader/           # Loading animation
│   ├── LoginModal/          # User authentication modal
│   ├── RegisterModal/       # User registration modal
│   ├── Navigation/          # Navigation links
│   ├── About/               # About section
│   ├── Footer/              # Footer component
│   ├── SavedNews/           # Saved articles page
│   ├── SaveTooltip/         # Save article tooltip component
│   └── SuccessModal/        # Success feedback modal
├── utils/
│   ├── api.js               # NewsAPI integration
│   ├── auth.js              # Authentication utilities
│   └── savedArticlesAPI.js  # Saved articles management
├── assets/                  # Static assets and images
└── vendor/                  # Third-party libraries and styles
.vscode/
├── settings.json            # VS Code editor configuration
eslint.config.js             # ESLint configuration (modern flat config)
LINTING.md                   # Linting setup documentation
```

## 🎨 Design Features

### Responsive Layout

- **Desktop**: 3-column news grid
- **Tablet**: 2-column news grid
- **Mobile**: Single-column layout

### Interactive Elements

- **Hover Effects**: Card elevation and color changes
- **Loading States**: Smooth animations during API calls
- **Modal System**: Multiple close methods (X button, outside click, Escape key)

### Accessibility

- **ARIA Labels**: Screen reader friendly
- **Keyboard Navigation**: Full keyboard support
- **Focus Management**: Proper focus handling in modals
- **ESLint A11y**: Automated accessibility linting and enforcement

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Build
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint with strict warnings (CI/production)
npm run lint:fix     # Run ESLint and automatically fix issues
npm run lint:check   # Run ESLint without fixing (development friendly)
```

## 🎯 Code Quality & Development Workflow

### ESLint Configuration

The project uses modern ESLint 9.x with flat config for comprehensive code quality enforcement:

- **React Rules**: Hooks validation, JSX best practices, component standards
- **JavaScript Standards**: ES2022 features, consistent formatting, error prevention
- **Accessibility**: Basic a11y rules for better user experience
- **Import Management**: Clean import/export practices
- **Development Optimized**: Balanced rules for productivity and quality

### Development Environment

- **Auto-fix on Save**: Automatic code formatting and error correction
- **Real-time Linting**: Immediate feedback in VS Code
- **Consistent Standards**: Team-wide code style enforcement
- **Error Prevention**: Catch common mistakes before runtime

For detailed linting documentation, see [LINTING.md](./LINTING.md).

## 🌐 API Integration

### NewsAPI

- **Endpoint**: `https://newsapi.org/v2/everything`
- **Features**: Search by keyword, date filtering, source filtering
- **Rate Limits**: 1000 requests per day (free tier)

### Authentication

- **Mock Implementation**: Currently uses client-side simulation
- **Features**: User registration, login, session management
- **Future**: Will be connected to backend API in Stage 2

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 480px) /* Tablet */ @media (max-width: 768px) /* Desktop */ @media (min-width: 769px);
```

## 🚀 Deployment

The application is deployed using Netlify with automatic deployments from the `stage-1-frontend-and-api` branch.

### Deployment Process

1. Push changes to GitHub
2. Netlify automatically builds and deploys
3. Live site updates within minutes

## 🤝 Contributing

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Run linting checks**: `npm run lint:check`
4. **Fix any linting issues**: `npm run lint:fix`
5. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
6. Push to the branch (`git push origin feature/AmazingFeature`)
7. Open a Pull Request

### Code Standards

- Follow the established ESLint configuration
- Maintain consistent code formatting
- Ensure accessibility standards are met
- Write meaningful commit messages
- Test features across different screen sizes

## 📄 License

This project is part of a web development bootcamp final project.

## 👨‍💻 Author

**Halil Aybar**

- GitHub: [@halilaybarr](https://github.com/halilaybarr)

## 🙏 Acknowledgments

- **NewsAPI** for providing comprehensive news data
- **React Team** for the excellent documentation
- **Netlify** for seamless deployment experience
- **ESLint Team** for modern JavaScript linting tools
- **Vite Team** for the fast development experience

---

_This project represents Stage 1 of a full-stack news application with professional-grade code quality standards and modern development practices. Future stages will include backend API development and advanced features._
