"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
  };

  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Organic background elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 organic-shape blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary/10 blob-shape blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact <span className="text-gradient">Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a question or ready to start your project? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold mb-8">Get in touch</h2>
            
            <div className="space-y-6 mb-8">
              <Card className="bg-card/80 backdrop-blur-sm border-border hover:border-primary transition-smooth group rounded-3xl overflow-hidden shadow-soft hover:shadow-glow">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full group-hover:scale-110 group-hover:rotate-6 transition-smooth">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      Margao Goa,<br />
                      India
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-border hover:border-primary transition-smooth group rounded-3xl overflow-hidden shadow-soft hover:shadow-glow">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full group-hover:scale-110 group-hover:rotate-6 transition-smooth">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">(+91) 8767496597</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-border hover:border-primary transition-smooth group rounded-3xl overflow-hidden shadow-soft hover:shadow-glow">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full group-hover:scale-110 group-hover:rotate-6 transition-smooth">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      support@openspacetechnologies.com
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card/80 backdrop-blur-sm border-border rounded-[2.5rem] overflow-hidden shadow-soft relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 blob-shape blur-xl" />
              <CardContent className="p-6 relative z-10">
                <h3 className="text-xl font-bold mb-4">Looking for something?</h3>
                <p className="text-muted-foreground mb-4">
                  You didn't come this far to stop
                </p>
                <p className="text-sm text-muted-foreground">
                  Whether you need a consultation, have questions about our services, or want to
                  discuss your project, our team is ready to help you succeed.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/80 backdrop-blur-sm border-border rounded-[2.5rem] overflow-hidden shadow-soft">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="bg-background/50 border-border rounded-2xl h-12"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="bg-background/50 border-border rounded-2xl h-12"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 1234567890"
                    className="bg-background/50 border-border rounded-2xl h-12"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    required
                    className="bg-background/50 border-border rounded-2xl"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-full h-12 shadow-lg hover:shadow-xl transition-smooth group"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
