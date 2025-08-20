"use client";

import { useState, useRef, useEffect } from "react"; // Added useRef and useEffect

// SVG Icon Components remain the same
const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const LocationIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-4.3 1.4 -4.3-2.5 -6-3m12 5v-3.5c0-1 .1-1.4 -.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1-.3-3.3 1.3a11.5 11.5 0 0 0-6 0c-2.3-1.6-3.3-1.3-3.3-1.3a4.2 4.2 0 0 0-.1 3.2a4.6 4.6 0 0 0-1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2v3.5" />
  </svg>
);


export function ContactSection() {
  const [emailCopied, setEmailCopied] = useState(false);

  // --- START OF CHANGES ---
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
      }
    };
    
    const handleMouseLeave = () => {
        setMousePosition({ x: -1000, y: -1000 });
    }

    const currentRef = sectionRef.current;
    currentRef?.addEventListener('mousemove', handleMouseMove);
    currentRef?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      currentRef?.removeEventListener('mousemove', handleMouseMove);
      currentRef?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  // --- END OF CHANGES ---

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("abhyu.adhikari@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const contactInfo = [
    { icon: MailIcon, label: "Email", value: "abhyu.adhikari@gmail.com" },
    { icon: PhoneIcon, label: "Phone", value: "+977 9748284848" },
    { icon: LocationIcon, label: "Location", value: "Kathmandu, Nepal" },
  ];

  const socialLinks = [
    { label: "LinkedIn", url: "https://linkedin.com/in/abhyudit-adhikari", icon: LinkedinIcon },
    { label: "GitHub", url: "https://github.com/Abh03", icon: GithubIcon },
  ];

  return (
    <section
      ref={sectionRef} // Add ref to the section
      className="py-20 px-6 relative z-30 overflow-hidden" // Add overflow-hidden
  style={{
    backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url('/window-bg.png')
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}     >
      {/* --- START OF CHANGES --- */}
      {/* Add the two background layers for the glowing grid effect */}
      <div 
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "2rem 2rem",
        }}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 1) 1px, transparent 1px)",
          backgroundSize: "2rem 2rem",
          maskImage: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(circle 125px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
        }}
      />
      {/* --- END OF CHANGES --- */}

      {/* This wrapper div lifts the content above the background layers */}
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2
              className="text-5xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "'Thiket'", color: "#00FFFF" }}
            >
              Let's Build the Future
            </h2>
            <p
              className="text-xl leading-relaxed mx-auto max-w-2xl"
              style={{ color: "#E5E7EB" }}
            >
              I am currently seeking innovative Machine Learning opportunities. If
              you have a project or a role where my skills can make an impact, I
              would be delighted to connect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Get In Touch Card */}
            <div
              className="p-8 rounded-lg text-left"
              style={{
                backgroundColor: "#111829",
                border: "1px solid rgba(182,182,182,0.5)",
              }}
            >
              <h3
                className="text-2xl font-semibold mb-6"
                style={{ color: "#E5E7EB" }}
              >
                Get In Touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map((contact) => (
                  <div key={contact.label} className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "rgba(0, 255, 255, 0.1)" }}
                    >
                      <contact.icon
                        className="w-5 h-5"
                        style={{ color: "#00FFFF" }}
                      />
                    </div>
                    <div>
                      <p className="text-sm" style={{ color: "#9CA3AF" }}>
                        {contact.label}
                      </p>
                      <p className="font-medium" style={{ color: "#E5E7EB" }}>
                        {contact.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ready to Collaborate Card */}
            <div
              className="p-8 rounded-lg text-left flex flex-col justify-between"
              style={{
                backgroundColor: "#111829",
                border: "1px solid rgba(182,182,182,0.5)",
              }}
            >
              <div>
                <h3
                  className="text-2xl font-semibold mb-6"
                  style={{ color: "#E5E7EB" }}
                >
                  Ready to Collaborate?
                </h3>
                <p className="mb-8" style={{ color: "#9CA3AF" }}>
                  Whether it's a groundbreaking ML project or an innovative
                  startup opportunity, let's discuss how we can create something
                  amazing together.
                </p>
              </div>
              <div className="max-w-md mx-auto p-2 rounded-lg">
                <button
                  onClick={handleEmailCopy}
                  className="w-full text-center px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: "#00FFFF",
                    color: "#000000",
                    boxShadow: "0 0 15px rgba(0, 255, 255, 0.5)",
                  }}
                >
                  {emailCopied ? "Email Copied!" : "Copy Email Address"}
                </button>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110"
                style={{
                  backgroundColor: "#111829",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#E5E7EB",
                }}
              >
                <social.icon className="w-8 h-8" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}