import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, FileText, Book, Printer, Image as ImageIcon, Building2, Package, Shirt } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: CreditCard,
      title: "Visiting Card Printing",
      description: "Make a lasting first impression with professionally designed business cards",
      details: [
        "Multiple paper options: 300gsm, 350gsm art card",
        "Finish options: Matte, Glossy, Textured",
        "Single or double-sided printing",
        "Standard size: 3.5\" x 2\"",
        "Custom sizes available",
        "Logo and brand design assistance",
        "Minimum order: 100 cards",
        "Express delivery available"
      ]
    },
    {
      icon: FileText,
      title: "Wedding & Invitation Card Printing",
      description: "Elegant and customized cards for your special occasions",
      details: [
        "Wedding invitation cards",
        "Engagement ceremony cards",
        "Birthday party invitations",
        "Anniversary cards",
        "Custom designs and themes",
        "Premium paper quality",
        "Foil stamping and embossing available",
        "Envelope printing included"
      ]
    },
    {
      icon: Book,
      title: "Bill Books & NCR Books",
      description: "Multi-copy carbonless books for invoicing and record-keeping",
      details: [
        "2, 3, 4, or 5 part NCR books",
        "Custom numbering",
        "Company logo and branding",
        "Various sizes: A4, A5, A6",
        "Hard cover binding",
        "Perforated for easy tear-off",
        "Duplicate, triplicate options",
        "Delivery challan books"
      ]
    },
    {
      icon: Printer,
      title: "Digital Printing Services",
      description: "High-quality digital printing for quick turnaround projects",
      details: [
        "Flyers and leaflets",
        "Brochures and catalogs",
        "Posters and handbills",
        "Booklets and magazines",
        "Menus and price lists",
        "Certificates and awards",
        "Variable data printing",
        "Same-day service available"
      ]
    },
    {
      icon: Printer,
      title: "Offset Printing",
      description: "Large volume printing with superior quality and cost-effectiveness",
      details: [
        "Magazines and catalogs",
        "Newspaper printing",
        "Large brochure runs",
        "Annual reports",
        "Packaging materials",
        "Labels and stickers",
        "High-quality color matching",
        "Cost-effective for bulk orders"
      ]
    },
    {
      icon: ImageIcon,
      title: "Flex, Banner & Poster Printing",
      description: "Large format printing for maximum visibility and impact",
      details: [
        "Indoor and outdoor banners",
        "Flex printing (vinyl)",
        "Backlit flex for displays",
        "Standees and cutouts",
        "Wall graphics",
        "Event backdrops",
        "Trade show displays",
        "Weather-resistant materials"
      ]
    },
    {
      icon: Building2,
      title: "Corporate & Office Printing",
      description: "Complete stationery solutions for your business",
      details: [
        "Letterheads",
        "Envelopes (all sizes)",
        "File folders and covers",
        "Company profiles",
        "Presentation folders",
        "Note pads and memo pads",
        "Calendars (table & wall)",
        "Annual diaries"
      ]
    },
    {
      icon: Package,
      title: "Custom & Specialty Printing",
      description: "Unique printing solutions for special requirements",
      details: [
        "ID cards and badges",
        "Stickers and labels",
        "Tags and hang tags",
        "Gift boxes and packaging",
        "Calendar printing",
        "Greeting cards",
        "Custom stamps",
        "Personalized gifts"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20">
        <div className="container-custom text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Our Printing Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Comprehensive printing solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover border-border">
                <CardHeader>
                  <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <span className="text-accent mt-0.5">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link to="/quote">Get Quote for This Service</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Don't See What You're Looking For?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We offer custom printing solutions for unique requirements. Contact us to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="default">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/quote">Request Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
