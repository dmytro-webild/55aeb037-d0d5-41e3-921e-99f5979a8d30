"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { Zap, Camera, BarChart3, Share2 } from 'lucide-react';
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="large"
        background="blurBottom"
        cardStyle="glass-elevated"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        { name: "About", id: "#about" },
        { name: "Services", id: "#features" },
        { name: "Results", id: "#metrics" },
        { name: "Pricing", id: "#pricing" },
        { name: "Contact", id: "#contact" },
      ]}
      brandName="Vantage Social"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars"}}
      title="Scale Your Presence with Vantage Social"
      description="We build premium social strategies for high-growth brands, turning engagement into measurable business revenue."
      testimonials={[
        {
          name: "Alex Rivers",          handle: "@arivers",          testimonial: "The best agency partnership we've ever had. ROI tripled in six months.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-male-royal-blue-shirt-smiling-looking-weird-front-view_176474-84473.jpg"},
        {
          name: "Maria Chen",          handle: "@mchen",          testimonial: "Professional, data-driven, and highly creative. Truly top-tier results.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-organizing-live-shop_23-2149947439.jpg"},
        {
          name: "Jordan Smith",          handle: "@jsmith",          testimonial: "Vantage shifted our entire brand narrative. Absolutely premium service.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/caucasian-manager-collaborating-with-coworkers_482257-121155.jpg"},
        {
          name: "Sam Taylor",          handle: "@staylor",          testimonial: "Vantage delivers consistent results with unmatched creativity.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-standing-smiling_1187-3162.jpg"},
        {
          name: "Elena Ross",          handle: "@eross",          testimonial: "Scaling our brand was effortless thanks to their strategic approach.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-young-businesswoman_23-2149153829.jpg"},
      ]}
      buttons={[
        { text: "Start Growth", href: "#contact" },
        { text: "View Results", href: "#metrics" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/people-technology-concept-close-up-portrait-young-beautiful-attractive-tender-ginger-redhair-gir_1258-118530.jpg"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/young-manager-standing-up-relieve-back-pain_482257-67482.jpg", alt: "Team member 1" },
        { src: "http://img.b2bpic.net/free-photo/funny-guy-trying-sunglasses-eyewear-store-dancing-having-fun-standing-blue-background_1258-153238.jpg", alt: "Team member 2" },
        { src: "http://img.b2bpic.net/free-photo/universal-cables-gadgets-neon-charging-data_169016-71502.jpg", alt: "Team member 3" },
        { src: "http://img.b2bpic.net/free-photo/closeup-hand-pressing-screen_53876-101866.jpg", alt: "Team member 4" },
        { src: "http://img.b2bpic.net/free-photo/close-up-hand-holding-smartphone_23-2149151157.jpg", alt: "Team member 5" },
      ]}
      avatarText="Trusted by 50+ Global Brands"
      marqueeItems={[
        { type: "text", text: "Brand Growth" },
        { type: "text", text: "Performance Marketing" },
        { type: "text", text: "Content Production" },
        { type: "text", text: "Data Analytics" },
        { type: "text", text: "Community Management" },
      ]}
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Microsoft", "Google", "Shopify", "Slack", "Stripe", "Figma", "Notion"]}
      title="Trusted by Industry Leaders"
      description="Driving outcomes for the world's most innovative companies."
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Premium Strategy for Modern Brands"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { title: "Creative Strategy", description: "Defining your unique brand voice.", imageSrc: "http://img.b2bpic.net/free-photo/3d-geometric-shapes-indoors-background_23-2150697326.jpg", buttonIcon: Zap },
        { title: "Production Studio", description: "High-fidelity content creation.", imageSrc: "http://img.b2bpic.net/free-photo/overhead-view-laptop-with-camera-accessories-white-desk_23-2147924109.jpg", buttonIcon: Camera },
        { title: "Performance Analytics", description: "Real-time data and optimization.", imageSrc: "http://img.b2bpic.net/free-photo/3d-flowing-particles-network-communications-design_1048-15848.jpg", buttonIcon: BarChart3 },
        { title: "Influencer Network", description: "Strategic partnership management.", imageSrc: "http://img.b2bpic.net/free-photo/blue-light-portrait-background_23-2149594599.jpg", buttonIcon: Share2 },
      ]}
      title="Comprehensive Social Management"
      description="Full-stack social media services tailored to your specific brand goals."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", value: "350%", title: "Growth", description: "Average audience engagement increase.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-businesswoman-pointing-graph_1098-839.jpg" },
        { id: "m2", value: "2.4M", title: "Reach", description: "Monthly targeted impression count.", imageSrc: "http://img.b2bpic.net/free-photo/technology-hologram-indoors_23-2151833342.jpg" },
        { id: "m3", value: "120+", title: "Campaigns", description: "Successful full-cycle launches.", imageSrc: "http://img.b2bpic.net/free-photo/dynamic-data-visualization-3d_23-2151904311.jpg" },
      ]}
      title="Proven Performance"
      description="We don't guess. We deliver measurable growth metrics."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="inline-image"
      useInvertedBackground={false}
      testimonials={[
        { id: "t1", name: "Sarah J.", role: "CMO", testimonial: "Unparalleled expertise in strategy.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-woman-working-her-office-businesswoman-sitting-with-her-notebook-writing-making_1258-194709.jpg" },
        { id: "t2", name: "Mike D.", role: "CEO", testimonial: "Vantage understands scale.", imageSrc: "http://img.b2bpic.net/free-photo/happy-man-with-eyeglasses-smiling-office_329181-14553.jpg" },
        { id: "t3", name: "Emily B.", role: "Director", testimonial: "Best in the business.", imageSrc: "http://img.b2bpic.net/free-photo/working-with-partner_1098-14261.jpg" },
        { id: "t4", name: "John K.", role: "Founder", testimonial: "Serious results, zero fluff.", imageSrc: "http://img.b2bpic.net/free-photo/man-solar-panels-plant-using-laptop-improve-solar-cells-efficiency_482257-119792.jpg" },
        { id: "t5", name: "Lisa R.", role: "Manager", testimonial: "Transformation was immediate.", imageSrc: "http://img.b2bpic.net/free-photo/friendly-manager-smiling-colleagues-break_1262-16107.jpg" },
      ]}
      title="Client Success"
      description="Hear from our partners."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        { id: "p1", badge: "Growth", price: "$5k/mo", subtitle: "For established startups", features: ["Daily posting", "Basic analytics", "Standard strategy"], buttons: [{ text: "Contact Us", href: "#contact" }] },
        { id: "p2", badge: "Premium", price: "$12k/mo", subtitle: "For scaling enterprises", features: ["Full content production", "Advanced dashboard", "Influencer relations", "Paid ad management"], buttons: [{ text: "Contact Us", href: "#contact" }] },
        { id: "p3", badge: "Elite", price: "$25k/mo", subtitle: "For market leaders", features: ["Dedicated agency team", "Global strategy", "24/7 priority support", "Full-stack production"], buttons: [{ text: "Contact Us", href: "#contact" }] },
      ]}
      title="Agency Packages"
      description="Choose the level of engagement that fits your brand ambitions."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{ variant: "radial-gradient" }}
      text="Ready to redefine your social footprint? Let's discuss your vision."
      buttons={[{ text: "Get In Touch", href: "mailto:hello@vantagesocial.com" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/abstract-gradient-background-with-grainy-effect_84443-3119.jpg"
      logoText="Vantage Social"
      columns={[
        { title: "Company", items: [{ label: "About", href: "#about" }, { label: "Careers", href: "#" }] },
        { title: "Services", items: [{ label: "Growth", href: "#features" }, { label: "Pricing", href: "#pricing" }] },
        { title: "Legal", items: [{ label: "Privacy", href: "#" }, { label: "Terms", href: "#" }] },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
