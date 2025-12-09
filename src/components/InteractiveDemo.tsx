import { useState } from "react";
import { 
  Thermometer, 
  Lightbulb, 
  Blinds, 
  Power,
  Snowflake,
  Sun,
  ChevronUp,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

const InteractiveDemo = () => {
  const [acOn, setAcOn] = useState(false);
  const [acTemp, setAcTemp] = useState([22]);
  const [lights, setLights] = useState({
    sala: false,
    cocina: false,
    habitacion: false,
  });
  const [blindsLevel, setBlindsLevel] = useState([100]);

  const toggleAC = () => {
    setAcOn(!acOn);
    toast.success(
      !acOn ? "🌡️ Aire acondicionado encendido" : "❄️ Aire acondicionado apagado",
      { description: !acOn ? `Temperatura: ${acTemp[0]}°C` : "Sistema desactivado" }
    );
  };

  const toggleLight = (room: keyof typeof lights) => {
    const roomNames = { sala: "Sala", cocina: "Cocina", habitacion: "Habitación" };
    setLights(prev => {
      const newState = !prev[room];
      toast.success(
        newState ? `💡 Luz de ${roomNames[room]} encendida` : `🔌 Luz de ${roomNames[room]} apagada`
      );
      return { ...prev, [room]: newState };
    });
  };

  const adjustBlinds = (direction: 'up' | 'down') => {
    setBlindsLevel(prev => {
      const newLevel = direction === 'up' 
        ? Math.min(100, prev[0] + 25) 
        : Math.max(0, prev[0] - 25);
      toast.success(
        `🪟 Persianas al ${newLevel}%`,
        { description: newLevel === 0 ? "Completamente cerradas" : newLevel === 100 ? "Completamente abiertas" : "" }
      );
      return [newLevel];
    });
  };

  return (
    <section className="section-padding bg-gradient-to-br from-secondary via-secondary to-secondary/95">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Prueba el <span className="text-accent">Control Inteligente</span>
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto">
            Interactúa con nuestra demo y experimenta el control de tu hogar desde aquí
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* AC Control */}
          <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-accent/20 hover:border-accent/40 transition-all">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-xl ${acOn ? 'bg-accent' : 'bg-muted/20'} transition-colors`}>
                  {acOn ? <Snowflake className="w-6 h-6 text-accent-foreground" /> : <Thermometer className="w-6 h-6 text-muted-foreground" />}
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-foreground">Aire Acondicionado</h3>
                  <p className={`text-sm ${acOn ? 'text-accent' : 'text-muted-foreground'}`}>
                    {acOn ? 'Encendido' : 'Apagado'}
                  </p>
                </div>
              </div>
              <Switch 
                checked={acOn} 
                onCheckedChange={toggleAC}
                className="data-[state=checked]:bg-accent"
              />
            </div>
            
            <div className={`space-y-4 transition-opacity ${acOn ? 'opacity-100' : 'opacity-40'}`}>
              <div className="flex items-center justify-between">
                <span className="text-secondary-foreground/70 text-sm">Temperatura</span>
                <span className="text-2xl font-bold text-accent">{acTemp[0]}°C</span>
              </div>
              <Slider
                value={acTemp}
                onValueChange={setAcTemp}
                min={16}
                max={30}
                step={1}
                disabled={!acOn}
                className="[&_[role=slider]]:bg-accent [&_[role=slider]]:border-accent"
              />
              <div className="flex justify-between text-xs text-secondary-foreground/50">
                <span>16°C</span>
                <span>30°C</span>
              </div>
            </div>
          </div>

          {/* Lights Control */}
          <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-accent/20 hover:border-accent/40 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-accent/20">
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-secondary-foreground">Control de Luces</h3>
                <p className="text-sm text-muted-foreground">
                  {Object.values(lights).filter(Boolean).length} de 3 encendidas
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {Object.entries(lights).map(([room, isOn]) => (
                <button
                  key={room}
                  onClick={() => toggleLight(room as keyof typeof lights)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${
                    isOn 
                      ? 'bg-accent/30 border-accent' 
                      : 'bg-secondary/50 border-secondary hover:bg-secondary/70'
                  } border`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${isOn ? 'bg-accent animate-pulse' : 'bg-muted-foreground/30'}`} />
                    <span className="text-secondary-foreground capitalize font-medium">
                      {room === 'habitacion' ? 'Habitación' : room.charAt(0).toUpperCase() + room.slice(1)}
                    </span>
                  </div>
                  <Power className={`w-5 h-5 ${isOn ? 'text-accent' : 'text-muted-foreground'}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Blinds Control */}
          <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-accent/20 hover:border-accent/40 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-accent/20">
                <Blinds className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-secondary-foreground">Persianas</h3>
                <p className="text-sm text-muted-foreground">
                  Nivel: {blindsLevel[0]}%
                </p>
              </div>
            </div>

            {/* Visual representation */}
            <div className="relative h-32 bg-primary/20 rounded-xl overflow-hidden mb-6 border border-primary/30">
              <div className="absolute inset-x-0 top-0 flex justify-center">
                <Sun className="w-8 h-8 text-yellow-400 mt-2" />
              </div>
              <div 
                className="absolute inset-x-0 top-0 bg-gradient-to-b from-secondary to-secondary/80 transition-all duration-300"
                style={{ height: `${100 - blindsLevel[0]}%` }}
              >
                {/* Blind slats */}
                {Array.from({ length: Math.floor((100 - blindsLevel[0]) / 10) }).map((_, i) => (
                  <div 
                    key={i} 
                    className="h-3 border-b border-secondary-foreground/20 bg-secondary/90"
                  />
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => adjustBlinds('up')}
                variant="outline"
                className="flex-1 border-accent/30 text-secondary-foreground hover:bg-accent/20 hover:border-accent"
              >
                <ChevronUp className="w-5 h-5 mr-2" />
                Subir
              </Button>
              <Button
                onClick={() => adjustBlinds('down')}
                variant="outline"
                className="flex-1 border-accent/30 text-secondary-foreground hover:bg-accent/20 hover:border-accent"
              >
                <ChevronDown className="w-5 h-5 mr-2" />
                Bajar
              </Button>
            </div>
          </div>
        </div>

        <p className="text-center text-secondary-foreground/60 text-sm mt-8">
          ¡Haz clic en los controles para ver la magia de la automatización!
        </p>
      </div>
    </section>
  );
};

export default InteractiveDemo;
