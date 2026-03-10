"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroCarouselLogo from "@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo";
import AboutMetric from "@/components/sections/about/AboutMetric";
import FeatureCardTwelve from "@/components/sections/feature/FeatureCardTwelve";
import TestimonialCardFive from "@/components/sections/testimonial/TestimonialCardFive";
import FaqSplitText from "@/components/sections/faq/FaqSplitText";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Star, Users, Shield, Zap, Facebook, Instagram, Linkedin, Globe } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
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
      {/* Navigation */}
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Smile Dental Center"
          navItems={[
            { name: "Home", id: "/" },
            { name: "Services", id: "/services" },
            { name: "About", id: "/about" },
            { name: "Reviews", id: "/reviews" },
            { name: "Contact", id: "contact" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="Smile Dental Center"
          description="Gentle, Modern Dentistry You Can Trust. Experience comfortable, professional dental care with a team that listens and explains everything clearly."
          buttons={[
            {
              text: "Book Appointment",
              href: "contact",
            },
            {
              text: "Call Now",
              href: "tel:+1-800-SMILE-01",
            },
          ]}
          slides={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/young-happy-woman-talking-waitress-cafe_637285-8070.jpg",
              imageAlt: "Smiling patient at Smile Dental Center",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-dentist-instruments_23-2151053265.jpg",
              imageAlt: "Modern dental treatment room",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-medical-team-ready-work_23-2149152536.jpg",
              imageAlt: "Professional dental team",
            },
          ]}
          autoplayDelay={4000}
          showDimOverlay={true}
          ariaLabel="Hero section with dental services carousel"
        />
      </div>

      {/* Trust Metrics */}
      <div id="trust-metrics" data-section="trust-metrics">
        <AboutMetric
          title="Why Smile Dental Center is Toronto's Most Trusted Dental Clinic"
          metrics={[
            {
              icon: Star,
              label: "Patient Rating",
              value: "4.9★",
            },
            {
              icon: Users,
              label: "Happy Patients",
              value: "1,100+",
            },
            {
              icon: Shield,
              label: "Experience",
              value: "15+ Years",
            },
            {
              icon: Zap,
              label: "Fast Appointments",
              value: "Minimal Wait",
            },
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={false}
          ariaLabel="Trust metrics section highlighting clinic achievements"
        />
      </div>

      {/* Services Section */}
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

      {/* Testimonials Section */}
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
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-dentist-instruments_23-2151053265.jpg",
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
              imageSrc: "http://img.b2bpic.net/free-photo/young-happy-woman-talking-waitress-cafe_637285-8070.jpg",
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
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-medical-team-ready-work_23-2149152536.jpg",
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
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-dentist-instruments_23-2151053265.jpg",
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
              imageSrc: "http://img.b2bpic.net/free-photo/young-happy-woman-talking-waitress-cafe_637285-8070.jpg",
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
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-medical-team-ready-work_23-2149152536.jpg",
              imageAlt: "Professional dental team",
            },
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Patient testimonials and reviews"
        />
      </div>

      {/* FAQ Section */}
      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Find answers to common questions about our dental services, appointment process, and patient care philosophy."
          faqs={[
            {
              id: "1",
              title: "What should I expect on my first visit?",
              content: "Your first visit includes a warm welcome, thorough examination with X-rays, and a detailed consultation. We'll discuss your dental history, health concerns, and create a personalized treatment plan with clear explanations. No pressure—just professional care tailored to you.",
            },
            {
              id: "2",
              title: "How long do appointments typically take?",
              content: "Most appointments run 45-60 minutes. We respect your time and schedule efficiently, so you rarely wait. Emergency visits are prioritized and fit into our schedule same-day when possible.",
            },
            {
              id: "3",
              title: "Do you see nervous or anxious patients?",
              content: "Absolutely. We specialize in making nervous patients comfortable. Our team takes time to explain procedures, responds to concerns, and can discuss sedation options if needed. Your comfort is our priority.",
            },
            {
              id: "4",
              title: "What is your approach to preventive dentistry?",
              content: "Prevention is at the core of our practice. We emphasize regular cleanings, proper home care education, and early detection of issues. This approach saves you time, money, and discomfort long-term.",
            },
            {
              id: "5",
              title: "How often should I schedule cleanings?",
              content: "Most patients benefit from professional cleanings every 6 months. We may recommend more frequent visits based on your individual health needs. Regular cleanings prevent major issues from developing.",
            },
            {
              id: "6",
              title: "What payment options do you offer?",
              content: "We accept all major insurance plans, offer flexible payment arrangements, and provide financing options for larger treatments. Contact us to discuss options that work for your budget.",
            },
            {
              id: "7",
              title: "Do you offer emergency dental care?",
              content: "Yes. We prioritize emergencies and typically accommodate same-day visits. Call our emergency line for immediate assistance with pain, trauma, or urgent dental issues.",
            },
            {
              id: "8",
              title: "What makes your treatment plans different?",
              content: "We focus on honest, patient-centered treatment planning. We explain all options—what's needed now versus what can wait—and never recommend unnecessary procedures. You always have a clear understanding before treatment begins.",
            },
          ]}
          textPosition="left"
          faqsAnimation="slide-up"
          useInvertedBackground={false}
          animationType="smooth"
          showCard={true}
          ariaLabel="FAQ section with patient questions"
        />
      </div>

      {/* Contact Section */}
      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Book Your Visit Today"
          description="Schedule your appointment with Smile Dental Center. Our team is ready to provide the gentle, professional care you deserve. Existing patients, call us directly for faster scheduling."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Full Name",
              required: true,
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true,
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true,
            },
            {
              name: "preferredDate",
              type: "date",
              placeholder: "Preferred Date",
              required: false,
            },
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your dental needs or concerns. Are you a new or returning patient? Any specific treatments you're interested in?",
            rows: 4,
            required: false,
          }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-psd/panorama-bright-reception-waiting-room-clinic-with-desk-generative-ai_587448-2075.jpg"
          imageAlt="Modern dental clinic reception area"
          mediaAnimation="opacity"
          mediaPosition="right"
          buttonText="Request Appointment"
          ariaLabel="Contact form to book dental appointment"
        />
      </div>

      {/* Footer */}
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