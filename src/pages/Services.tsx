import { Card, CardContent } from "@/components/ui/card";
import { Globe, Smartphone, Database, Code, Palette, Search, Brain, Cloud, Zap } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Build responsive, fast, and SEO-optimized websites that deliver exceptional user experiences and drive business growth.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Create native and cross-platform mobile applications that engage users and provide seamless experiences across all devices.",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Develop robust, scalable backend systems and APIs that power your applications with reliability and performance.",
  },
  {
    icon: Code,
    title: "Frontend Development",
    description: "Craft beautiful, interactive user interfaces with modern frameworks and best practices for optimal user engagement.",
  },
  {
    icon: Palette,
    title: "UI/UX Development",
    description: "Design intuitive and visually stunning interfaces that prioritize user experience and accessibility.",
  },
  {
    icon: Palette,
    title: "Graphic Designing",
    description: "Create compelling visual content and brand identities that communicate your message effectively.",
  },
  {
    icon: Search,
    title: "SEO Management",
    description: "Optimize your online presence with strategic SEO practices that improve visibility and drive organic traffic.",
  },
  {
    icon: Brain,
    title: "AI & Automation Tool",
    description: "Leverage artificial intelligence and automation to streamline operations, reduce costs, and enhance decision-making.",
  },
  {
    icon: Cloud,
    title: "Cloud Management",
    description: "Deploy and manage scalable cloud infrastructure that ensures reliability, security, and cost-effectiveness.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Organic background elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/5 blob-shape blur-3xl animate-pulse" />
      <div className="absolute bottom-40 right-0 w-80 h-80 bg-primary/10 organic-shape blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At <span className="text-primary font-semibold">Open Space Technologies</span>, we
            redefine possibilities through tailored software solutions that drive innovation and
            deliver measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card/80 backdrop-blur-sm border-border hover:border-primary transition-smooth group cursor-pointer rounded-3xl overflow-hidden shadow-soft hover:shadow-glow"
              style={{
                animation: `fade-in 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <CardContent className="p-8">
                <div className="mb-6 inline-block p-6 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full group-hover:scale-110 group-hover:rotate-6 transition-smooth">
                  <service.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-smooth">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 relative bg-card/90 backdrop-blur-sm rounded-[3rem] p-12 border border-border overflow-hidden shadow-soft">
          {/* Organic accents */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/10 blob-shape blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/5 organic-shape blur-2xl" />
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
              <Zap className="h-16 w-16 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can help transform your ideas into powerful digital solutions.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold transition-smooth shadow-lg hover:shadow-xl"
            >
              Schedule a consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
