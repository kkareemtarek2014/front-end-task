# Implementation Guide for Candidates

## Quick Start

1. **Fork and Clone**
   ```bash
   git clone <your-fork-url>
   cd front-end-task
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start Development**
   ```bash
   npm run dev
   # This starts both the JSON server (port 3005) and Next.js (port 3000)
   ```

## Key Implementation Areas

### 1. State Management (RTK Query)
Create `src/store/api.ts`:
```typescript
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PropertyListing } from '@/types'

export const listingsApi = createApi({
  reducerPath: 'listingsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3005/' }),
  endpoints: (builder) => ({
    getListings: builder.query<{data: PropertyListing[], total: number}, {
      page?: number
      limit?: number
      sort?: string
      order?: 'asc' | 'desc'
      unit_id_like?: string
    }>({
      query: (params) => ({
        url: 'listings',
        params,
      }),
    }),
  }),
})

export const { useGetListingsQuery } = listingsApi
```

### 2. Component Structure
- **PropertyTable** - Main table component
- **Pagination** - Reusable pagination component
- **SearchBar** - Debounced search input
- **Lightbox** - Image gallery modal
- **LoadingSpinner** - Loading state component

### 3. Custom Hooks
- **useDebounce** - For search input debouncing
- **usePagination** - For pagination logic
- **useSort** - For table sorting

### 4. Testing Strategy
- **Unit Tests**: Component logic and rendering
- **Integration Tests**: User interactions and data flow
- **Custom Hook Tests**: Hook behavior and state management

## Performance Optimizations

1. **React.memo()** for component memoization
2. **useMemo()** and **useCallback()** for expensive operations
3. **Next.js Image** component for optimized images
4. **Lazy loading** for lightbox component
5. **RTK Query caching** for API responses

## Accessibility Checklist

- [ ] Proper ARIA labels
- [ ] Keyboard navigation support
- [ ] Screen reader compatibility
- [ ] Color contrast compliance
- [ ] Focus management in modals

## SEO Optimizations

- [ ] Next.js Head component for meta tags
- [ ] Structured data for property listings
- [ ] Semantic HTML structure
- [ ] Alt text for images

## Common Pitfalls to Avoid

1. **Don't** use `any` types - be specific with TypeScript
2. **Don't** forget error boundaries for API failures
3. **Don't** skip loading states for better UX
4. **Don't** ignore responsive design requirements
5. **Don't** forget to test edge cases

## Deployment Checklist

- [ ] Environment variables configured
- [ ] Build process successful
- [ ] Tests passing
- [ ] TypeScript compilation without errors
- [ ] Performance metrics acceptable
- [ ] Accessibility standards met

## Evaluation Focus Areas

The evaluators will particularly focus on:

1. **Code Quality**: Clean, readable, maintainable code
2. **TypeScript Usage**: Proper typing and interfaces
3. **Component Design**: Reusability and separation of concerns
4. **State Management**: Effective use of RTK Query
5. **Testing**: Comprehensive and meaningful tests
6. **Performance**: Optimized rendering and data fetching
7. **User Experience**: Responsive, accessible, intuitive design

Good luck with your implementation! 🚀
