"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { BarChart3, Users, FileText, Video, Trophy, Plus, Edit, Trash2, Eye, Calendar, TrendingUp, ArrowLeft } from "lucide-react";

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

// Mock data - replace with real data from Supabase
const stats = [
  { label: "Total Posts", value: "24", icon: FileText, change: "+12%", trend: "up" },
  { label: "Total Videos", value: "18", icon: Video, change: "+8%", trend: "up" },
  { label: "Active Tournaments", value: "6", icon: Trophy, change: "+2", trend: "up" },
  { label: "Total Users", value: "1,234", icon: Users, change: "+15%", trend: "up" },
];

const recentPosts = [
  { id: 1, title: "Texas Hold'em Strategy Guide", status: "published", views: 1234, date: "2024-11-28" },
  { id: 2, title: "Tournament Play Tips", status: "draft", views: 0, date: "2024-11-27" },
  { id: 3, title: "Bankroll Management", status: "published", views: 856, date: "2024-11-26" },
];

const recentVideos = [
  { id: 1, title: "Advanced Bluffing Techniques", status: "published", views: 2156, date: "2024-11-28" },
  { id: 2, title: "Live Poker Analysis", status: "processing", views: 0, date: "2024-11-27" },
  { id: 3, title: "Beginner Poker Tutorial", status: "published", views: 3421, date: "2024-11-26" },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="/" className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Site</span>
                </a>
              </Button>
              <div>
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <p className="text-muted-foreground mt-1">Manage your poker website content</p>
              </div>
            </div>
            <Badge variant="secondary" className="px-3 py-1">
              👑 Admin Panel
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="tournaments">Tournaments</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* Stats Cards */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div key={stat.label} variants={fadeInUp}>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                      <stat.icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <p className="text-xs text-muted-foreground flex items-center mt-1">
                        <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                        {stat.change} from last month
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Recent Posts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <div key={post.id} className="flex items-center justify-between p-3 rounded-lg border">
                        <div className="flex-1">
                          <p className="font-medium text-sm">{post.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {post.views} views • {post.date}
                          </p>
                        </div>
                        <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
                          {post.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View All Posts
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5" />
                    Recent Videos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentVideos.map((video) => (
                      <div key={video.id} className="flex items-center justify-between p-3 rounded-lg border">
                        <div className="flex-1">
                          <p className="font-medium text-sm">{video.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {video.views} views • {video.date}
                          </p>
                        </div>
                        <Badge variant={video.status === 'published' ? 'default' : 'secondary'}>
                          {video.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View All Videos
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="posts" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Blog Posts</h2>
                <p className="text-muted-foreground">Manage your blog content</p>
              </div>
              <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    New Post
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Create New Post</DialogTitle>
                    <DialogDescription>
                      Add a new blog post to your website.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Title</Label>
                      <Input id="title" placeholder="Post title..." />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="excerpt">Excerpt</Label>
                      <Textarea id="excerpt" placeholder="Brief description..." />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="strategy">Strategy</SelectItem>
                          <SelectItem value="tournament">Tournament</SelectItem>
                          <SelectItem value="beginner">Beginner</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={() => setIsCreateDialogOpen(false)}>
                        Create Post
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Views</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentPosts.map((post) => (
                      <TableRow key={post.id}>
                        <TableCell className="font-medium">{post.title}</TableCell>
                        <TableCell>
                          <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
                            {post.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{post.views.toLocaleString()}</TableCell>
                        <TableCell>{post.date}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end space-x-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Delete Post</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Are you sure you want to delete this post? This action cannot be undone.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction>Delete</AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="videos" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Video Content</h2>
                <p className="text-muted-foreground">Manage your video library</p>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Upload Video
              </Button>
            </div>

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Views</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentVideos.map((video) => (
                      <TableRow key={video.id}>
                        <TableCell className="font-medium">{video.title}</TableCell>
                        <TableCell>
                          <Badge variant={video.status === 'published' ? 'default' : 'secondary'}>
                            {video.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{video.views.toLocaleString()}</TableCell>
                        <TableCell>{video.date}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end space-x-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Delete Video</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Are you sure you want to delete this video? This action cannot be undone.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction>Delete</AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tournaments" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Tournaments</h2>
                <p className="text-muted-foreground">Manage tournament schedules and settings</p>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Tournament
              </Button>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="text-center py-12">
                  <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Tournament Management</h3>
                  <p className="text-muted-foreground">
                    Create and manage poker tournaments from this dashboard.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">User Management</h2>
                <p className="text-muted-foreground">Manage user accounts and permissions</p>
              </div>
              <Button variant="outline">
                <Users className="h-4 w-4 mr-2" />
                View All Users
              </Button>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="text-center py-12">
                  <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">User Administration</h3>
                  <p className="text-muted-foreground">
                    Manage user accounts, roles, and permissions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
