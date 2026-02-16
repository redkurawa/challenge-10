# 📝 Blog Post Application

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/EK148hCW)

A modern, responsive blog post application built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS**. This application allows users to browse blog posts, search for content, view post details, and authenticate with login/signup functionality.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Pages & Routes](#-pages--routes)
- [Components](#-components)
- [Custom Hooks](#-custom-hooks)
- [API Integration](#-api-integration)
- [Styling](#-styling)
- [Deployment](#-deployment)
- [Environment Variables](#-environment-variables)
- [API Documentation](#-api-documentation)
- [UI Design Reference](#-ui-design-reference)

---

## ✨ Features

### Core Features

- **🏠 Home Page** - Displays recommended blog posts and most liked posts
- **🔍 Search Page** - Search functionality to find specific blog posts
- **📄 Detail Page** - View full blog post content with comments
- **🔐 Authentication** - User login and registration system
- **📱 Responsive Design** - Fully responsive across all devices

### UI Components

- **Post Cards** - Display blog post previews with images, tags, author info
- **Most Liked Cards** - Sidebar showing popular posts
- **Pagination** - Navigate through multiple pages of posts
- **Search Bar** - Real-time search functionality
- **Comment Section** - View comments on blog posts
- **Avatar System** - Dynamic avatar images for authors

### Technical Features

- **Server-Side Rendering** - Next.js App Router with SSR
- **Data Fetching** - React Query for efficient data management
- **Type Safety** - Full TypeScript implementation
- **Modern Styling** - Tailwind CSS v4 with custom design tokens

---

## 🛠 Tech Stack

| Technology                                    | Version | Purpose                         |
| --------------------------------------------- | ------- | ------------------------------- |
| [Next.js](https://nextjs.org/)                | 15.3.4  | React framework with App Router |
| [React](https://react.dev/)                   | 19.0.0  | UI library                      |
| [TypeScript](https://www.typescriptlang.org/) | 5.x     | Type safety                     |
| [Tailwind CSS](https://tailwindcss.com/)      | 4.x     | Utility-first CSS               |
| [React Query](https://tanstack.com/query)     | 5.80.10 | Data fetching & caching         |
| [Axios](https://axios-http.com/)              | 1.10.0  | HTTP client                     |
| [clsx](https://github.com/lukeed/clsx)        | 2.1.1   | Conditional classNames          |

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Turbopack** - Fast bundler (dev mode)

---

## 📁 Project Structure

```
challenge-10/
├── public/
│   └── img/                    # Static images & icons
│       ├── CommentIcon.svg
│       ├── iconface.png
│       ├── LikeIcon.svg
│       ├── Line13.png
│       ├── Line13.svg
│       ├── NextIcon.svg
│       ├── PrevIcon.svg
│       ├── search-md.png
│       └── yourlogo.png
│
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Global styles & CSS variables
│   │   ├── layout.tsx          # Root layout with Navbar & Footer
│   │   ├── page.tsx            # Home page entry
│   │   │
│   │   ├── lib/
│   │   │   └── api.ts          # API configuration & auth functions
│   │   │
│   │   ├── login/
│   │   │   └── page.tsx        # Login page
│   │   │
│   │   ├── pageSearch/
│   │   │   └── page.tsx        # Search results page
│   │   │
│   │   ├── posts/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx    # Dynamic post detail page
│   │   │   └── page/
│   │   │       └── [page]/
│   │   │           └── page.tsx # Paginated posts page
│   │   │
│   │   ├── signup/
│   │   │   └── page.tsx        # Registration page
│   │   │
│   │   └── utils/
│   │       └── formatDate.ts   # Date formatting utility
│   │
│   ├── components/
│   │   ├── FormField.tsx       # Reusable form input component
│   │   │
│   │   ├── cards/
│   │   │   ├── MostLikedCard.tsx  # Most liked post card
│   │   │   └── PostCard.tsx       # Main post card component
│   │   │
│   │   ├── layouts/
│   │   │   ├── CommentList.tsx    # Comments display
│   │   │   ├── DetailContent.tsx  # Post detail content
│   │   │   ├── Footer.tsx         # Site footer
│   │   │   ├── FormLayout.tsx     # Form wrapper
│   │   │   ├── Navbar.tsx         # Navigation bar
│   │   │   └── SearchBar.tsx      # Search input component
│   │   │
│   │   ├── pages/
│   │   │   ├── detailpage/
│   │   │   │   ├── detailpage.tsx # Detail page component
│   │   │   │   └── index.ts
│   │   │   ├── homepage/
│   │   │   │   └── page.tsx       # Home page component
│   │   │   └── pageSearch/
│   │   │       └── page.tsx       # Search page component
│   │   │
│   │   └── ui/
│   │       ├── AvatarImage.tsx    # Avatar display
│   │       ├── CommentCount.tsx   # Comment count badge
│   │       ├── DateAuthor.tsx     # Author & date display
│   │       ├── LikeComment.tsx    # Like & comment buttons
│   │       ├── Pagination.tsx     # Page navigation
│   │       └── PostTags.tsx       # Tag badges
│   │
│   ├── hooks/
│   │   ├── useAvatarUrl.ts        # Avatar URL hook
│   │   └── useFetchData.ts        # Data fetching hook
│   │
│   └── interfaces/
│       └── interface.ts           # TypeScript interfaces
│
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd challenge-10
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_API_URL=https://blogger-wph-api-production.up.railway.app
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📜 Available Scripts

| Command         | Description                             |
| --------------- | --------------------------------------- |
| `npm run dev`   | Start development server with Turbopack |
| `npm run build` | Build the application for production    |
| `npm run start` | Start the production server             |
| `npm run lint`  | Run ESLint for code linting             |

---

## 📄 Pages & Routes

| Route                   | Description                                   | File                                                                       |
| ----------------------- | --------------------------------------------- | -------------------------------------------------------------------------- |
| `/`                     | Home page with recommended & most liked posts | [`src/app/page.tsx`](src/app/page.tsx)                                     |
| `/login`                | User login page                               | [`src/app/login/page.tsx`](src/app/login/page.tsx)                         |
| `/signup`               | User registration page                        | [`src/app/signup/page.tsx`](src/app/signup/page.tsx)                       |
| `/posts/[id]`           | Dynamic post detail page                      | [`src/app/posts/[id]/page.tsx`](src/app/posts/[id]/page.tsx)               |
| `/posts/page/[page]`    | Paginated posts listing                       | [`src/app/posts/page/[page]/page.tsx`](src/app/posts/page/[page]/page.tsx) |
| `/pageSearch?query=...` | Search results page                           | [`src/app/pageSearch/page.tsx`](src/app/pageSearch/page.tsx)               |

---

## 🧩 Components

### Layout Components

#### [`Navbar`](src/components/layouts/Navbar.tsx)

- Site logo and branding
- Search bar integration
- Login/Register buttons

#### [`Footer`](src/components/layouts/Footer.tsx)

- Site footer with copyright

#### [`SearchBar`](src/components/layouts/SearchBar.tsx)

- Search input with form submission
- Redirects to search results page

### Card Components

#### [`PostCard`](src/components/cards/PostCard.tsx)

- Blog post preview card
- Displays: image, title, tags, content preview, author, date, likes, comments
- Links to detail page

#### [`MostLikedCard`](src/components/cards/MostLikedCard.tsx)

- Compact card for sidebar
- Shows popular posts by likes

### UI Components

#### [`Pagination`](src/components/ui/Pagination.tsx)

- Page navigation with Previous/Next buttons
- Dynamic page number display
- Active page highlighting

#### [`AvatarImage`](src/components/ui/AvatarImage.tsx)

- User avatar display with fallback

#### [`LikeComment`](src/components/ui/LikeComment.tsx)

- Like and comment count display

#### [`PostTags`](src/components/ui/PostTags.tsx)

- Tag badges for posts

#### [`DateAuthor`](src/components/ui/DateAuthor.tsx)

- Author name and formatted date

---

## 🪝 Custom Hooks

### [`useFetchData`](src/hooks/useFetchData.ts)

Generic data fetching hook with React Query integration.

```typescript
const { data, total, loading, error } = useFetchData<DataType>('/endpoint');
```

**Parameters:**

- `endpoint` - API endpoint path
- `skip` - Optional flag to skip fetching

**Returns:**

- `data` - Fetched data
- `total` - Total count for pagination
- `loading` - Loading state
- `error` - Error object if any

### [`useAvatarUrl`](src/hooks/useAvatarUrl.ts)

Hook for fetching user avatar URLs.

```typescript
const { avatarSrc } = useAvatarUrl(authorId);
```

---

## 🔌 API Integration

### Base URL

```
https://blogger-wph-api-production.up.railway.app
```

### Endpoints Used

| Endpoint              | Method | Description             |
| --------------------- | ------ | ----------------------- |
| `/posts/recommended`  | GET    | Get recommended posts   |
| `/posts/most-liked`   | GET    | Get most liked posts    |
| `/posts/:id`          | GET    | Get single post by ID   |
| `/posts/:id/comments` | GET    | Get comments for a post |
| `/posts/search`       | GET    | Search posts by query   |
| `/auth/login`         | POST   | User login              |
| `/auth/register`      | POST   | User registration       |

### API Configuration

See [`src/app/lib/api.ts`](src/app/lib/api.ts):

```typescript
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://blogger-wph-api-production.up.railway.app',
  headers: {
    'Content-Type': 'application/json',
  },
});
```

---

## 🎨 Styling

### Tailwind CSS Configuration

The project uses **Tailwind CSS v4** with custom design tokens defined in [`src/app/globals.css`](src/app/globals.css) and [`tailwind.config.ts`](tailwind.config.ts).

### Custom CSS Variables

#### Colors

```css
/* Neutral Scale */
--neutral-25: #fdfdfd;
--neutral-50: #fafafa;
--neutral-100: #f5f5f5;
--neutral-200: #e9eaeb;
--neutral-300: #d5d7da;
--neutral-400: #a4a7ae;
--neutral-500: #717680;
--neutral-600: #535862;
--neutral-700: #414651;
--neutral-800: #252b37;
--neutral-900: #181d27;
--neutral-950: #0a0d12;

/* Primary Colors */
--primary-100: #e5f4fb;
--primary-200: #6fcfff;
--primary-300: #0093dd;
--primary-400: #050a1b;
```

#### Typography

```css
/* Font Family */
--font-family-inter: 'Inter', sans-serif;

/* Font Weights */
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extrabold: 800;

/* Display Sizes */
--text-display-3xl: 3.75rem; /* 60px */
--text-display-2xl: 3rem; /* 48px */
--text-display-xl: 2.5rem; /* 40px */
--text-display-lg: 2.25rem; /* 36px */
--text-display-md: 2rem; /* 32px */
--text-display-sm: 1.75rem; /* 28px */
--text-display-xs: 1.5rem; /* 24px */
```

### Usage Examples

```tsx
// Typography
<h1 className="text-display-lg font-bold">Title</h1>
<p className="text-sm text-neutral-600">Description</p>

// Colors
<button className="bg-primary-300 text-neutral-25">Button</button>
<div className="border border-neutral-200">Card</div>

// Responsive
<div className="grid grid-cols-1 md:grid-cols-3">Content</div>
```

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Set Environment Variables**

   In Vercel dashboard, add:

   ```
   NEXT_PUBLIC_API_URL=https://blogger-wph-api-production.up.railway.app
   ```

4. **Deploy**

   Vercel will automatically deploy on every push to main branch.

### Manual Deployment

```bash
# Build the application
npm run build

# Start production server
npm run start
```

### Deployment Checklist

- [ ] Environment variables configured
- [ ] Build succeeds without errors
- [ ] All pages render correctly
- [ ] Images load properly
- [ ] API calls work in production
- [ ] Responsive design verified

---

## 🔐 Environment Variables

| Variable              | Description          | Required |
| --------------------- | -------------------- | -------- |
| `NEXT_PUBLIC_API_URL` | Base URL for the API | Yes      |

### Example `.env.local`

```env
NEXT_PUBLIC_API_URL=https://blogger-wph-api-production.up.railway.app
```

---

## 📚 API Documentation

Full API documentation is available at:
**[https://blogger-wph-api-production.up.railway.app/api/](https://blogger-wph-api-production.up.railway.app/api/)**

### TypeScript Interfaces

See [`src/interfaces/interface.ts`](src/interfaces/interface.ts):

```typescript
// Post Interface
interface PageInteface {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  imageUrl: string;
  likes: number;
  comments: number;
  tags: string[];
  author: {
    id: number;
    name: string;
    email: string;
  };
}

// Comment Interface
interface InterfaceComment {
  id: number;
  content: string;
  createdAt: string;
  author: {
    id: number;
    name: string;
    headline: string;
    avatarUrl: string;
  };
}

// User Interface
interface UserInterface {
  id: number;
  name: string;
  email: string;
  headline: string;
  avatarUrl: string;
}
```

---

## 🎨 UI Design Reference

This project implements the following Figma design:

**[Blog Design - Figma](https://www.figma.com/design/vQHN3uPFiXfm8EYye431jN/Blog--Copy-?node-id=17488-16700&p=f&t=J4ZJzMMU48EI0YNn-0)**

### Design Requirements Implemented

- ✅ Home page with recommended posts
- ✅ Search page with query results
- ✅ Detail page with comments
- ✅ Responsive layout
- ✅ Proper typography scale
- ✅ Color system implementation

---

## 📊 Evaluation Criteria

This project is evaluated based on:

1. **Project Structure & App Router Conventions**
   - Proper use of `page.tsx`, `layout.tsx`
   - Dynamic routes with `[id]` and `[page]`

2. **Routing & Data Fetching**
   - Server Components for data fetching
   - Client Components for interactivity

3. **Next.js Feature Utilization**
   - `<Image>` component for optimized images
   - Error handling

4. **Code Clarity & Best Practices**
   - Clean code structure
   - Clear naming conventions
   - TypeScript best practices

5. **Deployment**
   - Successful deployment to Vercel
   - Fully functional in production

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is part of a coding challenge assignment.

---

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Query Documentation](https://tanstack.com/query/latest/docs)
- API provided by the challenge organizers

---

🎉 **Congratulations on working on this assignment!** Utilize the _playground_ feature in Figma to help you understand how the design should look on various devices. Keep experimenting and don't hesitate to look for references if you encounter difficulties. You can definitely produce great work! 🚀 Keep up the spirit, cheers!! 🎈
