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

## 🛠️ Technology Stack

### Frontend

- **React 18.2.0** - Modern UI library with functional components and hooks
- **React Router DOM 6.8.0** - Client-side routing
- **Vite 4.1.0** - Fast build tool and development server
- **CSS3** - Modern styling with Flexbox and CSS Grid
- **BEM Methodology** - Consistent CSS class naming convention

### APIs & Services

- **NewsAPI** - Real-time news data from multiple sources
- **Netlify** - Frontend hosting and deployment

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

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

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
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
│   └── SavedNews/           # Saved articles page
├── utils/
│   ├── api.js               # NewsAPI integration
│   ├── auth.js              # Authentication utilities
│   └── savedArticlesAPI.js  # Saved articles management
└── assets/                  # Static assets and images
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

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Build
npm run build        # Build for production
npm run preview      # Preview production build

# Linting
npm run lint         # Run ESLint
```

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

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is part of a web development bootcamp final project.

## 👨‍💻 Author

**Halil Aybar**

- GitHub: [@halilaybarr](https://github.com/halilaybarr)

## 🙏 Acknowledgments

- **NewsAPI** for providing comprehensive news data
- **React Team** for the excellent documentation
- **Netlify** for seamless deployment experience

---

_This project represents Stage 1 of a full-stack news application. Future stages will include backend API development and advanced features._
