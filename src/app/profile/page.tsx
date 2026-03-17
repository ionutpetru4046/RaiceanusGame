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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { User, Trophy, Calendar, Settings, CreditCard, Bell, Shield, Edit, Save, X } from "lucide-react";

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

// Mock user data - replace with real user data from Supabase
const userProfile = {
  id: "1",
  name: "John Poker",
  email: "john@example.com",
  avatar: "",
  bio: "Passionate poker player with 5+ years of experience. Love Texas Hold'em and tournament play.",
  location: "Las Vegas, NV",
  joinDate: "2023-01-15",
  totalGames: 1247,
  totalWinnings: 15420,
  currentBalance: 2500,
  favoriteGame: "Texas Hold'em",
  skillLevel: "Advanced"
};

const tournamentHistory = [
  { id: 1, name: "Sunday Million", position: 12, prize: 250, buyIn: 10, date: "2024-11-24" },
  { id: 2, name: "Daily Turbo", position: 3, prize: 150, buyIn: 25, date: "2024-11-22" },
  { id: 3, name: "Beginners Welcome", position: 1, prize: 500, buyIn: 5, date: "2024-11-20" },
  { id: 4, name: "High Roller Championship", position: 45, prize: 0, buyIn: 500, date: "2024-11-18" },
];

