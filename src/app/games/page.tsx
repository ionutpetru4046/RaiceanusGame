"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Users, Clock, DollarSign, Target, BookOpen, Play } from "lucide-react";

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

const pokerVariants = [
  {
    name: "Texas Hold'em",
    description: "The most popular poker variant worldwide, featuring community cards and strategic betting.",
    players: "2-10",
    difficulty: "Medium",
    popularity: "★★★★★",
    rules: [
      "Each player receives 2 hole cards",
      "5 community cards are dealt in stages: Flop (3), Turn (1), River (1)",
      "Players make the best 5-card hand using their hole cards and community cards",
      "Betting occurs before flop, after flop, after turn, and after river"
    ],
    icon: "🃏"
  },
  {
    name: "Omaha",
    description: "Similar to Texas Hold'em but with 4 hole cards instead of 2.",
    players: "2-10",
    difficulty: "High",
    popularity: "★★★★☆",
    rules: [
      "Each player receives 4 hole cards",
      "5 community cards dealt: Flop (3), Turn (1), River (1)",
      "Players must use exactly 2 hole cards and 3 community cards",
      "Creates more possible combinations and complex strategy"
    ],
    icon: "🎯"
  },
  {
    name: "Seven Card Stud",
    description: "Classic poker variant where players receive 7 cards throughout the hand.",
    players: "2-8",
    difficulty: "High",
    popularity: "★★★☆☆",
    rules: [
      "Players receive 3 cards (2 face down, 1 face up) initially",
      "Additional cards dealt face up in betting rounds",
      "7th card dealt face down",
      "Best 5-card hand from 7 cards wins"
    ],
    icon: "🎴"
  },
  {
    name: "Five Card Draw",
    description: "Traditional poker where players can exchange cards to improve their hand.",
    players: "2-6",
    difficulty: "Low",
    popularity: "★★★☆☆",
    rules: [
      "Each player receives 5 face-down cards",
      "One round of betting",
      "Players can exchange 0-3 cards",
      "Final round of betting",
      "Highest poker hand wins"
    ],
    icon: "🃏"
  },
  {
    name: "Pot Limit Omaha",
    description: "Omaha with pot limit betting structure, creating more aggressive play.",
    players: "2-10",
    difficulty: "Very High",
    popularity: "★★★★☆",
    rules: [
      "4 hole cards per player",
      "Same community card structure as Omaha",
      "Betting limited to the current pot size",
      "Very action-oriented and complex"
    ],
    icon: "💰"
  },
  {
    name: "Razz",
    description: "Lowball poker where the lowest hand wins.",
    players: "2-8",
    difficulty: "Medium",
    popularity: "★★☆☆☆",
    rules: [
      "7 cards dealt throughout hand",
      "Aces are high, straights and flushes don't count",
      "Lowest hand wins the pot",
      "Popular in mixed games"
    ],
    icon: "👑"
  }
];

const handRankings = [
  { name: "Royal Flush", description: "A, K, Q, J, 10 of the same suit", example: "A♥ K♥ Q♥ J♥ 10♥" },
  { name: "Straight Flush", description: "Five cards in sequence, same suit", example: "9♠ 8♠ 7♠ 6♠ 5♠" },
  { name: "Four of a Kind", description: "Four cards of the same rank", example: "Q♠ Q♥ Q♦ Q♣ 7♠" },
  { name: "Full House", description: "Three of a kind plus a pair", example: "K♠ K♥ K♦ 5♠ 5♥" },
  { name: "Flush", description: "Five cards of the same suit", example: "A♠ J♠ 8♠ 5♠ 2♠" },
  { name: "Straight", description: "Five cards in sequence", example: "10♥ 9♣ 8♠ 7♦ 6♥" },
  { name: "Three of a Kind", description: "Three cards of the same rank", example: "Q♠ Q♥ Q♦ K♠ 5♠" },
  { name: "Two Pair", description: "Two different pairs", example: "J♠ J♥ 8♠ 8♥ A♠" },
  { name: "One Pair", description: "Two cards of the same rank", example: "10♠ 10♥ K♠ 5♦ 2♣" },
  { name: "High Card", description: "Highest card when no other hand is made", example: "A♠ K♦ Q♣ J♥ 8♠" }
];

