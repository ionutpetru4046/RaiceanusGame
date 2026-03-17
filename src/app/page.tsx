"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, Play, Trophy, Users, BookOpen, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

const features = [
  {
    icon: Trophy,
    title: "Tournaments",
    description: "Join exciting poker tournaments with real prizes and professional gameplay.",
    href: "/tournaments"
  },
  {
    icon: BookOpen,
    title: "Learn & Improve",
    description: "Master poker with expert guides, strategy articles, and video tutorials.",
    href: "/blog"
  },
  {
    icon: Video,
    title: "Video Content",
    description: "Watch professional poker analysis, tournament highlights, and educational content.",
    href: "/videos"
  },
  {
    icon: Users,
    title: "Community",
    description: "Connect with fellow poker enthusiasts and share your experiences.",
    href: "/community"
  }
];

// Background images for carousel
const backgroundImages = [
  "vegas-casino.jpg",
  "treasure-island-casino.jpg",
  "bgRaiceanu.jpg",
  "constanta-casino.jpg"
];

const stats = [
  { value: "10K+", label: "Active Players" },
  { value: "500+", label: "Tournaments" },
  { value: "50M+", label: "Chips Won" },
  { value: "24/7", label: "Support" }
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-change background images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-background via-background to-primary/5 min-h-screen flex items-center">
        {/* Background Image Carousel */}
        <div
          key={currentImageIndex}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-in fade-in-0 duration-1000"
          style={{
            backgroundImage: `url('${backgroundImages[currentImageIndex]}')`,
          }}
        />

        {/* Image Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center space-y-4">
          {/* Progress Indicators */}
          <div className="flex space-x-2">
            {backgroundImages.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'w-8 bg-white shadow-lg'
                    : 'w-4 bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex space-x-3">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'bg-white shadow-lg scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-linear-to-b from-black/75 via-black/60 to-black/75" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                🃏 Welcome to the Future of Poker
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-2xl"
            >
              Master the Game at{" "}
              <span className="text-primary drop-shadow-2xl">Raiceanu&apos;s Game</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-lg font-medium"
            >
              Join the ultimate poker community. Compete in tournaments, learn from experts,
              and elevate your game with premium content and analysis.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/tournaments">
                  Join Tournament <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                <Link href="/videos">
                  <Play className="mr-2 h-5 w-5" /> Watch Videos
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Floating Cards Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-secondary/20 rounded-full animate-pulse delay-300" />
              <div className="bg-card border rounded-lg p-8 shadow-xl">
                <div className="flex items-center space-x-2 text-2xl mb-4">
                  <span>🃏</span>
                  <span>♠️</span>
                  <span>♥️</span>
                  <span>♦️</span>
                  <span>♣️</span>
                </div>
                <p className="text-muted-foreground">Premium Poker Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              Everything You Need to Excel
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              From beginner tutorials to professional tournaments, we provide all the tools
              and resources to help you become a poker master.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={feature.title} variants={fadeInUp}>
                <Link href={feature.href}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                    <CardHeader>
                      <feature.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-24 bg-primary text-primary-foreground overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/vegas-casino.jpg')", // You can change this to any relevant poker/casino bg image in your public folder
          }}
          aria-hidden="true"
        />
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="relative z-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                Ready to Start Your Poker Journey?
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-xl mb-8 opacity-90"
              >
                Join thousands of players who have already elevated their game with Raiceanus.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                  <Link href="/auth/signup">
                    Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
