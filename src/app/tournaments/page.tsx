"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, Clock, Users, DollarSign, Trophy, Filter, Search } from "lucide-react";

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

const tournaments = [
  {
    id: 1,
    name: "Sunday Million",
    game: "Texas Hold'em",
    buyIn: 10,
    prizePool: 100000,
    maxPlayers: 10000,
    currentPlayers: 8234,
    startTime: "2024-12-01T20:00:00Z",
    status: "registering",
    description: "The biggest tournament of the week with massive prizes!",
    difficulty: "All Levels",
    type: "Sit & Go"
  },
  {
    id: 2,
    name: "Daily Turbo",
    game: "Pot Limit Omaha",
    buyIn: 25,
    prizePool: 25000,
    maxPlayers: 1000,
    currentPlayers: 456,
    startTime: "2024-11-30T18:30:00Z",
    status: "registering",
    description: "Fast-paced PLO action with quick blind increases.",
    difficulty: "Intermediate",
    type: "Turbo"
  },
  {
    id: 3,
    name: "Beginners Welcome",
    game: "Texas Hold'em",
    buyIn: 5,
    prizePool: 5000,
    maxPlayers: 1000,
    currentPlayers: 234,
    startTime: "2024-11-30T19:00:00Z",
    status: "registering",
    description: "Perfect for new players learning the ropes.",
    difficulty: "Beginner",
    type: "Regular"
  },
  {
    id: 4,
    name: "High Roller Championship",
    game: "Seven Card Stud",
    buyIn: 500,
    prizePool: 250000,
    maxPlayers: 200,
    currentPlayers: 87,
    startTime: "2024-12-02T21:00:00Z",
    status: "registering",
    description: "Elite competition for serious poker players.",
    difficulty: "Expert",
    type: "Championship"
  },
  {
    id: 5,
    name: "Mixed Games Madness",
    game: "Mixed",
    buyIn: 50,
    prizePool: 15000,
    maxPlayers: 300,
    currentPlayers: 156,
    startTime: "2024-11-30T22:00:00Z",
    status: "registering",
    description: "Various poker variants in one exciting tournament.",
    difficulty: "Advanced",
    type: "Mixed"
  },
  {
    id: 6,
    name: "Satellite to Main Event",
    game: "Texas Hold'em",
    buyIn: 100,
    prizePool: 10000,
    maxPlayers: 100,
    currentPlayers: 78,
    startTime: "2024-12-01T16:00:00Z",
    status: "registering",
    description: "Win your way into the Main Event with a smaller buy-in.",
    difficulty: "All Levels",
    type: "Satellite"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'registering': return 'bg-green-500';
    case 'running': return 'bg-blue-500';
    case 'completed': return 'bg-gray-500';
    default: return 'bg-gray-500';
  }
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner': return 'bg-green-100 text-green-800';
    case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
    case 'Advanced': return 'bg-orange-100 text-orange-800';
    case 'Expert': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export default function TournamentsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [gameFilter, setGameFilter] = useState("all");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [selectedTournament, setSelectedTournament] = useState<any>(null);

  const filteredTournaments = tournaments.filter(tournament => {
    const matchesSearch = tournament.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tournament.game.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGame = gameFilter === "all" || tournament.game === gameFilter;
    const matchesDifficulty = difficultyFilter === "all" || tournament.difficulty === difficultyFilter;

    return matchesSearch && matchesGame && matchesDifficulty;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
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
                🏆 Tournament Central
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            >
              Compete for <span className="text-primary">Glory</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Join thousands of players in our exciting tournament lineup. From casual games
              to high-stakes championships, find your perfect competition.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Tournament Stats */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">$2.5M+</div>
              <div className="text-muted-foreground">Total Prizes</div>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Tournaments Played</div>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15K+</div>
              <div className="text-muted-foreground">Active Players</div>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Tournament Action</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tournament Listings */}
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
              <h2 className="text-3xl font-bold">Active Tournaments</h2>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 w-full lg:w-auto">
                <div className="relative w-full sm:flex-1 sm:min-w-56 lg:w-80">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search tournaments..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <Select value={gameFilter} onValueChange={setGameFilter}>
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue placeholder="Game" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Games</SelectItem>
                    <SelectItem value="Texas Hold'em">Texas Hold&apos;em</SelectItem>
                    <SelectItem value="Pot Limit Omaha">PLO</SelectItem>
                    <SelectItem value="Seven Card Stud">7 Card Stud</SelectItem>
                    <SelectItem value="Mixed">Mixed</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue placeholder="Difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="Beginner">Beginner</SelectItem>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>
                    <SelectItem value="Expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </motion.div>

          {/* Tournament Grid */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredTournaments.map((tournament) => (
              <motion.div key={tournament.id} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(tournament.status)}`} />
                        <Badge variant="outline">{tournament.type}</Badge>
                      </div>
                      <Badge className={getDifficultyColor(tournament.difficulty)}>
                        {tournament.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{tournament.name}</CardTitle>
                    <CardDescription>{tournament.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <div className="font-medium">${tournament.buyIn}</div>
                          <div className="text-muted-foreground">Buy-in</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Trophy className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <div className="font-medium">${tournament.prizePool.toLocaleString()}</div>
                          <div className="text-muted-foreground">Prize Pool</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <div className="font-medium">{tournament.currentPlayers}/{tournament.maxPlayers}</div>
                          <div className="text-muted-foreground">Players</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <div className="font-medium">{formatDate(tournament.startTime)}</div>
                          <div className="text-muted-foreground">Start Time</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Registration Progress</span>
                        <span>{Math.round((tournament.currentPlayers / tournament.maxPlayers) * 100)}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(tournament.currentPlayers / tournament.maxPlayers) * 100}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="flex-1">
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="text-2xl">{tournament.name}</DialogTitle>
                            <DialogDescription>{tournament.description}</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-semibold mb-2">Tournament Details</h4>
                                <ul className="space-y-2 text-sm">
                                  <li><strong>Game:</strong> {tournament.game}</li>
                                  <li><strong>Buy-in:</strong> ${tournament.buyIn}</li>
                                  <li><strong>Prize Pool:</strong> ${tournament.prizePool.toLocaleString()}</li>
                                  <li><strong>Players:</strong> {tournament.currentPlayers}/{tournament.maxPlayers}</li>
                                  <li><strong>Start Time:</strong> {formatDate(tournament.startTime)}</li>
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-semibold mb-2">Prize Structure</h4>
                                <ul className="space-y-1 text-sm">
                                  <li>1st Place: ${Math.round(tournament.prizePool * 0.3).toLocaleString()}</li>
                                  <li>2nd Place: ${Math.round(tournament.prizePool * 0.2).toLocaleString()}</li>
                                  <li>3rd Place: ${Math.round(tournament.prizePool * 0.15).toLocaleString()}</li>
                                  <li>4th-10th: ${Math.round(tournament.prizePool * 0.05).toLocaleString()}</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button className="flex-1">
                        Register Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredTournaments.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No tournaments match your filters.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
