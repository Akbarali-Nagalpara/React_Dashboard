# Dashboard Application

A modern, responsive dashboard application built with React, featuring real-time data visualization, analytics, and performance metrics.

## 🚀 Features

- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile devices
- **Real-time Updates**: Live clock and data refresh capabilities
- **Performance Metrics**: Key performance indicators with trend analysis
- **Data Visualization**: Interactive charts using Recharts library
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML
- **Type Safety**: PropTypes validation for all components
- **Professional Code**: Industry-standard practices with JSDoc comments

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Dependencies

### Core
- **React** (19.2.0): UI library
- **React DOM** (19.2.0): React rendering for web

### UI & Icons
- **react-icons** (^5.4.0): Icon library
- **recharts** (^2.15.0): Charting library

### Development
- **Vite** (^7.2.4): Build tool and dev server
- **@vitejs/plugin-react** (^4.3.4): React plugin for Vite
- **prop-types** (^15.8.1): Runtime type checking

## 🏗️ Project Structure

```
Dashboard/
├── src/
│   ├── components/          # React components
│   │   ├── Sidebar.jsx
│   │   ├── Header.jsx
│   │   ├── StatCard.jsx
│   │   ├── PlatformCard.jsx
│   │   ├── DealRow.jsx
│   │   ├── RevenueCard.jsx
│   │   ├── DarkStatCard.jsx
│   │   ├── PinkCard.jsx
│   │   ├── SalesCard.jsx
│   │   └── ChartCard.jsx
│   ├── constants/           # Application constants
│   │   └── index.js
│   ├── utils/               # Utility functions
│   │   └── formatters.js
│   ├── App.jsx              # Main application component
│   ├── App.css              # Global styles
│   ├── main.jsx             # Application entry point
│   └── index.css            # Base styles
├── public/                  # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
└── eslint.config.js         # ESLint configuration
```

## 🎨 Component Architecture

### Layout Components
- **App**: Main application container managing global state
- **Sidebar**: Navigation menu with collapsible mobile view
- **Header**: Top bar with search, actions, and user info

### Data Display Components
- **StatCard**: Displays individual metrics with trend indicators
- **PlatformCard**: Shows platform-specific revenue data
- **DealRow**: Represents individual deals in a list
- **RevenueCard**: Main revenue display card
- **DarkStatCard**: Dark-themed statistics card
- **PinkCard**: Platform value breakdown card
- **SalesCard**: Sales dynamics visualization
- **ChartCard**: Revenue chart with Recharts

## 💡 Code Standards

### Component Structure
All components follow this structure:
1. JSDoc documentation
2. Import statements (ordered: React, libraries, components, utils, styles)
3. Component definition with PropTypes
4. PropTypes validation
5. Default props (if needed)
6. Export statement

### Best Practices
- **Semantic HTML**: Use proper HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`)
- **Accessibility**: All interactive elements have ARIA labels
- **Performance**: `useCallback` and `useMemo` for optimization
- **Maintainability**: Constants extracted to separate files
- **Reusability**: Utility functions for common operations
- **Type Safety**: PropTypes for all component props

### Code Style
- Named exports for utilities, default exports for components
- Arrow functions for components
- Descriptive variable and function names
- Comments for complex logic
- Consistent formatting with 2-space indentation

## 🔧 Utility Functions

### Formatters (`src/utils/formatters.js`)
- `formatCurrency(amount)`: Format numbers as USD currency
- `formatNumber(value)`: Format numbers with thousands separator
- `formatPercentage(percentage, showSign)`: Format percentage values
- `formatDate(date, options)`: Format dates using Intl.DateTimeFormat
- `truncateText(text, maxLength)`: Truncate long text with ellipsis
- `getInitials(name)`: Extract initials from full names

## 📊 Constants

All magic numbers and repeated values are centralized in `src/constants/index.js`:
- Navigation menu items
- Mock data (users, deals, platforms)
- Statistics configuration
- App configuration
- Timer intervals
- Chart configuration

## 🎯 Performance Optimizations

1. **React Hooks**: `useCallback` and `useMemo` prevent unnecessary re-renders
2. **Component Memoization**: Expensive calculations are memoized
3. **Event Handler Optimization**: Callbacks are defined once and reused
4. **Lazy Loading**: Components can be lazy-loaded when needed
5. **Code Splitting**: Vite automatically handles code splitting

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🚀 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## 🧪 Development Guidelines

### Adding a New Component

1. Create component file in `src/components/`
2. Add JSDoc documentation
3. Import PropTypes
4. Define component with props
5. Add PropTypes validation
6. Create corresponding CSS file
7. Import and use in parent component

### Adding New Constants

1. Open `src/constants/index.js`
2. Add your constant with descriptive name
3. Export it for use in components

### Adding Utility Functions

1. Open or create file in `src/utils/`
2. Add JSDoc documentation
3. Export function
4. Import where needed

## 🤝 Contributing

1. Follow the existing code style
2. Add PropTypes to all components
3. Include JSDoc comments
4. Use semantic HTML
5. Add ARIA labels for accessibility
6. Test responsive behavior
7. Keep components small and focused

## 📝 License

This project is private and proprietary.

## 👥 Team

Developed with industry best practices and modern React patterns.

---

**Built with** ❤️ **using React, Vite, and modern web technologies**
