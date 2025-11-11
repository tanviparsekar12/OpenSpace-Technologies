import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Globe, Smartphone, Database, Code, Palette, Search, Brain, Cloud, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import aboutTeam from "@/assets/about-team.jpg";

const services = [
  { icon: Globe, title: "Website Development" },
  { icon: Smartphone, title: "Mobile Development" },
  { icon: Database, title: "Backend Development" },
  { icon: Code, title: "Frontend Development" },
  { icon: Palette, title: "UI/UX Development" },
  { icon: Palette, title: "Graphic Designing" },
  { icon: Search, title: "SEO Management" },
  { icon: Brain, title: "AI & Automation Tool" },
  { icon: Cloud, title: "Cloud Management" },
];

const highlights = [
  "Innovative approaches for complex challenges",
  "Future-focused digital transformation",
  "Driving change with visionary leadership",
  "Building sustainable digital ecosystems",
];

const Home = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      
      <section className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(26, 35, 48, 0.9), rgba(26, 35, 48, 0.85)), url(${heroBg})`,
          }}
        />
        
        
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 blob-shape blur-3xl animate-pulse z-0" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary/5 organic-shape blur-3xl animate-pulse z-0" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 animate-fade-in">
              <Sparkles className="h-16 w-16 text-primary mx-auto animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Empowering ideas through{" "}
              <span className="text-gradient">Code</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Embark on a journey of innovation and efficiency with our cutting-edge
              software development solutions. At the intersection of creativity and code,
              we empower ideas to flourish.
            </p>
            <Link to="/contact">
              <Button size="lg" className="rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-smooth group">
                Get consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </Link>
          </div>
        </div>

        
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      
      <section className="py-20 bg-background relative">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 organic-shape blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-card/80 backdrop-blur-sm border-border hover:border-primary transition-smooth cursor-pointer group rounded-3xl overflow-hidden shadow-soft hover:shadow-glow"
                style={{
                  animation: `fade-in 0.5s ease-out ${index * 0.05}s both`
                }}
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full mb-4 group-hover:scale-110 group-hover:rotate-6 transition-smooth">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-sm font-medium">{service.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-20 relative overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 blob-shape blur-3xl animate-pulse" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Pioneering solutions shaping digital{" "}
                <span className="text-gradient">futures.</span>
              </h2>
              <div className="space-y-4 mb-8">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-lg text-muted-foreground">{highlight}</p>
                  </div>
                ))}
              </div>
              <Link to="/about">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-6 shadow-lg hover:shadow-xl transition-smooth group">
                  More about us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary/5 organic-shape blur-2xl" />
              <img
                src={aboutTeam}
                alt="Team collaboration"
                className="relative rounded-[2.5rem] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 relative">
        
        <div className="absolute top-0 left-0 right-0 z-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full rotate-180">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="hsl(var(--card))"/>
          </svg>
        </div>

        <div className="bg-card pt-12 pb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 blob-shape blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our services</h2>
              <p className="text-xl text-muted-foreground">
                At <span className="text-primary font-semibold">Open Space Technologies</span>, we
                redefine possibilities through tailored software solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="bg-background/80 backdrop-blur-sm border-border hover:border-primary transition-smooth rounded-3xl overflow-hidden shadow-soft hover:shadow-glow group">
                <CardContent className="p-8">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full inline-block mb-4 group-hover:scale-110 group-hover:rotate-6 transition-smooth">
                    <Smartphone className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Mobile apps</h3>
                  <p className="text-muted-foreground">
                    Combining creativity and technical expertise to craft bespoke mobile
                    solutions that elevate your brand.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background/80 backdrop-blur-sm border-border hover:border-primary transition-smooth rounded-3xl overflow-hidden shadow-soft hover:shadow-glow group">
                <CardContent className="p-8">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full inline-block mb-4 group-hover:scale-110 group-hover:rotate-6 transition-smooth">
                    <Brain className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">AI & automation tools</h3>
                  <p className="text-muted-foreground">
                    Our AI and automation tools streamline operations and drive smarter
                    decision-making by harnessing data insights, enhancing efficiency, and
                    minimising manual tasks.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background/80 backdrop-blur-sm border-border hover:border-primary transition-smooth rounded-3xl overflow-hidden shadow-soft hover:shadow-glow group">
                <CardContent className="p-8">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full inline-block mb-4 group-hover:scale-110 group-hover:rotate-6 transition-smooth">
                    <Globe className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Websites</h3>
                  <p className="text-muted-foreground">
                    Our website development services blend creativity and functionality to
                    bring your vision to life, ensuring your online presence captivates and
                    engages.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Link to="/services">
                <Button className="rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-smooth group">
                  Explore services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-primary/5 organic-shape blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative bg-card/90 backdrop-blur-sm rounded-[3rem] p-12 md:p-16 border border-border overflow-hidden shadow-soft">
              
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/10 blob-shape blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/5 organic-shape blur-2xl" />
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Looking for something?
                </h2>
                <p className="text-2xl text-muted-foreground mb-8">
                  You didn't come this far to stop
                </p>
                <Link to="/contact">
                  <Button size="lg" className="rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-smooth group">
                    Get in touch
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
