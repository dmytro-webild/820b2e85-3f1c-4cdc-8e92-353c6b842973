"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import FeatureCardTwelve from "@/components/sections/feature/FeatureCardTwelve";
import FaqSplitText from "@/components/sections/faq/FaqSplitText";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Facebook, Instagram, Linkedin, Globe } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
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

      {/* Services Detail Section */}
      <div id="services-detail" data-section="services-detail">
        <FeatureCardTwelve
          title="Comprehensive Dental Services"
          description="From preventive care to advanced restorative treatments, we offer a full spectrum of dental services tailored to your needs."
          tag="Our Expertise"
          tagAnimation="slide-up"
          features={[
            {
              id: "general-detail",              label: "General Dentistry",              title: "Preventive & Restorative Care",              items: [
                "Routine exams and cleanings",                "Digital X-ray diagnostics",                "Cavity fillings with composite materials",                "Scaling and root planing",                "Personalized oral hygiene guidance"],
              buttons: [
                {
                  text: "Schedule Now",                  href: "contact"},
              ],
            },
            {
              id: "cosmetic-detail",              label: "Cosmetic Dentistry",              title: "Smile Enhancement & Aesthetics",              items: [
                "Professional teeth whitening",                "Porcelain veneers",                "Smile design consultations",                "Bonding and contouring",                "Gum reshaping"],
              buttons: [
                {
                  text: "Explore Options",                  href: "contact"},
              ],
            },
            {
              id: "advanced-detail",              label: "Advanced Procedures",              title: "Complex Treatments & Solutions",              items: [
                "Root canal therapy",                "Dental implants",                "Crown and bridge work",                "Wisdom tooth extraction",                "Surgical consultations"],
              buttons: [
                {
                  text: "Learn More",                  href: "contact"},
              ],
            },
            {
              id: "emergency-detail",              label: "Emergency Dentistry",              title: "Urgent Care Available 24/7",              items: [
                "Same-day emergency appointments",                "Pain management and relief",                "Trauma and injury treatment",                "Acute infection management",                "24/7 emergency phone line"],
              buttons: [
                {
                  text: "Call Emergency Line",                  href: "tel:+1-800-SMILE-01"},
              ],
            },
          ]}
          animationType="opacity"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Detailed dental services and procedures"
        />
      </div>

      {/* Services FAQ */}
      <div id="services-faq" data-section="services-faq">
        <FaqSplitText
          sideTitle="Service Questions"
          sideDescription="Learn more about our dental procedures, technology, and what to expect."
          faqs={[
            {
              id: "s1",              title: "Are cosmetic procedures covered by insurance?",              content: "Most cosmetic procedures are not covered by standard dental insurance. However, some restorative cosmetic treatments may be partially covered. We recommend checking with your insurance provider and our team can help you understand your coverage."},
            {
              id: "s2",              title: "How long do dental implants last?",              content: "With proper care and maintenance, dental implants can last 20+ years or a lifetime. They're the most durable tooth replacement option available. Regular cleanings and good oral hygiene are essential for long-term success."},
            {
              id: "s3",              title: "Is teeth whitening safe?",              content: "Professional teeth whitening at our clinic is safe and effective. We use dental-grade whitening solutions with minimal sensitivity. Results typically last 6-12 months depending on lifestyle and diet."},
            {
              id: "s4",              title: "What should I do if I have a dental emergency?",              content: "Call our emergency line immediately at +1-800-SMILE-01. We maintain same-day appointment availability for dental emergencies. For severe trauma, visit your nearest emergency room first if needed."},
            {
              id: "s5",              title: "How do I prepare for a root canal?",              content: "No special preparation is needed. Continue taking prescribed medications, eat a light meal before the appointment, and wear comfortable clothing. We'll handle the rest. Most root canals are completed in one or two visits."},
            {
              id: "s6",              title: "What are the benefits of dental implants?",              content: "Implants restore function, preserve bone, improve appearance, and feel like natural teeth. Unlike bridges, implants don't require grinding down adjacent teeth. They're also easier to maintain than other tooth replacement options."},
          ]}
          textPosition="left"
          faqsAnimation="slide-up"
          useInvertedBackground={false}
          animationType="smooth"
          showCard={true}
          ariaLabel="FAQ section for dental services"
        />
      </div>

      {/* Services Contact CTA */}
      <div id="services-contact" data-section="services-contact">
        <ContactSplitForm
          title="Ready to Transform Your Smile?"
          description="Contact us today to discuss which services are right for you. Our team will help create a personalized treatment plan that meets your goals and budget."
          inputs={[
            {
              name: "name",              type: "text",              placeholder: "Full Name",              required: true,
            },
            {
              name: "email",              type: "email",              placeholder: "Email Address",              required: true,
            },
            {
              name: "phone",              type: "tel",              placeholder: "Phone Number",              required: true,
            },
            {
              name: "serviceInterest",              type: "text",              placeholder: "Services of Interest",              required: false,
            },
          ]}
          textarea={{
            name: "message",            placeholder: "Tell us about your specific needs or concerns.",            rows: 4,
            required: false,
          }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/close-up-dentist-instruments_23-2151053265.jpg"
          imageAlt="Dental equipment and technology"
          mediaAnimation="opacity"
          mediaPosition="right"
          buttonText="Request Consultation"
          ariaLabel="Contact form for service inquiries"
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
              href: "https://facebook.com/smiledentalcenter",              ariaLabel: "Visit our Facebook page"},
            {
              icon: Instagram,
              href: "https://instagram.com/smiledentalcenter",              ariaLabel: "Follow us on Instagram"},
            {
              icon: Linkedin,
              href: "https://linkedin.com/company/smile-dental-center",              ariaLabel: "Connect with us on LinkedIn"},
            {
              icon: Globe,
              href: "https://smiledentalcenter.com",              ariaLabel: "Visit our website"},
          ]}
          ariaLabel="Site footer with contact and social information"
        />
      </div>
    </ThemeProvider>
  );
}