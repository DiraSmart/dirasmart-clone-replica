const VideoSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Descubre <span className="text-accent">DiraSmart</span> en Acción
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto">
            Mira cómo nuestra tecnología transforma tu hogar en un espacio inteligente y conectado
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-accent/30">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
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
