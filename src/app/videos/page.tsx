"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Search, Play, Calendar, User, Eye, ThumbsUp, Clock } from "lucide-react";

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

const videos = [
  {
    id: 1,
    title: "Texas Hold'em for Beginners - Complete Guide",
    description: "Learn the basics of Texas Hold'em poker from hand rankings to basic strategy.",
    youtubeId: "dQw4w9WgXcQ", // Placeholder - replace with actual YouTube IDs
    thumbnail: "/api/placeholder/480/270",
    duration: "15:32",
    views: 125000,
    likes: 8900,
    publishedAt: "2024-11-28",
    author: "Sarah Johnson",
    authorAvatar: "",
    category: "Beginners",
    tags: ["Texas Hold'em", "Beginners", "Tutorial"],
    featured: true
  },
  {
    id: 2,
    title: "Advanced Bluffing Techniques",
    description: "Master the art of bluffing with these advanced techniques and psychological insights.",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/api/placeholder/480/270",
    duration: "22:45",
    views: 87500,
    likes: 6500,
    publishedAt: "2024-11-27",
    author: "Mike Chen",
    authorAvatar: "",
    category: "Strategy",
    tags: ["Bluffing", "Advanced", "Psychology"],
    featured: true
  },
  {
    id: 3,
    title: "Tournament Poker: ICM Strategy",
    description: "Understanding Independent Chip Model and how it affects tournament decisions.",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/api/placeholder/480/270",
    duration: "18:20",
    views: 67200,
    likes: 4200,
    publishedAt: "2024-11-26",
    author: "David Kim",
    authorAvatar: "",
    category: "Tournaments",
    tags: ["ICM", "Tournaments", "Strategy"],
    featured: false
  },
  {
    id: 4,
    title: "Reading Your Opponents - Live Tells",
    description: "Learn to spot and interpret physical tells at live poker tables.",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/api/placeholder/480/270",
    duration: "25:10",
    views: 94500,
    likes: 7800,
    publishedAt: "2024-11-25",
    author: "Dr. Emily Rodriguez",
    authorAvatar: "",
    category: "Psychology",
    tags: ["Tells", "Psychology", "Live Poker"],
    featured: false
  },
  {
    id: 5,
    title: "Bankroll Management Masterclass",
    description: "Essential bankroll management principles for serious poker players.",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/api/placeholder/480/270",
    duration: "20:15",
    views: 78300,
    likes: 5600,
    publishedAt: "2024-11-24",
    author: "Lisa Wong",
    authorAvatar: "",
    category: "Finance",
    tags: ["Bankroll", "Management", "Finance"],
    featured: false
  },
  {
    id: 6,
    title: "Pot Limit Omaha Fundamentals",
    description: "Complete guide to PLO poker including starting hands and basic strategy.",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/api/placeholder/480/270",
    duration: "28:40",
    views: 56800,
    likes: 3800,
    publishedAt: "2024-11-23",
    author: "Tom Anderson",
    authorAvatar: "",
    category: "Games",
    tags: ["PLO", "Omaha", "Fundamentals"],
    featured: false
  }
];

const categories = ["All", "Beginners", "Strategy", "Tournaments", "Psychology", "Finance", "Games"];

export default function VideosPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  const filteredVideos = videos
    .filter(video => {
      const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           video.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === "All" || video.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        case "oldest":
          return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
        case "popular":
          return b.views - a.views;
        case "likes":
          return b.likes - a.likes;
        default:
          return 0;
      }
    });

  const featuredVideos = videos.filter(video => video.featured);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-background via-background to-primary/5 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <Badge variant="secondary" className="mb-4">
                📹 Video Library
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            >
              Learn from the <span className="text-primary">Best</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Watch expert poker analysis, strategy tutorials, and tournament highlights.
              Our video library covers everything from beginner basics to advanced techniques.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Videos */}
      {featuredVideos.length > 0 && (
        <section className="py-16 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
            >
              <h2 className="text-3xl font-bold mb-8">Featured Videos</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredVideos.slice(0, 2).map((video) => (
                  <motion.div key={video.id} variants={fadeInUp}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                      <div className="aspect-video bg-muted relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                          <Play className="text-white drop-shadow-lg" />
                        </div>
                        <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm font-medium">
                          {video.duration}
                        </div>
                        <Badge className="absolute top-2 left-2 bg-primary">Featured</Badge>
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{video.category}</Badge>
                        </div>
                        <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors">
                          {video.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-3">{video.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={video.authorAvatar} />
                              <AvatarFallback>{video.author.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm text-muted-foreground">{video.author}</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              {formatNumber(video.views)}
                            </span>
                            <span className="flex items-center gap-1">
                              <ThumbsUp className="h-3 w-3" />
                              {formatNumber(video.likes)}
                            </span>
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

      {/* Video Gallery */}
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
              <h2 className="text-3xl font-bold">Video Library</h2>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 w-full lg:w-auto">
                <div className="relative w-full sm:flex-1 sm:min-w-56 lg:w-80">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search videos..."
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
                    <SelectItem value="likes">Most Liked</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </motion.div>

          {/* Videos Grid */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredVideos.map((video) => (
              <motion.div key={video.id} variants={fadeInUp}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                      <Play className="text-white drop-shadow-lg" />
                    </div>
                    <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm font-medium">
                      {video.duration}
                    </div>
                    {video.featured && (
                      <Badge className="absolute top-2 left-2 bg-primary">Featured</Badge>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{video.category}</Badge>
                    </div>
                    <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                      {video.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">{video.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={video.authorAvatar} />
                          <AvatarFallback className="text-xs">{video.author.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-muted-foreground">{video.author}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {new Date(video.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {formatNumber(video.views)}
                        </span>
                        <span className="flex items-center gap-1">
                          <ThumbsUp className="h-3 w-3" />
                          {formatNumber(video.likes)}
                        </span>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            Watch
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          <DialogHeader>
                            <DialogTitle>{video.title}</DialogTitle>
                            <DialogDescription>{video.description}</DialogDescription>
                          </DialogHeader>
                          <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                            <iframe
                              width="100%"
                              height="100%"
                              src={`https://www.youtube.com/embed/${video.youtubeId}`}
                              title={video.title}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="w-full h-full"
                            />
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-4">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={video.authorAvatar} />
                                <AvatarFallback>{video.author.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">{video.author}</p>
                                <p className="text-sm text-muted-foreground">
                                  {new Date(video.publishedAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric'
                                  })}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Eye className="h-4 w-4" />
                                {formatNumber(video.views)} views
                              </span>
                              <span className="flex items-center gap-1">
                                <ThumbsUp className="h-4 w-4" />
                                {formatNumber(video.likes)}
                              </span>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredVideos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No videos match your search criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
