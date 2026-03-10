"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import AboutMetric from "@/components/sections/about/AboutMetric";
import FeatureCardTwelve from "@/components/sections/feature/FeatureCardTwelve";
import TestimonialCardFive from "@/components/sections/testimonial/TestimonialCardFive";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Star, Users, Shield, Zap, Facebook, Instagram, Linkedin, Globe } from "lucide-react";

const navItems = [
  { name: "Home", id: "/" },
  { name: "Services", id: "/services" },
  { name: "About", id: "/about" },
  { name: "Reviews", id: "/reviews" },
  { name: "Contact", id: "contact" },
];

export default function AboutPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="small"
      sizing="medium"
      background="aurora"
      cardStyle="glass-elevated"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple brandName="Smile Dental Center" navItems={navItems} />
      </div>

      <div id="trust-metrics" data-section="trust-metrics">
        <AboutMetric
          title="Why Smile Dental Center is Toronto's Most Trusted Dental Clinic"
          metrics={[
            { icon: Star, label: "Patient Rating", value: "4.9★" },
            { icon: Users, label: "Happy Patients", value: "1,100+" },
            { icon: Shield, label: "Experience", value: "15+ Years" },
            { icon: Zap, label: "Fast Appointments", value: "Minimal Wait" },
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={false}
          ariaLabel="Trust metrics section highlighting clinic achievements"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwelve
          title="Our Dental Services"
          description="Comprehensive, preventive dental care designed for your comfort and health"
          tag="Services"
          tagIcon={undefined}
          tagAnimation="slide-up"
          features={[
            {
              id: "general",
              label: "General Dentistry",
              title: "Complete Preventive Care",
              items: [
                "Regular checkups and cleanings",
                "Cavity prevention programs",
                "Professional diagnostics",
                "Personalized treatment plans",
              ],
              buttons: [
                {
                  text: "Learn More",
                  href: "/services",
                },
              ],
            },
            {
              id: "cosmetic",
              label: "Cosmetic Dentistry",
              title: "Enhance Your Natural Smile",
              items: [
                "Teeth whitening treatments",
                "Smile design consultations",
                "Veneers and bonding",
                "Aesthetic improvements",
              ],
              buttons: [
                {
                  text: "Learn More",
                  href: "/services",
                },
              ],
            },
            {
              id: "restorative",
              label: "Restorative Care",
              title: "Repair Damaged Teeth",
              items: [
                "Cavity fillings",
                "Crown and bridge work",
                "Root canal therapy",
                "Implant solutions",
              ],
              buttons: [
                {
                  text: "Learn More",
                  href: "/services",
                },
              ],
            },
            {
              id: "emergency",
              label: "Emergency Dentistry",
              title: "Urgent Care Available",
              items: [
                "Same-day emergency visits",
                "Pain relief solutions",
                "Trauma management",
                "24/7 phone support",
              ],
              buttons: [
                {
                  text: "Call Now",
                  href: "tel:+1-800-SMILE-01",
                },
              ],
            },
          ]}
          animationType="opacity"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Services offered by Smile Dental Center"
        />
      </div>

      <div id="experience" data-section="experience">
        <TestimonialCardFive
          title="What Patients Love About Us"
          description="Real stories from patients who've experienced our commitment to comfort and care"
          tag="Patient Experience"
          tagAnimation="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen, Business Owner",
              date: "Date: February 2024",
              title: "Finally Found a Dentist I Trust",
              quote: "Dr. Elahi is extremely kind, professional, and highly knowledgeable. I was nervous about my root canal, but the entire team made me feel comfortable and explained everything step-by-step. The office is beautiful and calming. Best dental experience I've had.",
              tag: "General Dentistry",
              avatarSrc: "http://img.b2bpic.net/free-photo/smiling-woman_23-2147615403.jpg",
              avatarAlt: "Sarah Chen",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-dentist-instruments_23-2151053265.jpg?_wi=5",
              imageAlt: "Modern dental treatment room",
            },
            {
              id: "2",
              name: "Michael Thompson, Executive",
              date: "Date: January 2024",
              title: "Efficient and Professional",
              quote: "I appreciate that appointments run on time with zero waiting. The staff is very friendly and respectful. They explained my options clearly and never pressured me into unnecessary treatments. This is the gold standard of dental care.",
              tag: "Preventive Care",
              avatarSrc: "http://img.b2bpic.net/free-photo/side-view-business-man-city_23-2148479568.jpg",
              avatarAlt: "Michael Thompson",
              imageSrc: "http://img.b2bpic.net/free-photo/young-happy-woman-talking-waitress-cafe_637285-8070.jpg?_wi=4",
              imageAlt: "Patient smiling confidently",
            },
            {
              id: "3",
              name: "Emily Rodriguez, Teacher",
              date: "Date: December 2023",
              title: "Made Me Feel Completely Comfortable",
              quote: "I've been terrified of dentists my whole life. The team at Smile Dental Center genuinely cared about my comfort. They took time to explain everything in simple terms and checked in constantly. I actually look forward to my appointments now.",
              tag: "Anxiety Management",
              avatarSrc: "http://img.b2bpic.net/free-photo/joyful-business-woman-with-coffee-cup_23-2148095746.jpg",
              avatarAlt: "Emily Rodriguez",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-medical-team-ready-work_23-2149152536.jpg?_wi=4",
              imageAlt: "Dental team working together",
            },
            {
              id: "4",
              name: "David Kim, Entrepreneur",
              date: "Date: November 2023",
              title: "Exceptional Expertise",
              quote: "The team's knowledge is impressive. They identified issues my previous dentist missed and explained the implications clearly. The treatment plan was honest and thorough. I've recommended them to all my colleagues.",
              tag: "Advanced Treatment",
              avatarSrc: "http://img.b2bpic.net/free-photo/middle-aged-caucasian-man-taking-photos-street-with-professional-digital-camera_1098-17634.jpg",
              avatarAlt: "David Kim",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-dentist-instruments_23-2151053265.jpg?_wi=6",
              imageAlt: "Modern dental technology",
            },
            {
              id: "5",
              name: "Jessica Park, Marketing Director",
              date: "Date: October 2023",
              title: "Treatment I Actually Understand",
              quote: "Clear communication is everything in healthcare. Dr. Elahi and team explain complex procedures in ways I can understand. They showed me before-and-after visuals and made sure I felt confident about my cosmetic dentistry plan.",
              tag: "Cosmetic Dentistry",
              avatarSrc: "http://img.b2bpic.net/free-photo/shot-beautiful-young-businesswoman-wearing-blue-chiffon-shirt-while-standing-with-folded-arms-gray-marble-wall_158595-6769.jpg",
              avatarAlt: "Jessica Park",
              imageSrc: "http://img.b2bpic.net/free-photo/young-happy-woman-talking-waitress-cafe_637285-8070.jpg?_wi=5",
              imageAlt: "Beautiful confident smile",
            },
            {
              id: "6",
              name: "Robert Wilson, Retired Professional",
              date: "Date: September 2023",
              title: "Caring, Patient-First Team",
              quote: "At my age, I've seen a lot of dentists. Smile Dental Center stands out for genuinely caring about patient wellness. They're not just about procedures—they're about preventive health and building long-term relationships. Outstanding.",
              tag: "Senior Care",
              avatarSrc: "http://img.b2bpic.net/free-photo/side-view-smiley-business-woman_23-2149442309.jpg",
              avatarAlt: "Robert Wilson",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-medical-team-ready-work_23-2149152536.jpg?_wi=5",
              imageAlt: "Professional dental team",
            },
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Patient testimonials and reviews"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Smile Dental Center"
          copyrightText="© 2024 Smile Dental Center. All rights reserved. Professional dental care committed to your wellness."
          socialLinks={[
            {
              icon: Facebook,
              href: "https://facebook.com/smiledentalcenter",
              ariaLabel: "Visit our Facebook page",
            },
            {
              icon: Instagram,
              href: "https://instagram.com/smiledentalcenter",
              ariaLabel: "Follow us on Instagram",
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/company/smile-dental-center",
              ariaLabel: "Connect with us on LinkedIn",
            },
            {
              icon: Globe,
              href: "https://smiledentalcenter.com",
              ariaLabel: "Visit our website",
            },
          ]}
          ariaLabel="Site footer with contact and social information"
        />
      </div>
    </ThemeProvider>
  );
}