const achievements = [
  { id: 1, name: "First Victory", description: "Win your first tournament", icon: "🏆", unlocked: true },
  { id: 2, name: "High Roller", description: "Play in a $500+ buy-in tournament", icon: "💰", unlocked: true },
  { id: 3, name: "Consistent Player", description: "Play 100+ games", icon: "🎯", unlocked: true },
  { id: 4, name: "Champion", description: "Win 10 tournaments", icon: "👑", unlocked: false },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(userProfile);

  const handleSaveProfile = () => {
    // Here you would save to Supabase
    console.log("Saving profile:", editedProfile);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedProfile(userProfile);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={userProfile.avatar} />
              <AvatarFallback className="text-2xl">
                {userProfile.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-3xl font-bold">{userProfile.name}</h1>
              <p className="text-muted-foreground">{userProfile.email}</p>
              <div className="flex items-center space-x-4 mt-2">
                <Badge variant="secondary">Member since {new Date(userProfile.joinDate).getFullYear()}</Badge>
                <Badge variant="outline">{userProfile.skillLevel} Player</Badge>
              </div>
            </div>
            <Button
              variant={isEditing ? "default" : "outline"}
              onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
            >
              {isEditing ? (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </>
              ) : (
                <>
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </>
              )}
            </Button>
            {isEditing && (
              <Button variant="ghost" onClick={handleCancelEdit}>
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="tournaments">Tournaments</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* Stats Cards */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              <motion.div variants={fadeInUp}>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Games</CardTitle>
                    <Trophy className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{userProfile.totalGames.toLocaleString()}</div>
                    <p className="text-xs text-muted-foreground">
                      Games played
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Winnings</CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">${userProfile.totalWinnings.toLocaleString()}</div>
                    <p className="text-xs text-muted-foreground">
                      Career earnings
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Current Balance</CardTitle>
                    <User className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">${userProfile.currentBalance.toLocaleString()}</div>
                    <p className="text-xs text-muted-foreground">
                      Available chips
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {Math.round((tournamentHistory.filter(t => t.prize > 0).length / tournamentHistory.length) * 100)}%
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Tournament success
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Profile Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Profile Information
                  </CardTitle>
                  <CardDescription>
                    Your personal details and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      {isEditing ? (
                        <Input
                          id="name"
                          value={editedProfile.name}
                          onChange={(e) => setEditedProfile({...editedProfile, name: e.target.value})}
                        />
                      ) : (
                        <p className="text-sm text-muted-foreground mt-1">{userProfile.name}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <p className="text-sm text-muted-foreground mt-1">{userProfile.email}</p>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="bio">Bio</Label>
                    {isEditing ? (
                      <Textarea
                        id="bio"
                        value={editedProfile.bio}
                        onChange={(e) => setEditedProfile({...editedProfile, bio: e.target.value})}
                        rows={3}
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground mt-1">{userProfile.bio}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="location">Location</Label>
                      {isEditing ? (
                        <Input
                          id="location"
                          value={editedProfile.location}
                          onChange={(e) => setEditedProfile({...editedProfile, location: e.target.value})}
                        />
                      ) : (
                        <p className="text-sm text-muted-foreground mt-1">{userProfile.location}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="favoriteGame">Favorite Game</Label>
                      {isEditing ? (
                        <Select
                          value={editedProfile.favoriteGame}
                          onValueChange={(value) => setEditedProfile({...editedProfile, favoriteGame: value})}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Texas Hold'em">Texas Hold&apos;em</SelectItem>
                            <SelectItem value="Omaha">Omaha</SelectItem>
                            <SelectItem value="Seven Card Stud">Seven Card Stud</SelectItem>
                            <SelectItem value="Five Card Draw">Five Card Draw</SelectItem>
                          </SelectContent>
                        </Select>
                      ) : (
                        <p className="text-sm text-muted-foreground mt-1">{userProfile.favoriteGame}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5" />
                    Recent Achievements
                  </CardTitle>
                  <CardDescription>
                    Your latest accomplishments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {achievements.slice(0, 4).map((achievement) => (
                      <div key={achievement.id} className="flex items-center space-x-3">
                        <div className={`text-2xl ${achievement.unlocked ? '' : 'grayscale opacity-50'}`}>
                          {achievement.icon}
                        </div>
                        <div className="flex-1">
                          <p className={`font-medium ${achievement.unlocked ? '' : 'text-muted-foreground'}`}>
                            {achievement.name}
                          </p>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        </div>
                        {achievement.unlocked && (
                          <Badge variant="secondary">Unlocked</Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="tournaments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Tournament History</CardTitle>
                <CardDescription>
                  Your recent tournament results and performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tournament</TableHead>
                      <TableHead>Position</TableHead>
                      <TableHead>Prize</TableHead>
                      <TableHead>Buy-in</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tournamentHistory.map((tournament) => (
                      <TableRow key={tournament.id}>
                        <TableCell className="font-medium">{tournament.name}</TableCell>
                        <TableCell>
                          <Badge variant={tournament.position === 1 ? "default" : "secondary"}>
                            #{tournament.position}
                          </Badge>
                        </TableCell>
                        <TableCell className={tournament.prize > 0 ? "text-green-600 font-medium" : ""}>
                          ${tournament.prize}
                        </TableCell>
                        <TableCell>${tournament.buyIn}</TableCell>
                        <TableCell>{new Date(tournament.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement) => (
                <Card key={achievement.id} className={achievement.unlocked ? "border-primary/50" : ""}>
                  <CardContent className="p-6 text-center">
                    <div className={`text-4xl mb-4 ${achievement.unlocked ? '' : 'grayscale opacity-50'}`}>
                      {achievement.icon}
                    </div>
                    <h3 className={`font-semibold mb-2 ${achievement.unlocked ? '' : 'text-muted-foreground'}`}>
                      {achievement.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {achievement.description}
                    </p>
                    {achievement.unlocked ? (
                      <Badge>Unlocked</Badge>
                    ) : (
                      <Badge variant="outline">Locked</Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Notifications
                  </CardTitle>
                  <CardDescription>
                    Manage your notification preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Tournament Updates</p>
                      <p className="text-sm text-muted-foreground">Get notified about tournament results</p>
                    </div>
                    <Button variant="outline" size="sm">Enable</Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">New Content</p>
                      <p className="text-sm text-muted-foreground">Receive updates about new blog posts and videos</p>
                    </div>
                    <Button variant="outline" size="sm">Enable</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Privacy & Security
                  </CardTitle>
                  <CardDescription>
                    Manage your account security settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    Change Password
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Two-Factor Authentication
                  </Button>
                  <Separator />
                  <Button variant="destructive" className="w-full justify-start">
                    Delete Account
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
