import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      {/* Organic background accent */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 blob-shape blur-3xl" />
      
      {/* Wave divider */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0L60 8C120 16 240 32 360 37.3C480 43 600 37 720 34.7C840 32 960 32 1080 37.3C1200 43 1320 53 1380 58.7L1440 64V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0V0Z" fill="hsl(var(--card))"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/src/assets/logo.png"
                alt="Open Space Logo"
                width={120}
                height={40}
                // priority
              />
            </div>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4">Address</h3>
            <p className="text-muted-foreground text-sm">
              Margao Goa,<br />
              India
            </p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4">Contacts</h3>
            <p className="text-muted-foreground text-sm mb-2">
              (+91) 8767496597
            </p>
            <p className="text-muted-foreground text-sm">
              support@openspacetechnologies.com
            </p>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © Open Space Technologies 2024
          </p>
          
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/people/Open-Space-Technologies/61568170216389/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full hover:scale-110 hover:rotate-6 transition-smooth"
            >
              <Facebook className="h-5 w-5 text-primary" />
            </a>
            <a
              href="https://www.instagram.com/openspacetech/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full hover:scale-110 hover:rotate-6 transition-smooth"
            >
              <Instagram className="h-5 w-5 text-primary" />
            </a>
            <a
              href="https://www.linkedin.com/company/open-space-technologies/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full hover:scale-110 hover:rotate-6 transition-smooth"
            >
              <Linkedin className="h-5 w-5 text-primary" />
            </a>
            <a
              href="https://twitter.com/Open_SpaceTech"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full hover:scale-110 hover:rotate-6 transition-smooth"
            >
              <Twitter className="h-5 w-5 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
