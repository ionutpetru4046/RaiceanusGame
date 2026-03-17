"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, HeadphonesIcon, Users } from "lucide-react";
import { toast } from "sonner";

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

const contactInfo = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Get in touch with our support team",
    contact: "support@raiceanus.com",
    responseTime: "Within 24 hours"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our experts",
    contact: "+1 (555) 123-4567",
    responseTime: "Mon-Fri 9AM-6PM EST"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Instant help through our chat system",
    contact: "Available 24/7",
    responseTime: "Immediate response"
  },
  {
    icon: MapPin,
    title: "Office Address",
    description: "Visit our headquarters",
    contact: "123 Poker Street, Las Vegas, NV 89101",
    responseTime: "By appointment only"
  }
];

const faqs = [
  {
    question: "How do I get started with poker tournaments?",
    answer: "Sign up for an account, verify your identity, and join any of our daily tournaments. We offer tournaments for all skill levels and bankrolls."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit cards, PayPal, cryptocurrency, and bank transfers. All transactions are secured with 256-bit SSL encryption."
  },
  {
    question: "Is my personal information safe?",
    answer: "Yes, we use industry-leading security measures to protect your data. We comply with GDPR and never share your information with third parties."
  },
  {
    question: "How do I withdraw my winnings?",
    answer: "Withdrawals are processed within 24-48 hours. You can withdraw via the same method you used to deposit, or choose alternative options."
  },
  {
    question: "Do you offer customer support 24/7?",
    answer: "Yes! Our customer support team is available 24/7 through email, phone, and live chat to assist you with any questions or concerns."
  },
  {
    question: "Can I play on mobile devices?",
    answer: "Absolutely! Our platform is fully responsive and works perfectly on all mobile devices, tablets, and desktop computers."
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      category: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/raiceanus-image.webp')", // Change to any relevant image in your public folder
          }}
          aria-hidden="true"
        />
        {/* Overlay for contrast and readability */}
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
                📞 Get in Touch
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white"
            >
              Contact <span className="text-primary">Us</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-white/80 max-w-3xl mx-auto"
            >
              Have questions about poker, need help with your account, or want to share feedback?
              We&apos;re here to help you 24/7 with our comprehensive support system.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <info.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                    <CardDescription>{info.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="font-medium text-foreground mb-2">{info.contact}</p>
                    <p className="text-sm text-muted-foreground">{info.responseTime}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & FAQ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Send us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="account">Account Issues</SelectItem>
                      <SelectItem value="tournaments">Tournament Questions</SelectItem>
                      <SelectItem value="payments">Payment Issues</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    required
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    required
                    placeholder="Please provide details about your inquiry..."
                    rows={6}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-muted-foreground">
                  Find quick answers to common questions about our platform.
                </p>
              </div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">{faq.question}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-lg border">
                <div className="flex items-center gap-3 mb-3">
                  <HeadphonesIcon className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold">Still need help?</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Can&apos;t find what you&apos;re looking for? Our support team is here to help.
                </p>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Live Chat
                  </Button>
                  <Button variant="outline" size="sm">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Stats */}
      <section className="relative py-16 bg-primary text-primary-foreground overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/vegas-casino.jpg')", // Change this to your preferred background image
          }}
          aria-hidden="true"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center"
            >
              <h2 className="text-3xl font-bold mb-12">Why Choose Our Support?</h2>

              <motion.div
                variants={stagger}
                className="grid grid-cols-2 lg:grid-cols-4 gap-8"
              >
                <motion.div variants={fadeInUp} className="text-center">
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-primary-foreground/80">Available Support</div>
                </motion.div>
                <motion.div variants={fadeInUp} className="text-center">
                  <div className="text-4xl font-bold mb-2">&lt;2min</div>
                  <div className="text-primary-foreground/80">Average Response</div>
                </motion.div>
                <motion.div variants={fadeInUp} className="text-center">
                  <div className="text-4xl font-bold mb-2">98%</div>
                  <div className="text-primary-foreground/80">Satisfaction Rate</div>
                </motion.div>
                <motion.div variants={fadeInUp} className="text-center">
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-primary-foreground/80">Support Experts</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
