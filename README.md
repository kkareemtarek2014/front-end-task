# Sakneen Frontend Developer Assessment

:wave: Welcome to Sakneen's Frontend Developer technical assessment! This is a comprehensive **Next.js + TypeScript** challenge designed to evaluate your skills in building modern, scalable React applications.

## Overview

You'll be building a **Real Estate Property Listings Dashboard** that showcases your proficiency in:
- **React.js/Next.js with TypeScript (TSX)**
- **Component-based architecture & reusability**
- **State management & API integration**
- **Modern CSS frameworks**
- **Performance optimization**
- **Testing best practices**

The design reference can be found [here](https://www.figma.com/file/SYWCrd5A18H44UoxJBfUW2/Frontend-task?node-id=0%3A1). You may need to sign up to inspect the Figma design.

## Core Requirements

### 🎯 **Mandatory Features**
1. **Property Listings Table** - Create a responsive table displaying real estate units
2. **Pagination** - Implement efficient pagination with proper Next.js performance patterns
3. **Sorting** - Multi-column sorting functionality
4. **Search** - Real-time search by unit ID with debouncing
5. **Image Gallery** - Lightbox component for viewing property photos
6. **Responsive Design** - Mobile-first approach using modern CSS

### 🏗️ **Architecture & Code Quality**
- **TypeScript** - Strict typing throughout the application
- **Component Reusability** - Build modular, reusable UI components
- **Clean Code** - Follow React/Next.js best practices
- **File Structure** - Organized, scalable project structure

## Technical Requirements

### 🚀 **State Management & API Integration**
- Implement **RTK Query** (Redux Toolkit Query) for API data fetching and caching
- Handle loading states, error boundaries, and optimistic updates
- Implement proper TypeScript interfaces for API responses

### 🎨 **Styling & UI**
- Use **Tailwind CSS** for styling (or demonstrate equivalent modern CSS approach)
- Create a cohesive design system with reusable components
- Ensure **accessibility compliance** (ARIA labels, keyboard navigation)
- **Cross-browser compatibility**

### ⚡ **Performance & SEO**
- Implement **Next.js performance optimizations** (Image optimization, lazy loading)
- **SEO best practices** (meta tags, structured data)
- **Code splitting** and **bundle optimization**
- Minimize re-renders and optimize component performance

### 🧪 **Testing**
- Write **unit tests** using Jest and React Testing Library
- Test component functionality, user interactions, and edge cases
- Aim for meaningful test coverage of critical functionality

## Bonus Points (Nice to Have)

- **Design System** - Create reusable UI component library
- **Advanced Testing** - Integration tests with Cypress
- **CI/CD** - GitHub Actions workflow
- **Accessibility** - WCAG compliance
- **Performance Monitoring** - Web Vitals tracking
- **GraphQL** - Demonstrate GraphQL knowledge if applicable
- **Real Estate Domain** - Show understanding of proptech concepts
## API Specification

### **Base URL**: `http://localhost:3005/listings`

The API follows [JSON Server](https://www.npmjs.com/package/json-server) specification with **50 total records**.

### **Query Parameters**
- `_page` - Page number for pagination
- `_limit` - Number of records per page
- `_sort` - Field name to sort by
- `_order` - Sort direction (`asc` or `desc`)
- `unit_id_like` - Search filter for unit ID (partial match)

### **Response Schema**
```typescript
interface PropertyListing {
  _id: string;                    // Database generated ID
  unit_id: string;               // Unique unit identifier (e.g., "A-17")
  unit_type: string;             // Property type (apartment, villa, penthouse)
  total_price: number;           // Property valuation
  for_sale: boolean;             // Availability status
  photos: string[];              // Array of image URLs
  bua?: number;                  // Built-up area (optional)
}

interface APIResponse {
  data: PropertyListing[];
  total: number;
  page: number;
  limit: number;
}
```

## Getting Started

### **Setup Instructions**
1. **Fork this repository**
2. **Clone your fork locally**
3. **Install dependencies**: `npm install` or `yarn install`
4. **Start development server**: `npm run dev` or `yarn dev`
5. **Access the application**: `http://localhost:3000`
6. **API server runs on**: `http://localhost:3005`

### **Development Workflow**
1. Create a feature branch: `feature/<your-full-name>`
2. Implement the required features
3. Write comprehensive tests
4. Ensure code quality and TypeScript compliance
5. Update this README with your assumptions and implementation notes
## Evaluation Criteria

### **Code Quality (30%)**
- TypeScript usage and type safety
- Component architecture and reusability
- Code organization and file structure
- Following React/Next.js best practices

### **Functionality (25%)**
- All core features implemented correctly
- Proper error handling and edge cases
- User experience and usability

### **Performance (20%)**
- Next.js optimizations utilized
- Efficient re-rendering patterns
- Bundle size and loading performance

### **Testing (15%)**
- Unit test coverage and quality
- Testing best practices
- Edge case handling

### **UI/UX Design (10%)**
- Responsive design implementation
- Design system consistency
- Accessibility considerations

## Submission Instructions

1. **Fork this repository**
2. **Create feature branch**: `feature/<your-full-name>`
3. **Implement the solution**
4. **Deploy your application** (Vercel, Netlify, or similar)
5. **Open a Pull Request** to this repository
6. **Update this README** with:
   - Your deployment URL
   - Your implementation approach
   - Any assumptions made
   - Instructions to run tests
   - Time spent on the task

## Notes & Tips

- **Quality over quantity** - Focus on clean, well-tested code rather than all bonus features
- **Document your decisions** - Explain your architectural choices
- **Show your React/Next.js expertise** - Demonstrate knowledge of modern patterns
- **Performance matters** - Think about real-world usage scenarios
- **Make it maintainable** - Write code that a team can work with

## Example Implementation Checklist

### ✅ **Core Features**
- [ ] Property listings table with responsive design
- [ ] Pagination with proper state management
- [ ] Multi-column sorting functionality
- [ ] Real-time search with debouncing
- [ ] Image lightbox with navigation
- [ ] TypeScript interfaces for all data structures

### ✅ **Technical Implementation**
- [ ] RTK Query for API integration and caching
- [ ] Tailwind CSS for styling
- [ ] Component reusability and clean architecture
- [ ] Error boundaries and loading states
- [ ] SEO optimization with Next.js features
- [ ] Performance optimizations (memoization, lazy loading)

### ✅ **Testing**
- [ ] Unit tests for components
- [ ] Custom hooks testing
- [ ] User interaction testing
- [ ] Edge cases and error scenarios

---

**Good luck! We're excited to see your implementation.** 🚀