import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Users, Award } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const values = [
  {
    icon: Target,
    title: "Innovative approaches for complex challenges",
    description: "We tackle the most difficult problems with creative, forward-thinking solutions.",
  },
  {
    icon: Lightbulb,
    title: "Future-focused digital transformation",
    description: "Embracing tomorrow's technology today to keep you ahead of the curve.",
  },
  {
    icon: Users,
    title: "Driving change with visionary leadership",
    description: "Leading the industry with bold ideas and strategic execution.",
  },
  {
    icon: Award,
    title: "Building sustainable digital ecosystems",
    description: "Creating solutions that are built to last and scale with your growth.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Organic background elements */}
      <div className="absolute top-40 right-10 w-80 h-80 bg-primary/5 organic-shape blur-3xl animate-pulse" />
      <div className="absolute bottom-60 left-10 w-96 h-96 bg-primary/10 blob-shape blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient">Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At <span className="text-primary font-semibold">Open Space Technologies</span>, we are
            passionate about transforming ideas into reality through innovative software solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-6">
              Pioneering solutions shaping digital{" "}
              <span className="text-gradient">futures.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a team of dedicated professionals committed to delivering exceptional digital
              experiences. Our expertise spans across web development, mobile applications, AI
              solutions, and cloud infrastructure.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a focus on innovation and quality, we help businesses of all sizes achieve their
              digital transformation goals through cutting-edge technology and strategic thinking.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary/5 organic-shape blur-2xl" />
            <img
              src={aboutTeam}
              alt="Our team at work"
              className="relative rounded-[2.5rem] shadow-2xl"
            />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-card/80 backdrop-blur-sm border-border hover:border-primary transition-smooth group rounded-3xl overflow-hidden shadow-soft hover:shadow-glow"
              >
                <CardContent className="p-8">
                  <div className="mb-6 inline-block p-6 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full group-hover:scale-110 group-hover:rotate-6 transition-smooth">
                    <value.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-smooth">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="relative bg-card/90 backdrop-blur-sm rounded-[3rem] p-12 border border-border text-center overflow-hidden shadow-soft">
          {/* Organic accents */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/10 blob-shape blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/5 organic-shape blur-2xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Join us on this journey</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're looking to build a new product, scale your existing platform, or explore
              innovative technologies, we're here to help you succeed.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold transition-smooth shadow-lg hover:shadow-xl"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
