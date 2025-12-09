const VideoSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Descubre <span className="text-gradient">DiraSmart</span> en Acción
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mira cómo nuestra tecnología transforma tu hogar en un espacio inteligente y conectado
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/30 hover:border-primary/50 transition-colors">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/XduV8yZjGrE?rel=0"
              title="DiraSmart - Casa Inteligente"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