export default function GamesPage() {
  const [selectedVariant, setSelectedVariant] = useState(pokerVariants[0]);

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
                🎯 Poker Games & Rules
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            >
              Master Every <span className="text-primary">Variant</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              From Texas Hold&apos;em to exotic variants, learn the rules, strategies, and
              nuances of every poker game. Choose your weapon and dominate the tables.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="variants" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="variants" className="text-sm sm:text-lg px-2 sm:px-4">Game Variants</TabsTrigger>
              <TabsTrigger value="rules" className="text-sm sm:text-lg px-2 sm:px-4">Hand Rankings</TabsTrigger>
              <TabsTrigger value="strategy" className="text-sm sm:text-lg px-2 sm:px-4">Basic Strategy</TabsTrigger>
            </TabsList>

            <TabsContent value="variants">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={stagger}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                {/* Variant List */}
                <div className="lg:col-span-1 space-y-4">
                  {pokerVariants.map((variant) => (
                    <motion.div key={variant.name} variants={fadeInUp}>
                      <Card
                        className={`cursor-pointer transition-all hover:shadow-lg ${
                          selectedVariant.name === variant.name
                            ? 'ring-2 ring-primary shadow-lg'
                            : ''
                        }`}
                        onClick={() => setSelectedVariant(variant)}
                      >
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg flex items-center gap-2">
                              <span className="text-2xl">{variant.icon}</span>
                              {variant.name}
                            </CardTitle>
                            <Badge variant="outline">{variant.popularity}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-sm text-muted-foreground mb-3">
                            {variant.description}
                          </p>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              {variant.players} players
                            </span>
                            <span>Difficulty: {variant.difficulty}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Variant Details */}
                <div className="lg:col-span-2">
                  <motion.div
                    key={selectedVariant.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-4xl">{selectedVariant.icon}</span>
                          <div>
                            <CardTitle className="text-3xl">{selectedVariant.name}</CardTitle>
                            <CardDescription className="text-lg mt-2">
                              {selectedVariant.description}
                            </CardDescription>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <Badge variant="secondary">
                            <Users className="h-4 w-4 mr-1" />
                            {selectedVariant.players} Players
                          </Badge>
                          <Badge variant="secondary">
                            <Target className="h-4 w-4 mr-1" />
                            {selectedVariant.difficulty} Difficulty
                          </Badge>
                          <Badge variant="secondary">
                            {selectedVariant.popularity} Popularity
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <h3 className="text-xl font-semibold mb-4">Rules</h3>
                        <ul className="space-y-3">
                          {selectedVariant.rules.map((rule, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <span className="text-primary font-bold mt-1">{index + 1}.</span>
                              <span className="text-muted-foreground">{rule}</span>
                            </li>
                          ))}
                        </ul>
                        <Separator className="my-6" />
                        <div className="flex gap-3">
                          <Button>
                            <Play className="h-4 w-4 mr-2" />
                            Practice Game
                          </Button>
                          <Button variant="outline">
                            <BookOpen className="h-4 w-4 mr-2" />
                            Learn Strategy
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="rules">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={stagger}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Poker Hand Rankings</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Understanding hand rankings is fundamental to poker. From the mighty Royal Flush
                    to the humble High Card, here&apos;s how hands are ranked from strongest to weakest.
                  </p>
                </div>

                <div className="space-y-4">
                  {handRankings.map((hand, index) => (
                    <motion.div key={hand.name} variants={fadeInUp}>
                      <Card>
                        <CardContent className="p-6">
                          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                            <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6 min-w-0">
                              <div className="flex items-center gap-3">
                                <Badge variant="outline" className="text-base sm:text-lg px-3 py-1 min-w-12 shrink-0">
                                  #{index + 1}
                                </Badge>
                                <h3 className="text-xl font-semibold">{hand.name}</h3>
                              </div>
                              <p className="text-muted-foreground hidden md:block">
                                {hand.description}
                              </p>
                            </div>
                            <div className="max-w-full overflow-x-auto">
                              <div className="w-max text-base sm:text-xl md:text-2xl font-mono bg-muted px-4 py-2 rounded">
                              {hand.example}
                              </div>
                            </div>
                          </div>
                          <p className="text-muted-foreground mt-2 md:hidden">
                            {hand.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="strategy">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={stagger}
                className="space-y-8"
              >
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4">Basic Poker Strategy</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Master these fundamental principles to improve your game and increase your winnings.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-primary" />
                        Position Matters
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Your position at the table significantly affects your strategy. Players in later
                        positions have more information and can play more hands profitably.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-primary" />
                        Bankroll Management
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Never risk more than you can afford to lose. Proper bankroll management ensures
                        you can weather the variance and continue playing.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        Read Your Opponents
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Pay attention to betting patterns, timing, and physical tells. Understanding
                        what your opponents are likely to do is crucial for success.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        Patience is Key
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Discipline is essential. Wait for good opportunities rather than playing
                        every hand. The best players know when to fold and when to bet aggressively.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
