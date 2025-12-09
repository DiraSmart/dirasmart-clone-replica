import { useState, useEffect, useRef } from "react";
import { 
  Thermometer, 
  Lightbulb, 
  Blinds, 
  Power,
  Snowflake,
  Sun,
  Wind,
  Droplets,
  ChevronUp,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";

type ACMode = 'off' | 'cool' | 'dry';
type FanSpeed = 'auto' | 'min' | 'med' | 'high';

const InteractiveDemo = () => {
  const [acMode, setAcMode] = useState<ACMode>('off');
  const [fanSpeed, setFanSpeed] = useState<FanSpeed>('med');
  const [acTemp, setAcTemp] = useState([24]);
  const [lights, setLights] = useState({
    sala: { on: false, brightness: 100 },
    cocina: { on: true, brightness: 65 },
    habitacion: { on: false, brightness: 50 },
  });
  const [blindsLevel, setBlindsLevel] = useState(70);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  const setACMode = (mode: ACMode) => {
    setAcMode(mode);
    const modeNames = { off: 'Apagado', cool: 'Enfriamiento', dry: 'Deshumidificador' };
    toast.success(`❄️ Modo: ${modeNames[mode]}`, {
      description: mode !== 'off' ? `Temperatura: ${acTemp[0]}°C` : 'Sistema desactivado'
    });
  };

  const setFanSpeedLevel = (speed: FanSpeed) => {
    setFanSpeed(speed);
    const speedNames = { auto: 'Automático', min: 'Mínimo', med: 'Medio', high: 'Alto' };
    toast.success(`🌀 Ventilador: ${speedNames[speed]}`);
  };

  const toggleLight = (room: keyof typeof lights) => {
    const roomNames = { sala: "Sala", cocina: "Cocina", habitacion: "Habitación" };
    setLights(prev => {
      const newState = !prev[room].on;
      toast.success(
        newState ? `💡 ${roomNames[room]} encendida` : `🔌 ${roomNames[room]} apagada`,
        { description: newState ? `Brillo: ${prev[room].brightness}%` : undefined }
      );
      return { ...prev, [room]: { ...prev[room], on: newState } };
    });
  };

  const adjustBrightness = (room: keyof typeof lights, value: number[]) => {
    setLights(prev => ({
      ...prev,
      [room]: { ...prev[room], brightness: value[0] }
    }));
  };

  const animateBlinds = (direction: 'up' | 'down') => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const targetLevel = direction === 'up' ? 100 : 0;
    const step = direction === 'up' ? 2 : -2;
    
    const animate = () => {
      setBlindsLevel(prev => {
        const newLevel = prev + step;
        if ((direction === 'up' && newLevel >= targetLevel) || 
            (direction === 'down' && newLevel <= targetLevel)) {
          setIsAnimating(false);
          toast.success(`🪟 Persianas al ${targetLevel}%`, {
            description: targetLevel === 0 ? "Completamente cerradas" : "Completamente abiertas"
          });
          return targetLevel;
        }
        animationRef.current = setTimeout(animate, 30);
        return newLevel;
      });
    };
    animate();
  };

  const setBlindsPercentage = (value: number[]) => {
    if (animationRef.current) {
      clearTimeout(animationRef.current);
      setIsAnimating(false);
    }
    setBlindsLevel(value[0]);
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) clearTimeout(animationRef.current);
    };
  }, []);

  return (
    <section className="section-padding bg-gradient-to-br from-muted via-background to-muted/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Prueba el <span className="text-gradient">Control Inteligente</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interactúa con nuestra demo y experimenta el control de tu hogar desde aquí
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* AC Control - Updated with modes */}
          <div className="bg-card rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all shadow-card hover:shadow-card-hover">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-xl ${acMode !== 'off' ? 'bg-primary' : 'bg-muted'} transition-colors`}>
                  <Snowflake className={`w-6 h-6 ${acMode !== 'off' ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Aire Acondicionado</h3>
                  <p className={`text-sm ${acMode !== 'off' ? 'text-primary' : 'text-muted-foreground'}`}>
                    {acMode === 'off' ? 'Apagado' : acMode === 'cool' ? 'Enfriando' : 'Secando'}
                  </p>
                </div>
              </div>
            </div>

            {/* Temperature display */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-muted-foreground text-sm">Temp:</span>
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="h-8 w-8 p-0 border-border"
                  onClick={() => setAcTemp([Math.max(16, acTemp[0] - 1)])}
                  disabled={acMode === 'off'}
                >
                  -
                </Button>
                <span className="text-2xl font-bold text-primary min-w-[60px] text-center">{acTemp[0]}°C</span>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="h-8 w-8 p-0 border-border"
                  onClick={() => setAcTemp([Math.min(30, acTemp[0] + 1)])}
                  disabled={acMode === 'off'}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Mode buttons */}
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setACMode('off')}
                className={`flex-1 flex flex-col items-center gap-1 py-2 px-3 rounded-lg border transition-all ${
                  acMode === 'off' ? 'bg-muted border-muted-foreground/30' : 'bg-card border-border hover:bg-muted/50'
                }`}
              >
                <Power className="w-4 h-4" />
                <span className="text-xs">off</span>
              </button>
              <button
                onClick={() => setACMode('cool')}
                className={`flex-1 flex flex-col items-center gap-1 py-2 px-3 rounded-lg border transition-all ${
                  acMode === 'cool' ? 'bg-primary text-primary-foreground border-primary' : 'bg-card border-border hover:bg-muted/50'
                }`}
              >
                <Snowflake className="w-4 h-4" />
                <span className="text-xs">cool</span>
              </button>
              <button
                onClick={() => setACMode('dry')}
                className={`flex-1 flex flex-col items-center gap-1 py-2 px-3 rounded-lg border transition-all ${
                  acMode === 'dry' ? 'bg-primary text-primary-foreground border-primary' : 'bg-card border-border hover:bg-muted/50'
                }`}
              >
                <Droplets className="w-4 h-4" />
                <span className="text-xs">dry</span>
              </button>
            </div>

            {/* Fan speed buttons */}
            <div className="flex gap-2">
              {(['auto', 'min', 'med', 'high'] as FanSpeed[]).map((speed) => (
                <button
                  key={speed}
                  onClick={() => setFanSpeedLevel(speed)}
                  disabled={acMode === 'off'}
                  className={`flex-1 flex flex-col items-center gap-1 py-2 px-2 rounded-lg border transition-all ${
                    fanSpeed === speed && acMode !== 'off'
                      ? 'bg-primary text-primary-foreground border-primary' 
                      : 'bg-card border-border hover:bg-muted/50 disabled:opacity-40'
                  }`}
                >
                  <Wind className="w-4 h-4" />
                  <span className="text-xs capitalize">{speed === 'auto' ? 'Auto' : speed === 'min' ? 'Min' : speed === 'med' ? 'Med' : 'High'}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Lights Control with Dimmers */}
          <div className="bg-card rounded-2xl p-6 border border-accent/20 hover:border-accent/40 transition-all shadow-card hover:shadow-card-hover">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-accent/20">
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Control de Luces</h3>
                <p className="text-sm text-muted-foreground">
                  {Object.values(lights).filter(l => l.on).length} de 3 encendidas
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {Object.entries(lights).map(([room, state]) => (
                <div
                  key={room}
                  className={`p-4 rounded-xl transition-all ${
                    state.on 
                      ? 'bg-accent/10 border-accent/30' 
                      : 'bg-muted/30 border-muted'
                  } border`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        state.on ? 'bg-amber-400' : 'bg-muted'
                      }`}>
                        <Lightbulb className={`w-4 h-4 ${state.on ? 'text-amber-900' : 'text-muted-foreground'}`} />
                      </div>
                      <div>
                        <span className="text-foreground font-medium block">
                          {room === 'habitacion' ? 'Habitación' : room.charAt(0).toUpperCase() + room.slice(1)}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {state.on ? `${state.brightness}%` : 'Apagada'}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleLight(room as keyof typeof lights)}
                      className={`p-2 rounded-full transition-all ${
                        state.on ? 'bg-accent text-accent-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }`}
                    >
                      <Power className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {/* Brightness slider */}
                  <div className="relative mt-3">
                    <div 
                      className="absolute h-2 rounded-full bg-amber-400 transition-all"
                      style={{ width: state.on ? `${state.brightness}%` : '0%' }}
                    />
                    <Slider
                      value={[state.brightness]}
                      onValueChange={(v) => adjustBrightness(room as keyof typeof lights, v)}
                      min={10}
                      max={100}
                      step={5}
                      disabled={!state.on}
                      className="[&_[role=slider]]:bg-accent [&_[role=slider]]:border-accent [&_.bg-primary]:bg-amber-400"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Blinds Control with Animation */}
          <div className="bg-card rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all shadow-card hover:shadow-card-hover">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-primary/20">
                  <Blinds className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Cortinas</h3>
                  <p className="text-sm text-muted-foreground">
                    Abierto · {blindsLevel}%
                  </p>
                </div>
              </div>
            </div>

            {/* Progress bar visualization */}
            <div className="mb-4">
              <div className="h-6 bg-muted rounded-full overflow-hidden relative">
                <div 
                  className="h-full bg-primary transition-all duration-100 rounded-full"
                  style={{ width: `${blindsLevel}%` }}
                />
              </div>
            </div>

            {/* Visual representation */}
            <div className="relative h-28 bg-gradient-to-b from-sky-200 to-sky-100 rounded-xl overflow-hidden mb-4 border border-border">
              <div className="absolute inset-x-0 top-0 flex justify-center">
                <Sun className="w-6 h-6 text-yellow-500 mt-1" />
              </div>
              <div 
                className="absolute inset-x-0 top-0 bg-gradient-to-b from-slate-400 to-slate-300 transition-all duration-100"
                style={{ height: `${100 - blindsLevel}%` }}
              >
                {Array.from({ length: Math.floor((100 - blindsLevel) / 12) }).map((_, i) => (
                  <div 
                    key={i} 
                    className="h-3 border-b border-slate-500/30 bg-slate-400"
                  />
                ))}
              </div>
            </div>

            {/* Percentage slider */}
            <div className="mb-4">
              <Slider
                value={[blindsLevel]}
                onValueChange={setBlindsPercentage}
                min={0}
                max={100}
                step={5}
                disabled={isAnimating}
                className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>Cerrado</span>
                <span>Abierto</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => animateBlinds('up')}
                disabled={isAnimating || blindsLevel === 100}
                variant="outline"
                className="flex-1 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary"
              >
                <ChevronUp className="w-5 h-5 mr-2" />
                Subir
              </Button>
              <Button
                onClick={() => animateBlinds('down')}
                disabled={isAnimating || blindsLevel === 0}
                variant="outline"
                className="flex-1 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary"
              >
                <ChevronDown className="w-5 h-5 mr-2" />
                Bajar
              </Button>
            </div>
          </div>
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8">
          ¡Haz clic en los controles para ver la magia de la automatización!
        </p>
      </div>
    </section>
  );
};

export default InteractiveDemo;
