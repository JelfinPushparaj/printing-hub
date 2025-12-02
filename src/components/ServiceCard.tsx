import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon: Icon, title, description, features }: ServiceCardProps) => {
  return (
    <Card className="card-hover border-border">
      <CardHeader>
        <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <CardTitle className="font-serif text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
              <span className="text-accent mt-0.5">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button asChild variant="outline" className="w-full">
          <Link to="/quote">Request Quote</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
