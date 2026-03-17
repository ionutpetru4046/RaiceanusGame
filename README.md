# Poker Website - Raiceanus Game

A modern, full-featured poker website built with Next.js 15, TypeScript, Shadcn UI, Tailwind CSS, Framer Motion, and Supabase.

## Features

- 🃏 **Modern Poker Website** - Complete poker platform with tournaments, games, and content
- 🎨 **Beautiful UI** - Shadcn UI components with Tailwind CSS styling
- ✨ **Smooth Animations** - Framer Motion for engaging user experiences
- 🖼️ **Hero Background** - Full-screen background image carousel on homepage
- 🔐 **Authentication** - Supabase Auth for user management
- 📝 **Content Management** - Blog posts, videos, and comments system
- 📱 **Responsive Design** - Mobile-first approach
- 🎯 **Admin Dashboard** - Content management interface

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Shadcn UI
- **Animations:** Framer Motion
- **Backend:** Supabase (Database + Auth)
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account (optional for development)

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Set up Supabase (optional):**

   The app will work with placeholder Supabase credentials for development, but you'll see console warnings. For full functionality:

   a. Create a new project at [supabase.com](https://supabase.com)

   b. Copy your project URL and anon key from the project settings

   c. Update the `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_actual_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_actual_supabase_anon_key
   ```

   d. Configure authentication in Supabase:
      - Go to Authentication > Settings in your Supabase dashboard
      - Add your site URL to "Site URL": `http://localhost:3000` (for development)
      - Add redirect URLs: `http://localhost:3000/auth/callback`
      - Enable email confirmations if desired
      - Configure OAuth providers (Google, GitHub) if you want social login

   e. **After login, users are automatically redirected to the admin dashboard** (`/admin`)

4. **Customize the hero background carousel (optional):**

   The homepage features a rotating carousel of 4 background images that change every 4 seconds.

   **To modify the carousel:**

   a. Open `src/app/page.tsx`
   b. Find the `backgroundImages` array
   c. Replace URLs with your preferred images

   ```tsx
   const backgroundImages = [
     "your-image-1.jpg",
     "your-image-2.jpg",
     "your-image-3.jpg",
     "your-image-4.jpg"
   ];
   ```

   **To adjust timing:**
   - Change the `4000` value in useEffect to modify seconds between transitions

   **Recommended image sources:**
   - Unsplash (poker, casino, cards themes)
   - Pexels (free stock photos)
   - Your own hosted images

   **Image specifications:**
   - High resolution (1920x1080 or higher)
   - Poker/casino themed for best results
   - Dark or muted colors work best with white text overlay

3. **Set up the database:**

   Run the SQL migrations in your Supabase SQL editor:

   ```sql
   -- Create posts table
   CREATE TABLE posts (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     title TEXT NOT NULL,
     content TEXT NOT NULL,
     excerpt TEXT,
     slug TEXT UNIQUE NOT NULL,
     published BOOLEAN DEFAULT false,
     published_at TIMESTAMPTZ,
     author_id UUID REFERENCES auth.users(id),
     created_at TIMESTAMPTZ DEFAULT NOW(),
     updated_at TIMESTAMPTZ DEFAULT NOW(),
     tags TEXT[],
     featured_image TEXT
   );

   -- Create videos table
   CREATE TABLE videos (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     title TEXT NOT NULL,
     description TEXT,
     youtube_id TEXT NOT NULL,
     thumbnail_url TEXT,
     published BOOLEAN DEFAULT false,
     published_at TIMESTAMPTZ,
     author_id UUID REFERENCES auth.users(id),
     created_at TIMESTAMPTZ DEFAULT NOW(),
     updated_at TIMESTAMPTZ DEFAULT NOW(),
     tags TEXT[]
   );

   -- Create comments table
   CREATE TABLE comments (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     content TEXT NOT NULL,
     author_id UUID REFERENCES auth.users(id),
     post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
     video_id UUID REFERENCES videos(id) ON DELETE CASCADE,
     parent_id UUID REFERENCES comments(id) ON DELETE CASCADE,
     created_at TIMESTAMPTZ DEFAULT NOW(),
     updated_at TIMESTAMPTZ DEFAULT NOW()
   );

   -- Create tournaments table
   CREATE TABLE tournaments (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     name TEXT NOT NULL,
     description TEXT,
     start_date TIMESTAMPTZ NOT NULL,
     end_date TIMESTAMPTZ NOT NULL,
     buy_in INTEGER NOT NULL,
     max_players INTEGER NOT NULL,
     current_players INTEGER DEFAULT 0,
     status TEXT CHECK (status IN ('upcoming', 'active', 'completed', 'cancelled')) DEFAULT 'upcoming',
     created_at TIMESTAMPTZ DEFAULT NOW(),
     updated_at TIMESTAMPTZ DEFAULT NOW()
   );

   -- Enable Row Level Security
   ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
   ALTER TABLE videos ENABLE ROW LEVEL SECURITY;
   ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
   ALTER TABLE tournaments ENABLE ROW LEVEL SECURITY;

   -- Create policies
   CREATE POLICY "Public posts are viewable by everyone" ON posts
     FOR SELECT USING (published = true);

   CREATE POLICY "Users can view their own posts" ON posts
     FOR SELECT USING (auth.uid() = author_id);

   CREATE POLICY "Users can insert their own posts" ON posts
     FOR INSERT WITH CHECK (auth.uid() = author_id);

   CREATE POLICY "Users can update their own posts" ON posts
     FOR UPDATE USING (auth.uid() = author_id);

   -- Similar policies for videos, comments, and tournaments...
   ```

4. **Run the development server:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

## Project Structure

```
src/
├── app/                 # Next.js app router pages
│   ├── (auth)/         # Authentication pages
│   ├── admin/          # Admin dashboard
│   ├── blog/           # Blog pages
│   ├── videos/         # Video gallery
│   ├── tournaments/    # Tournament pages
│   └── ...
├── components/         # Reusable components
│   ├── ui/            # Shadcn UI components
│   └── ...
├── lib/               # Utility functions and configurations
├── types/             # TypeScript type definitions
└── ...
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Pages Included

1. **Homepage** - Hero section with featured content
2. **About** - Poker history and site information
3. **Games** - Poker variants and rules
4. **Tournaments** - Tournament schedules and registration
5. **Blog** - Articles with filtering and search
6. **Videos** - Embedded video gallery
7. **Contact** - Contact form and information
8. **Admin Dashboard** - Content management interface

## Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/raiceanus-game)

Remember to add your environment variables in Vercel dashboard.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
