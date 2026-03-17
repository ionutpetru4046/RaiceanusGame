"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const blogPosts = [
  {
    id: 1,
    title: "Mastering Texas Hold'em: Essential Strategies for Beginners",
    excerpt: "Learn the fundamental strategies that will give you an edge in Texas Hold'em tournaments and cash games.",
    content: "Texas Hold'em is the most popular poker variant worldwide...",
    author: "Sarah Johnson",
    authorAvatar: "",
    publishedAt: "2024-11-28",
    readTime: "8 min read",
    category: "Strategy",
    tags: ["Texas Hold'em", "Beginners", "Strategy"],
    featured: true,
    image: "/api/placeholder/600/300"
  },
  {
    id: 2,
    title: "Bankroll Management: How to Protect Your Poker Funds",
    excerpt: "Proper bankroll management is crucial for long-term success in poker. Learn the key principles.",
    content: "Managing your poker bankroll effectively is one of the most important...",
    author: "Mike Chen",
    authorAvatar: "",
    publishedAt: "2024-11-27",
    readTime: "6 min read",
    category: "Finance",
    tags: ["Bankroll", "Management", "Finance"],
    featured: false,
    image: "/api/placeholder/600/300"
  },
  {
    id: 3,
    title: "Reading Opponents: Advanced Poker Psychology",
    excerpt: "Understanding your opponents' behavior and psychology can dramatically improve your win rate.",
    content: "Poker is as much a game of psychology as it is a game of skill...",
    author: "Dr. Emily Rodriguez",
    authorAvatar: "",
    publishedAt: "2024-11-26",
    readTime: "12 min read",
    category: "Psychology",
    tags: ["Psychology", "Advanced", "Reading"],
    featured: true,
    image: "/api/placeholder/600/300"
  },
  {
    id: 4,
    title: "Tournament Play: Adjusting Your Strategy for Different Stages",
    excerpt: "Tournament poker requires different strategies at different stages. Learn when to be aggressive and when to be conservative.",
    content: "Poker tournaments have distinct phases that require different approaches...",
    author: "David Kim",
    authorAvatar: "",
    publishedAt: "2024-11-25",
    readTime: "10 min read",
    category: "Tournaments",
    tags: ["Tournaments", "Strategy", "Stages"],
    featured: false,
    image: "/api/placeholder/600/300"
  },
  {
    id: 5,
    title: "The Mathematics of Poker: Expected Value Calculations",
    excerpt: "Understanding expected value (EV) is crucial for making mathematically correct decisions at the table.",
    content: "Expected value is a fundamental concept in poker mathematics...",
    author: "Prof. Robert Taylor",
    authorAvatar: "",
    publishedAt: "2024-11-24",
    readTime: "15 min read",
    category: "Mathematics",
    tags: ["Math", "EV", "Calculations"],
    featured: false,
    image: "/api/placeholder/600/300"
  },
  {
    id: 6,
    title: "Live Poker vs Online Poker: Key Differences and Strategies",
    excerpt: "Playing live poker requires different skills and strategies compared to online poker.",
    content: "While the fundamental rules of poker remain the same...",
    author: "Lisa Wong",
    authorAvatar: "",
    publishedAt: "2024-11-23",
    readTime: "9 min read",
    category: "General",
    tags: ["Live Poker", "Online Poker", "Strategy"],
    featured: false,
    image: "/api/placeholder/600/300"
  }
];

const categories = ["All", "Strategy", "Finance", "Psychology", "Tournaments", "Mathematics", "General"];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  const filteredPosts = blogPosts
    .filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        case "oldest":
          return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
        case "popular":
          return b.featured ? 1 : -1;
        default:
          return 0;
      }
    });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-black">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 pointer-events-none" style={{ width: "100%", height: "100%" }}>
          <div className="rs-fullvideo-cover" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 1, background: "rgba(0,0,0,0.35)" }} />
          <div className="html5vid rs_html5vidbasicstyles fullcoveredvideo" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }}>
            <video
              autoPlay
              muted
              loop
              preload="auto"
              style={{
                objectFit: "cover",
                backgroundSize: "cover",
                opacity: 1,
                width: "100%",
                height: "100%",
                position: "absolute",
                left: 0,
                top: 0,
                display: "block",
                zIndex: 0,
              }}
              poster=""
            >
              <source src="//gpc.ro/wp-content/uploads/2025/03/Sequence-08.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <Badge variant="secondary" className="mb-4">
                📝 Poker Blog
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            >
              Poker <span className="text-primary">Insights</span> & Strategies
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Expert analysis, strategy guides, and poker education from professional players
              and coaches. Level up your game with our comprehensive blog.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
            >
              <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.slice(0, 2).map((post) => (
                  <motion.div key={post.id} variants={fadeInUp}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-video bg-muted relative">
                        <div className="absolute inset-0 flex items-center justify-center text-6xl">
                          🃏
                        </div>
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{post.category}</Badge>
                          <Badge variant="outline">Featured</Badge>
                        </div>
                        <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                        <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={post.authorAvatar} />
                              <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm text-muted-foreground">{post.author}</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                              })}
                            </span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-12"
          >
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">All Articles</h2>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 w-full lg:w-auto">
                <div className="relative w-full sm:flex-1 sm:min-w-56 lg:w-80">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-32">
                    <SelectValue placeholder="Sort" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="oldest">Oldest</SelectItem>
                    <SelectItem value="popular">Popular</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </motion.div>

          {/* Posts Grid */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post) => (
              <motion.div key={post.id} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-4xl">
                      🃏
                    </div>
                    {post.featured && (
                      <Badge className="absolute top-2 left-2 bg-primary">Featured</Badge>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                    </div>
                    <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={post.authorAvatar} />
                          <AvatarFallback className="text-xs">{post.author.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-muted-foreground">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/blog/${post.id}`}>
                          Read More <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles match your search criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
