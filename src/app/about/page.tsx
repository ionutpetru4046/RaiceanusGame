"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock, Users, Trophy, Heart } from "lucide-react";

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

const milestones = [
  {
    year: "1526",
    title: "First Poker Reference",
    description: "The earliest known reference to poker appears in a letter from a French nobleman."
  },
  {
    year: "1830s",
    title: "Modern Poker Emerges",
    description: "Poker as we know it today develops in New Orleans, combining elements from various card games."
  },
  {
    year: "1970",
    title: "World Series of Poker",
    description: "The first World Series of Poker is held in Las Vegas, revolutionizing the game."
  },
  {
    year: "2003",
    title: "Online Poker Boom",
    description: "Online poker platforms become mainstream, making the game accessible worldwide."
  },
  {
    year: "2024",
    title: "Raiceanus is Born",
    description: "A new era of poker begins with our comprehensive platform for players of all levels."
  }
];

const values = [
  {
    icon: Heart,
    title: "Passion for the Game",
    description: "We love poker and believe in sharing that passion with everyone who wants to learn and play."
  },
  {
    icon: Users,
    title: "Community First",
    description: "Building a supportive community where players can learn, compete, and grow together."
  },
  {
    icon: Trophy,
    title: "Excellence",
    description: "Striving for the highest standards in content, tournaments, and user experience."
  },
  {
    icon: Clock,
    title: "Continuous Learning",
    description: "Poker is a game of constant evolution, and so are we. Always learning, always improving."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-24 lg:py-32">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/treasure-island-casino.jpg')", // Change this to any relevant image in your public folder
          }}
          aria-hidden="true"
        />
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                🃏 About Raiceanus
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white"
            >
              The Future of <span className="text-primary">Poker</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-white/80 max-w-3xl mx-auto"
            >
              Raiceanus is more than just a poker platform. We&apos;re a community-driven ecosystem
              designed to elevate every aspect of the poker experience, from casual play to
              professional competition.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Our Mission
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              To democratize poker education, foster a thriving community, and provide
              unparalleled gaming experiences that cater to players of every skill level.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold mb-4">Why Raiceanus?</h3>
              <p className="text-muted-foreground mb-6">
                In a world where poker platforms are either too simplistic or overly complex,
                Raiceanus strikes the perfect balance. We combine cutting-edge technology with
                deep poker expertise to create an environment where everyone can thrive.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Comprehensive learning resources for all skill levels
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Professional-grade tournament experiences
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Active community engagement and support
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Regular content updates and fresh perspectives
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div
                className="aspect-square rounded-2xl flex items-center justify-center relative overflow-hidden"
                style={{
                  backgroundImage: "url('/vegas-casino.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/70" />
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-4">🃏</div>
                  <p className="text-muted-foreground">Excellence in Every Hand</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              The History of Poker
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              From its humble origins to becoming a global phenomenon, poker has evolved
              dramatically. Here&apos;s a glimpse into its fascinating journey.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-8"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                variants={fadeInUp}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <Badge variant="outline" className="text-lg px-3 py-1">
                          {milestone.year}
                        </Badge>
                        <CardTitle className="text-xl">{milestone.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {milestone.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
                <div className="hidden md:block w-px h-16 bg-border" />
                <div className="md:hidden w-16 h-px bg-border" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Our Values
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              These core principles guide everything we do and shape the community we build.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div key={value.title} variants={fadeInUp}>
                <Card className="h-full text-center">
                  <CardHeader>
                    <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold mb-16"
            >
              Raiceanus by Numbers
            </motion.h2>

            <motion.div
              variants={stagger}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            >
              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-4xl md:text-6xl font-bold mb-2">10K+</div>
                <div className="text-primary-foreground/80">Active Players</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-4xl md:text-6xl font-bold mb-2">500+</div>
                <div className="text-primary-foreground/80">Tournaments Hosted</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-4xl md:text-6xl font-bold mb-2">1M+</div>
                <div className="text-primary-foreground/80">Games Played</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-4xl md:text-6xl font-bold mb-2">24/7</div>
                <div className="text-primary-foreground/80">Community Support</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
