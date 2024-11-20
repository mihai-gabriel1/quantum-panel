# 🚀 Quantum Panel Pro

[![React](https://img.shields.io/badge/React-18.3-blue.svg)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-blue.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4-blue.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)

A modern and feature-rich admin dashboard template built with React 18, Tailwind CSS, and Vite. Includes both dashboard and landing page with dark/light mode support.

## 🌟 Live Demo

- [Dashboard Demo](https://quantum-panel.netlify.app/dashboard)
- [Landing Page](https://quantum-panel.netlify.app/)

## ⚡ Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/quantum-panel-pro.git

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🎯 Features

- ✨ Modern Design System
- 🌓 Dark/Light Mode with System Preference Detection
- 📱 Fully Responsive Layout
- 🎨 40+ Pre-built Components
- 📊 Interactive Analytics Dashboard
- 🚀 Fast Performance with Vite
- 🎯 Professional Landing Page
- 🔒 Authentication Ready

## 🛠️ Tech Stack

- **Framework:** React 18.3
- **Styling:** TailwindCSS 3.4
- **Animations:** Framer Motion 11
- **Routing:** React Router 6
- **Build Tool:** Vite 5.4
- **Icons:** Lucide Icons
- **Code Quality:** ESLint

## 📦 Project Structure

```
quantum-panel/
├── src/
│   ├── components/
│   │   ├── dashboard/    # Dashboard components
│   │   ├── landing/      # Landing page components
│   │   └── shared/       # Shared components
│   ├── layouts/          # Layout components
│   ├── pages/           
│   └── App.jsx
├── public/               
└── package.json
```

## 🎨 Theme Customization

The dark/light mode system is implemented using cookies for persistence and system preference detection:

```javascript
// Toggle theme
const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    setCookie('darkMode', !isDarkMode);
};

// Check system preference
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
```

## 📱 Responsive Design

Built with mobile-first approach using Tailwind breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📦 Components

Key components included:
- Dashboard Analytics
- User Management System
- Interactive Charts
- Navigation System
- Notification System
- Authentication Forms
- Landing Page Sections
- Data Tables

## 🚀 Deployment

1. Build your project:
```bash
npm run build
```

2. Deploy the `dist` folder to your preferred platform:
- Netlify
- Vercel
- GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

Need help? Email support@quantumpanel.dev or open an issue in the repository.

---

Built with ❤️ using [React](https://reactjs.org/) and [Vite](https://vitejs.dev/)
