# Plusomar Website - Omar AlQabandi

A modern, responsive website built with React, TypeScript, and shadcn/ui that replicates the design from [plusomar.com](https://plusomar.com).

## Features

### Responsive Navbar
- **Desktop**: Fixed navbar at the top of the screen
- **Mobile/Tablet**: Fixed navbar at the bottom of the screen
- **Burger Menu**: Located on the left side with navigation items
- **Logo**: Centered "PLUSOMAR" branding
- **Social Icons**: Instagram, Twitter, and LinkedIn icons on the right

### Navigation Menu
When clicking the burger menu, a modal dialog appears with:
- Home
- Photography
- Animation
- Contact Me button

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **shadcn/ui** for modern UI components
- **Radix UI** for accessible primitives
- **Lucide React** for icons

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Responsive Design

The navbar automatically adapts based on screen size:

- **Desktop (>900px)**: Navbar is fixed to the top
- **Mobile/Tablet (≤900px)**: Navbar is fixed to the bottom

This provides optimal user experience across all devices, with easy thumb access on mobile devices.

## Customization

### Colors and Styling
The project uses CSS custom properties and Tailwind CSS. You can customize colors in:
- `src/index.css` - CSS custom properties for the design system
- `tailwind.config.js` - Tailwind configuration

### Adding Navigation Items
Edit the `menuItems` array in `src/components/Navbar.tsx` to add or modify navigation items.

### Social Media Links
Update the `socialLinks` array in `src/components/Navbar.tsx` to change social media icons and links.

## Project Structure

```
src/
├── components/
│   ├── ui/           # shadcn/ui components
│   └── Navbar.tsx    # Main navbar component
├── lib/
│   └── utils.ts      # Utility functions
├── App.tsx           # Main app component
├── main.tsx          # React entry point
└── index.css         # Global styles
```

## License

This project is created as a portfolio demonstration inspired by the design of plusomar.com.
