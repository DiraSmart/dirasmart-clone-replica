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
import { Slider } from "@/components/ui/slider";

type ACMode = 'off' | 'cool' | 'dry';
type FanSpeed = 'auto' | 'min' | 'med' | 'high';

const InteractiveDemo = () => {
  const [acMode, setAcMode] = useState<ACMode>('off');
  const [fanSpeed, setFanSpeed] = useState<FanSpeed>('med');
  const [acTemp, setAcTemp] = useState(24);
  const [currentTemp] = useState(27);
  const [currentHumidity] = useState(65);
  const [lightOn, setLightOn] = useState(true);
  const [brightness, setBrightness] = useState(75);
  const [blindsLevel, setBlindsLevel] = useState(70);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  const setACMode = (mode: ACMode) => {
    setAcMode(mode);
  };

  const setFanSpeedLevel = (speed: FanSpeed) => {
    setFanSpeed(speed);
  };

  const animateBlinds = (direction: 'up' | 'down') => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const targetLevel = direction === 'up' ? 100 : 0;
    const step = direction === 'up' ? 1 : -1;
    
    const animate = () => {
      setBlindsLevel(prev => {
        const newLevel = prev + step;
        if ((direction === 'up' && newLevel >= targetLevel) || 
            (direction === 'down' && newLevel <= targetLevel)) {
          setIsAnimating(false);
          return targetLevel;
        }
        animationRef.current = setTimeout(animate, 50);
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
          {/* AC Control */}
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

            {/* Futuristic sensors display */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="relative p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-12 bg-primary/10 rounded-full blur-xl" />
                <div className="relative flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <Thermometer className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block">Temp.</span>
                    <span className="text-xl font-bold text-foreground">{currentTemp}°</span>
                  </div>
                </div>
              </div>
              <div className="relative p-4 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-12 bg-accent/10 rounded-full blur-xl" />
                <div className="relative flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-accent/20">
                    <Droplets className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block">Humedad</span>
                    <span className="text-xl font-bold text-foreground">{currentHumidity}%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Temperature display */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-muted-foreground text-sm">Objetivo:</span>
              <div className="flex items-center gap-2">
                <button 
                  className="h-8 w-8 rounded-lg bg-muted hover:bg-muted/80 flex items-center justify-center text-foreground font-bold transition-colors disabled:opacity-40"
                  onClick={() => setAcTemp(Math.max(16, acTemp - 1))}
                  disabled={acMode === 'off'}
                >
                  -
                </button>
                <span className="text-2xl font-bold text-primary min-w-[60px] text-center">{acTemp}°C</span>
                <button 
                  className="h-8 w-8 rounded-lg bg-muted hover:bg-muted/80 flex items-center justify-center text-foreground font-bold transition-colors disabled:opacity-40"
                  onClick={() => setAcTemp(Math.min(30, acTemp + 1))}
                  disabled={acMode === 'off'}
                >
                  +
                </button>
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
                  acMode === 'dry' ? 'bg-orange-500 text-white border-orange-500' : 'bg-card border-border hover:bg-muted/50'
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

          {/* Lights Control - Single Dimmer */}
          <div className="bg-card rounded-2xl p-6 border border-accent/20 hover:border-accent/40 transition-all shadow-card hover:shadow-card-hover">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-accent/20">
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Control de Luces</h3>
                <p className="text-sm text-muted-foreground">
                  {lightOn ? 'Encendida' : 'Apagada'}
                </p>
              </div>
            </div>

            {/* Light visual representation */}
            <div className="relative flex justify-center mb-6">
              <div 
                className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-500 ${
                  lightOn 
                    ? 'bg-gradient-to-br from-amber-300 to-amber-500' 
                    : 'bg-muted'
                }`}
                style={{
                  boxShadow: lightOn 
                    ? `0 0 ${brightness}px ${brightness / 2}px rgba(251, 191, 36, ${brightness / 200})` 
                    : 'none'
                }}
              >
                <Lightbulb 
                  className={`w-16 h-16 transition-colors ${lightOn ? 'text-amber-900' : 'text-muted-foreground'}`} 
                />
              </div>
            </div>

            {/* Power toggle */}
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setLightOn(!lightOn)}
                className={`p-4 rounded-full transition-all ${
                  lightOn 
                    ? 'bg-accent text-accent-foreground shadow-[0_0_20px_rgba(34,197,94,0.4)]' 
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                <Power className="w-6 h-6" />
              </button>
            </div>

            {/* Brightness slider */}
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Intensidad</span>
                <span className="font-medium text-foreground">{brightness}%</span>
              </div>
              <Slider
                value={[brightness]}
                onValueChange={(v) => setBrightness(v[0])}
                min={10}
                max={100}
                step={1}
                disabled={!lightOn}
                className="[&_[role=slider]]:bg-amber-400 [&_[role=slider]]:border-amber-500 [&_[role=slider]]:shadow-[0_0_10px_rgba(251,191,36,0.5)] [&_.relative]:bg-muted [&_[data-orientation=horizontal]>.absolute]:bg-gradient-to-r [&_[data-orientation=horizontal]>.absolute]:from-amber-400 [&_[data-orientation=horizontal]>.absolute]:to-amber-300"
              />
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

            {/* Visual representation */}
            <div className="relative h-32 bg-gradient-to-b from-sky-200 to-sky-100 rounded-xl overflow-hidden mb-4 border border-border">
              <div className="absolute inset-x-0 top-0 flex justify-center">
                <Sun className="w-6 h-6 text-yellow-500 mt-1" />
              </div>
              <div 
                className="absolute inset-x-0 top-0 bg-gradient-to-b from-slate-400 to-slate-300 transition-all duration-200"
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
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Apertura</span>
                <span className="font-medium text-primary">{blindsLevel}%</span>
              </div>
              <Slider
                value={[blindsLevel]}
                onValueChange={setBlindsPercentage}
                min={0}
                max={100}
                step={1}
                disabled={isAnimating}
                className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary [&_[role=slider]]:shadow-[0_0_10px_rgba(0,180,180,0.5)] [&_.relative]:bg-muted [&_[data-orientation=horizontal]>.absolute]:bg-gradient-to-r [&_[data-orientation=horizontal]>.absolute]:from-primary [&_[data-orientation=horizontal]>.absolute]:to-cyan-400"
              />
            </div>

            {/* Up/Down buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => animateBlinds('up')}
                disabled={isAnimating || blindsLevel === 100}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 hover:border-primary/50 text-foreground font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed group"
              >
                <ChevronUp className="w-5 h-5 text-primary group-hover:animate-bounce" />
                <span>Subir</span>
              </button>
              <button
                onClick={() => animateBlinds('down')}
                disabled={isAnimating || blindsLevel === 0}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 hover:border-primary/50 text-foreground font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed group"
              >
                <ChevronDown className="w-5 h-5 text-primary group-hover:animate-bounce" />
                <span>Bajar</span>
              </button>
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
