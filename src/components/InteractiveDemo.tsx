import { useState, useEffect, useRef } from "react";
import { 
  Thermometer, 
  Blinds, 
  Power,
  Snowflake,
  Wind,
  Droplets,
  ChevronUp,
  ChevronDown,
  Square
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

  const stopBlinds = () => {
    if (animationRef.current) {
      clearTimeout(animationRef.current);
      animationRef.current = null;
    }
    setIsAnimating(false);
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
        animationRef.current = setTimeout(animate, 150);
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

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {/* AC Control */}
          <div className="bg-card rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all shadow-card hover:shadow-card-hover flex flex-col">
            <div className="flex items-center justify-between mb-6">
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

            {/* Clean sensors display */}
            <div className="flex justify-center gap-8 mb-6">
              <div className="flex items-center gap-2">
                <Thermometer className="w-6 h-6 text-primary" />
                <span className="text-3xl font-bold text-foreground">{currentTemp}°</span>
              </div>
              <div className="flex items-center gap-2">
                <Droplets className="w-6 h-6 text-accent" />
                <span className="text-3xl font-bold text-foreground">{currentHumidity}%</span>
              </div>
            </div>

            {/* Temperature display */}
            <div className="flex items-center justify-center gap-4 mb-6 flex-grow">
              <div className="flex flex-col items-center gap-2">
                <span className="text-muted-foreground text-sm">Objetivo</span>
                <div className="flex items-center gap-3">
                  <button 
                    className="h-10 w-10 rounded-xl bg-muted hover:bg-muted/80 flex items-center justify-center text-foreground font-bold transition-colors disabled:opacity-40 text-xl"
                    onClick={() => setAcTemp(Math.max(16, acTemp - 1))}
                    disabled={acMode === 'off'}
                  >
                    -
                  </button>
                  <span className="text-4xl font-bold text-primary min-w-[80px] text-center">{acTemp}°C</span>
                  <button 
                    className="h-10 w-10 rounded-xl bg-muted hover:bg-muted/80 flex items-center justify-center text-foreground font-bold transition-colors disabled:opacity-40 text-xl"
                    onClick={() => setAcTemp(Math.min(30, acTemp + 1))}
                    disabled={acMode === 'off'}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Mode buttons */}
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setACMode('off')}
                className={`flex-1 flex flex-col items-center gap-1 py-3 px-3 rounded-lg border transition-all ${
                  acMode === 'off' ? 'bg-muted border-muted-foreground/30' : 'bg-card border-border hover:bg-muted/50'
                }`}
              >
                <Power className="w-5 h-5" />
                <span className="text-xs">off</span>
              </button>
              <button
                onClick={() => setACMode('cool')}
                className={`flex-1 flex flex-col items-center gap-1 py-3 px-3 rounded-lg border transition-all ${
                  acMode === 'cool' ? 'bg-primary text-primary-foreground border-primary' : 'bg-card border-border hover:bg-muted/50'
                }`}
              >
                <Snowflake className="w-5 h-5" />
                <span className="text-xs">cool</span>
              </button>
              <button
                onClick={() => setACMode('dry')}
                className={`flex-1 flex flex-col items-center gap-1 py-3 px-3 rounded-lg border transition-all ${
                  acMode === 'dry' ? 'bg-orange-500 text-white border-orange-500' : 'bg-card border-border hover:bg-muted/50'
                }`}
              >
                <Droplets className="w-5 h-5" />
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

          {/* Lights Control - Modern Ceiling Light */}
          <div className="bg-card rounded-2xl p-6 border border-accent/20 hover:border-accent/40 transition-all shadow-card hover:shadow-card-hover flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-accent/20">
                <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Control de Luces</h3>
                <p className="text-sm text-muted-foreground">
                  {lightOn ? 'Encendida' : 'Apagada'}
                </p>
              </div>
            </div>

            {/* Modern Ceiling Light */}
            <div className="relative flex justify-center flex-grow items-center">
              <div className="relative">
                {/* Cord */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-0.5 h-8 bg-slate-400" />
                
                {/* Light Fixture */}
                <div className="relative">
                  {/* Glow effect */}
                  {lightOn && (
                    <div 
                      className="absolute inset-0 rounded-full blur-3xl transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle, rgba(251, 191, 36, ${brightness / 120}) 0%, transparent 60%)`,
                        transform: 'scale(2.5) translateY(20%)',
                      }}
                    />
                  )}
                  
                  {/* Pendant fixture */}
                  <svg 
                    className="w-40 h-40 relative z-10 transition-all duration-300"
                    viewBox="0 0 120 100" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Mount */}
                    <rect x="55" y="0" width="10" height="8" fill="#666" rx="2"/>
                    
                    {/* Shade outer */}
                    <path 
                      d="M20 35 Q60 25 100 35 L95 75 Q60 85 25 75 Z" 
                      fill={lightOn ? `rgba(251, 191, 36, ${0.15 + brightness / 300})` : 'rgba(80, 80, 80, 0.3)'}
                      stroke={lightOn ? '#fbbf24' : '#555'}
                      strokeWidth="2"
                    />
                    
                    {/* Inner glow/light area */}
                    {lightOn && (
                      <ellipse 
                        cx="60" 
                        cy="75" 
                        rx={25 + brightness / 10} 
                        ry={15 + brightness / 15} 
                        fill={`rgba(255, 255, 255, ${brightness / 250})`}
                      />
                    )}
                    
                    {/* Light cone effect */}
                    {lightOn && (
                      <path 
                        d="M35 75 L15 100 L105 100 L85 75" 
                        fill={`rgba(251, 191, 36, ${brightness / 400})`}
                      />
                    )}
                  </svg>
                </div>
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

          {/* Blinds Control with Window View */}
          <div className="bg-card rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all shadow-card hover:shadow-card-hover flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-primary/20">
                  <Blinds className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Cortinas</h3>
                  <p className="text-sm text-muted-foreground">
                    {blindsLevel === 0 ? 'Cerradas' : blindsLevel === 100 ? 'Abiertas' : `Abierto · ${blindsLevel}%`}
                  </p>
                </div>
              </div>
            </div>

            {/* Window with blinds visualization - taller */}
            <div className="relative flex-grow min-h-[180px] rounded-xl overflow-hidden mb-4 border-4 border-slate-600">
              {/* Window frame */}
              <div className="absolute inset-0 border-2 border-slate-500 z-10 pointer-events-none">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-500" />
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-500" />
              </div>
              
              {/* Outside view - sky and landscape */}
              <div className="absolute inset-0 bg-gradient-to-b from-sky-400 via-sky-300 to-sky-200">
                {/* Sun */}
                <div className="absolute top-6 right-8 w-10 h-10 bg-yellow-300 rounded-full shadow-[0_0_30px_rgba(253,224,71,0.8)]" />
                {/* Clouds */}
                <div className="absolute top-8 left-6 w-16 h-5 bg-white/80 rounded-full blur-[1px]" />
                <div className="absolute top-5 left-12 w-10 h-4 bg-white/60 rounded-full blur-[1px]" />
                <div className="absolute top-12 right-20 w-12 h-4 bg-white/70 rounded-full blur-[1px]" />
                {/* Hills/Mountains */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-green-600 to-green-500 rounded-t-full" />
                <div className="absolute bottom-0 left-1/4 w-24 h-14 bg-green-700 rounded-t-full" />
                <div className="absolute bottom-0 right-1/4 w-20 h-10 bg-green-600 rounded-t-full" />
              </div>
              
              {/* Blinds overlay */}
              <div 
                className="absolute inset-x-0 top-0 transition-all duration-300 z-20"
                style={{ height: `${100 - blindsLevel}%` }}
              >
                {Array.from({ length: Math.ceil((100 - blindsLevel) / 6) }).map((_, i) => (
                  <div 
                    key={i} 
                    className="h-4 bg-gradient-to-b from-slate-300 to-slate-400 border-b border-slate-500/50 shadow-sm"
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

            {/* Up/Stop/Down buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => animateBlinds('up')}
                disabled={isAnimating || blindsLevel === 100}
                className="flex-1 flex items-center justify-center gap-1 py-3 px-3 rounded-xl bg-gradient-to-br from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                <ChevronUp className="w-5 h-5" />
                <span className="text-sm">Subir</span>
              </button>
              <button
                onClick={stopBlinds}
                disabled={!isAnimating}
                className="flex items-center justify-center gap-1 py-3 px-4 rounded-xl bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                <Square className="w-4 h-4" />
              </button>
              <button
                onClick={() => animateBlinds('down')}
                disabled={isAnimating || blindsLevel === 0}
                className="flex-1 flex items-center justify-center gap-1 py-3 px-3 rounded-xl bg-gradient-to-br from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                <ChevronDown className="w-5 h-5" />
                <span className="text-sm">Bajar</span>
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