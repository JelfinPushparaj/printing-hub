import { Award, Users, Target, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We never compromise on quality. Every print job undergoes strict quality control to ensure perfection."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction is our priority. We work closely with you to understand and deliver exactly what you need."
    },
    {
      icon: Target,
      title: "On-Time Delivery",
      description: "We understand deadlines matter. Our efficient workflow ensures your orders are delivered on time, every time."
    },
    {
      icon: TrendingUp,
      title: "Continuous Innovation",
      description: "We stay updated with the latest printing technology to provide you with the best solutions."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20">
        <div className="container-custom text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">About PrintPress</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Your trusted partner in quality printing solutions since our establishment
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                PrintPress started with a simple vision: to provide high-quality, affordable printing services to businesses and individuals in our community. What began as a small printing shop has grown into a full-service printing press, serving thousands of satisfied customers.
              </p>
              <p>
                Over the years, we've invested in state-of-the-art printing equipment and trained our team to deliver exceptional results. From traditional offset printing to modern digital solutions, we've evolved with the industry while maintaining our commitment to quality and customer service.
              </p>
              <p>
                Today, PrintPress is known for reliability, quality craftsmanship, and innovative solutions. Whether you need business cards, wedding invitations, or large format banners, we bring the same dedication and attention to detail to every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-border">
              <CardContent className="pt-6">
                <h3 className="font-serif text-3xl font-bold mb-4 text-primary">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To deliver exceptional printing solutions that exceed our customers' expectations through quality craftsmanship, innovative technology, and outstanding customer service. We strive to be the printing partner you can always count on.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="pt-6">
                <h3 className="font-serif text-3xl font-bold mb-4 text-primary">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become the leading printing press in the region, recognized for our commitment to quality, innovation, and sustainability. We envision a future where every business and individual has access to premium printing services at affordable prices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our values guide everything we do and reflect our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-hover border-border">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-xl opacity-90">Years of Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-xl opacity-90">Happy Customers</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50K+</div>
              <div className="text-xl opacity-90">Projects Completed</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
