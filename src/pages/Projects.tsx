import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A comprehensive e-commerce solution with advanced inventory management and seamless payment integration.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Healthcare App",
    category: "Mobile Development",
    description: "Patient management system with appointment scheduling, telemedicine capabilities, and health tracking.",
    tags: ["React Native", "Firebase", "AI"],
  },
  {
    title: "FinTech Dashboard",
    category: "Web Application",
    description: "Real-time financial analytics dashboard with data visualization and automated reporting.",
    tags: ["Vue.js", "Python", "PostgreSQL"],
  },
  {
    title: "Smart Automation System",
    category: "AI & Automation",
    description: "Intelligent automation platform that streamlines business processes using machine learning.",
    tags: ["Python", "TensorFlow", "AWS"],
  },
  {
    title: "Social Media Platform",
    category: "Full Stack",
    description: "Engaging social networking application with real-time messaging and content sharing.",
    tags: ["React", "GraphQL", "Redis"],
  },
  {
    title: "Cloud Management Tool",
    category: "DevOps",
    description: "Comprehensive cloud infrastructure management with monitoring, alerts, and cost optimization.",
    tags: ["Kubernetes", "Docker", "AWS"],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Organic background elements */}
      <div className="absolute top-32 left-20 w-72 h-72 bg-primary/5 blob-shape blur-3xl animate-pulse" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-primary/10 organic-shape blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise in delivering
            innovative solutions across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card/80 backdrop-blur-sm border-border hover:border-primary transition-smooth group cursor-pointer overflow-hidden rounded-3xl shadow-soft hover:shadow-glow"
              style={{
                animation: `fade-in 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-smooth relative overflow-hidden">
                  {/* Organic shape overlay */}
                  <div className="absolute inset-0 bg-primary/5 blob-shape opacity-0 group-hover:opacity-100 transition-smooth" />
                  <ExternalLink className="h-16 w-16 text-primary opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-smooth relative z-10" />
                </div>
                <div className="p-6">
                  <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20 rounded-full px-4">
                    {project.category}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="border-border text-muted-foreground rounded-full"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center relative">
          <div className="inline-block relative">
            {/* Organic accent behind */}
            <div className="absolute -inset-8 bg-primary/5 blob-shape blur-2xl" />
            <div className="relative bg-card/90 backdrop-blur-sm rounded-[3rem] p-12 border border-border shadow-soft">
              <h2 className="text-3xl font-bold mb-4">Have a project in mind?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's collaborate to bring your vision to life with cutting-edge technology and
                creative solutions.
              </p>
              <a
                href="/contact"
                className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold transition-smooth shadow-lg hover:shadow-xl"
              >
                Start your project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
