const BrandLogos = () => {
  const brands = [
    { name: "Philips Hue", logo: "PH" },
    { name: "Sonos", logo: "SO" },
    { name: "Nest", logo: "NE" },
    { name: "Samsung", logo: "SS" },
    { name: "LG", logo: "LG" },
    { name: "Apple HomeKit", logo: "AH" },
    { name: "Google Home", logo: "GH" },
    { name: "Amazon Alexa", logo: "AA" },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Sistemas <span className="text-accent">compatibles</span>
          </h2>
          <p className="text-muted-foreground">
            Trabajamos con las mejores marcas del mercado
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="bg-card rounded-xl p-6 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-muted-foreground">
                  {brand.logo}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 text-lg">
          ... y muchos más
        </p>
      </div>
    </section>
  );
};

export default BrandLogos;