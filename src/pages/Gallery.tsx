import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "visiting", name: "Visiting Cards" },
    { id: "wedding", name: "Wedding Cards" },
    { id: "bill", name: "Bill Books" },
    { id: "digital", name: "Digital Prints" },
    { id: "flex", name: "Flex & Banners" },
    { id: "corporate", name: "Corporate" }
  ];

  // Placeholder data - in real scenario, these would be actual images
  const galleryItems = [
    { id: 1, category: "visiting", title: "Executive Business Cards", image: "placeholder" },
    { id: 2, category: "visiting", title: "Premium Matte Cards", image: "placeholder" },
    { id: 3, category: "wedding", title: "Elegant Wedding Invitation", image: "placeholder" },
    { id: 4, category: "wedding", title: "Traditional Design Card", image: "placeholder" },
    { id: 5, category: "bill", title: "Company Bill Book", image: "placeholder" },
    { id: 6, category: "bill", title: "3-Part NCR Book", image: "placeholder" },
    { id: 7, category: "digital", title: "Corporate Brochure", image: "placeholder" },
    { id: 8, category: "digital", title: "Product Catalog", image: "placeholder" },
    { id: 9, category: "flex", title: "Store Front Banner", image: "placeholder" },
    { id: 10, category: "flex", title: "Event Backdrop", image: "placeholder" },
    { id: 11, category: "corporate", title: "Letterhead Design", image: "placeholder" },
    { id: 12, category: "corporate", title: "Company Folder", image: "placeholder" },
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20">
        <div className="container-custom text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Our Work Gallery</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Browse through our portfolio of quality printing work
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-secondary/30 sticky top-20 z-40 border-b border-border">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="rounded-full"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden cursor-pointer card-hover border-border group"
                onClick={() => setSelectedImage(item.id.toString())}
              >
                <div className="aspect-square bg-gradient-to-br from-secondary to-muted flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                  <div className="text-center p-6 relative z-10">
                    <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-3xl">🖨️</span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Click to view details
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No items found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          <div className="aspect-video bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-6xl">🖨️</span>
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">
                {galleryItems.find(item => item.id.toString() === selectedImage)?.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                High-quality printing sample - Contact us for similar work
              </p>
              <Button onClick={() => setSelectedImage(null)}>Close Preview</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Like What You See?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let us bring your printing vision to life with the same quality and attention to detail
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <a href="/quote">Get Your Free Quote</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
