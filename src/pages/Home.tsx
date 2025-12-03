import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, DollarSign, Award, FileText, CreditCard, Book, Printer, Image as ImageIcon } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import heroImage from "@/assets/hero-printing.jpg";

const Home = () => {
  const services = [
    {
      icon: CreditCard,
      title: "Visiting Cards",
      description: "Professional business cards that make a lasting impression",
      features: ["Premium paper quality", "Multiple finish options", "Fast turnaround", "Custom designs"]
    },
    {
      icon: FileText,
      title: "Wedding Cards",
      description: "Beautiful invitation cards for your special day",
      features: ["Elegant designs", "Custom printing", "Various sizes", "Quality assurance"]
    },
    {
      icon: Book,
      title: "Bill Books & NCR",
      description: "Multi-copy NCR books for your business needs",
      features: ["2-5 part NCR books", "Custom numbering", "Branded designs", "Durable binding"]
    },
    {
      icon: Printer,
      title: "Digital Printing",
      description: "High-quality digital printing for all your needs",
      features: ["Quick turnaround", "Vibrant colors", "Any quantity", "Cost-effective"]
    },
    {
      icon: ImageIcon,
      title: "Flex & Banners",
      description: "Large format printing for maximum visibility",
      features: ["Weather resistant", "Indoor/outdoor use", "Custom sizes", "HD quality"]
    },
    {
      icon: FileText,
      title: "Corporate Printing",
      description: "Complete office stationery solutions",
      features: ["Letterheads", "Envelopes", "Folders", "Brochures"]
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "High Quality",
      description: "Premium materials and advanced printing technology"
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality"
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Competitive rates for all printing services"
    },
    {
      icon: CheckCircle,
      title: "All-in-One Solution",
      description: "Complete printing services under one roof"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-accent text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="Printing Press" className="w-full h-full object-cover" />
        </div>
        <div className="relative container-custom py-24 md:py-32">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Quality Printing Solutions for Every Need
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              From business cards to banners, we deliver exceptional printing services with fast turnaround and affordable prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <Link to="/quote">Get a Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Why Choose K S Raj Printers?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine quality, speed, and affordability to deliver the best printing experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center border-border">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Printing Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive printing solutions for businesses and individuals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="default">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to Bring Your Ideas to Print?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get in touch with us today for a free quote. Our team is ready to help you with all your printing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link to="/quote">Request a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
