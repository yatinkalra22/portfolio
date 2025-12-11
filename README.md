# Yatin Kalra - Portfolio Website

A stunning, animation-rich portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features a beautiful dark/light theme toggle and smooth scroll animations.

## Features

- **Modern Tech Stack**: Built with Next.js 16, React 19, TypeScript, and Tailwind CSS
- **Stunning Animations**: Powered by Framer Motion for buttery-smooth animations
- **Dark/Light Theme**: Seamless theme switching with smooth transitions
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Particle Effects**: Dynamic particle background in the hero section
- **Interactive UI**: Hover effects, scroll animations, and interactive components
- **Optimized Performance**: Fast loading times with Next.js optimization

## Sections

1. **Hero** - Eye-catching introduction with particle effects and typewriter animation
2. **About** - Professional summary with animated highlights
3. **Experience** - Timeline view of work history with scroll animations
4. **Skills** - Interactive skill cards organized by category
5. **Education** - Academic background with certifications and achievements
6. **Contact** - Multiple ways to get in touch with animated social links

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Update Your Information

Edit the data in `/lib/data.ts` to customize:
- Personal information (name, email, phone, etc.)
- Professional summary
- Work experience
- Skills
- Education
- Certifications and achievements

### Modify Colors

Edit `/tailwind.config.ts` to customize the color scheme and animations.

### Change Theme Defaults

The theme system is in `/components/ThemeProvider.tsx` - you can modify the default theme or add more theme options.

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page component
├── components/
│   ├── About.tsx             # About section
│   ├── Contact.tsx           # Contact section
│   ├── Education.tsx         # Education section
│   ├── Experience.tsx        # Experience timeline
│   ├── Footer.tsx            # Footer component
│   ├── Hero.tsx              # Hero section
│   ├── Navigation.tsx        # Navigation bar
│   ├── ParticleBackground.tsx # Particle effect
│   ├── Skills.tsx            # Skills section
│   └── ThemeProvider.tsx     # Theme context provider
├── lib/
│   └── data.ts               # Portfolio data
└── public/                   # Static assets
```

## Technologies Used

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Vercel (recommended)

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live in minutes!

### Other Platforms

This is a standard Next.js app and can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Google Cloud Platform
- Digital Ocean

## Performance Tips

- Images are optimized with Next.js Image component (if you add images)
- Framer Motion animations use GPU acceleration
- Code splitting is automatic with Next.js
- CSS is purged in production builds

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

Yatin Rajkumar Kalra
- Email: yatin.kalra940@gmail.com
- LinkedIn: [linkedin.com/in/yatin-rajkumar-kalra](https://www.linkedin.com/in/yatin-rajkumar-kalra)
- GitHub: [github.com/yatinkalra22](https://github.com/yatinkalra22)

---

Built with ❤️ using Next.js, TypeScript, and Framer Motion
