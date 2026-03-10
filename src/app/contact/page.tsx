"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Facebook, Instagram, Linkedin, Globe } from "lucide-react";

export default function ContactPage() {
  const navItems = [
    { name: "Home", id: "/" },
    { name: "Services", id: "/services" },
    { name: "About", id: "/about" },
    { name: "Reviews", id: "/reviews" },
    { name: "Contact", id: "contact" },
  ];

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
        <NavbarStyleApple
          brandName="Smile Dental Center"
          navItems={navItems}
        />
      </div>

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
          imageAlt="modern dental clinic interior professional"
          mediaAnimation="opacity"
          mediaPosition="right"
          buttonText="Request Appointment"
          ariaLabel="Contact form to book dental appointment"
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