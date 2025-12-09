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
  Square,
  Sun
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
  const [animationDirection, setAnimationDirection] = useState<'up' | 'down' | null>(null);
  const animationRef = useRef<number | null>(null);
  const blindsLevelRef = useRef(blindsLevel);

  // Keep ref in sync with state
  useEffect(() => {
    blindsLevelRef.current = blindsLevel;
  }, [blindsLevel]);

  const setACMode = (mode: ACMode) => {
    setAcMode(mode);
  };

  const setFanSpeedLevel = (speed: FanSpeed) => {
    setFanSpeed(speed);
  };

  const stopBlinds = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
    setIsAnimating(false);
    setAnimationDirection(null);
  };

  const animateBlinds = (direction: 'up' | 'down') => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setAnimationDirection(direction);
    
    const targetLevel = direction === 'up' ? 100 : 0;
    const totalSteps = 100;
    const duration = 8000; // 8 seconds
    const stepDuration = duration / totalSteps;
    let lastTime = performance.now();
    let accumulated = 0;
    
    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      accumulated += deltaTime;
      lastTime = currentTime;
      
      if (accumulated >= stepDuration) {
        const steps = Math.floor(accumulated / stepDuration);
        accumulated = accumulated % stepDuration;
        
        const currentLevel = blindsLevelRef.current;
        let newLevel: number;
        
        if (direction === 'up') {
          newLevel = Math.min(currentLevel + steps, targetLevel);
        } else {
          newLevel = Math.max(currentLevel - steps, targetLevel);
        }
        
        setBlindsLevel(newLevel);
        
        if (newLevel === targetLevel) {
          setIsAnimating(false);
          setAnimationDirection(null);
          animationRef.current = null;
          return;
        }
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
  };

  const setBlindsPercentage = (value: number[]) => {
    stopBlinds();
    setBlindsLevel(value[0]);
  };

  const toggleLight = () => {
    setLightOn(prev => !prev);
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Get AC icon based on mode
  const getACIcon = () => {
    switch (acMode) {
      case 'cool':
        return <Snowflake className="w-6 h-6 text-primary-foreground" />;
      case 'dry':
        return <Droplets className="w-6 h-6 text-white" />;
      default:
        return <Power className="w-6 h-6 text-muted-foreground" />;
    }
  };

  const getACIconBg = () => {
    switch (acMode) {
      case 'cool':
        return 'bg-primary';
      case 'dry':
        return 'bg-orange-500';
      default:
        return 'bg-muted';
    }
  };

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
                <div className={`p-3 rounded-xl ${getACIconBg()} transition-colors`}>
                  {getACIcon()}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Aire Acondicionado</h3>
                  <p className={`text-sm ${acMode === 'cool' ? 'text-primary' : acMode === 'dry' ? 'text-orange-500' : 'text-muted-foreground'}`}>
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

          {/* Lights Control - Light Bulb */}
          <div className="bg-card rounded-2xl p-6 border border-accent/20 hover:border-accent/40 transition-all shadow-card hover:shadow-card-hover flex flex-col">
            <div className="flex items-center gap-3 mb-6">
            <div className={`p-3 rounded-xl transition-colors ${lightOn ? 'bg-amber-500' : 'bg-muted'}`}>
                <Sun className={`w-6 h-6 ${lightOn ? 'text-white' : 'text-muted-foreground'}`} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Control de Luces</h3>
                <p className="text-sm text-muted-foreground">
                  {lightOn ? 'Encendida' : 'Apagada'}
                </p>
              </div>
            </div>

            {/* Light Bulb */}
            <div className="relative flex justify-center flex-grow items-center py-4">
              <div className="relative">
                {/* Glow effect */}
                {lightOn && (
                  <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-all duration-500 pointer-events-none"
                    style={{
                      width: `${80 + brightness}px`,
                      height: `${80 + brightness}px`,
                      background: `radial-gradient(circle, rgba(253, 224, 71, ${brightness / 120}) 0%, transparent 70%)`,
                    }}
                  />
                )}
                
                {/* Bulb SVG */}
                <svg width="80" height="115" viewBox="0 0 80 115" className="relative z-10">
                  <defs>
                    {/* Dynamic gradient based on brightness */}
                    <radialGradient id="bulbGlowDynamic" cx="50%" cy="35%" r="55%">
                      <stop offset="0%" stopColor={lightOn ? `rgba(255, 255, 255, ${0.5 + brightness / 200})` : '#e5e7eb'} />
                      <stop offset="35%" stopColor={lightOn ? `rgba(254, 249, 195, ${brightness / 100})` : '#d1d5db'} />
                      <stop offset="100%" stopColor={lightOn ? `rgba(250, 204, 21, ${0.4 + brightness / 166})` : '#9ca3af'} />
                    </radialGradient>
                  </defs>
                  
                  {/* Bulb body - round top with narrowing bottom */}
                  <path 
                    d="M40 5 C65 5, 77 25, 77 48 C77 71, 60 82, 52 87 L28 87 C20 82, 3 71, 3 48 C3 25, 15 5, 40 5 Z"
                    fill="url(#bulbGlowDynamic)"
                    stroke="#4b5563"
                    strokeWidth="2"
                    className="transition-all duration-300"
                  />
                  
                  {/* Screw base */}
                  <g>
                    {/* Top collar */}
                    <rect x="26" y="87" width="28" height="5" fill="#9ca3af" stroke="#4b5563" strokeWidth="1" />
                    {/* Screw threads */}
                    <rect x="28" y="92" width="24" height="4" fill="#71717a" stroke="#4b5563" strokeWidth="1" />
                    <rect x="28" y="96" width="24" height="4" fill="#a1a1aa" stroke="#4b5563" strokeWidth="1" />
                    <rect x="29" y="100" width="22" height="4" fill="#71717a" stroke="#4b5563" strokeWidth="1" />
                    <rect x="30" y="104" width="20" height="4" fill="#a1a1aa" stroke="#4b5563" strokeWidth="1" />
                    {/* Bottom tip */}
                    <path d="M32 108 L32 112 Q40 116 48 112 L48 108 Z" fill="#52525b" stroke="#4b5563" strokeWidth="1" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Power toggle */}
            <div className="flex justify-center mb-6">
              <button
                onClick={toggleLight}
                className={`p-4 rounded-full transition-all ${
                  lightOn 
                    ? 'bg-amber-500 text-white shadow-[0_0_20px_rgba(251,191,36,0.5)]' 
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
                className="absolute inset-x-0 top-0 z-20 overflow-hidden transition-all duration-100"
                style={{ height: `${100 - blindsLevel}%` }}
              >
                {/* Create fixed number of slats that fill the container */}
                {Array.from({ length: 12 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="h-[8.33%] bg-gradient-to-b from-slate-300 to-slate-400 border-b border-slate-500/50 shadow-sm"
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
                className={`flex-1 flex items-center justify-center gap-1 py-3 px-3 rounded-xl font-medium transition-all shadow-lg hover:shadow-xl ${
                  animationDirection === 'up' 
                    ? 'bg-accent text-accent-foreground' 
                    : 'bg-gradient-to-br from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground'
                } disabled:opacity-40 disabled:cursor-not-allowed`}
              >
                <ChevronUp className="w-5 h-5" />
                <span className="text-sm">Subir</span>
              </button>
              <button
                onClick={stopBlinds}
                disabled={!isAnimating}
                className={`flex items-center justify-center gap-1 py-3 px-4 rounded-xl font-medium transition-all shadow-lg hover:shadow-xl ${
                  isAnimating 
                    ? 'bg-red-500 hover:bg-red-600 text-white cursor-pointer' 
                    : 'bg-muted text-muted-foreground opacity-40 cursor-not-allowed'
                }`}
              >
                <Square className="w-4 h-4" />
              </button>
              <button
                onClick={() => animateBlinds('down')}
                disabled={isAnimating || blindsLevel === 0}
                className={`flex-1 flex items-center justify-center gap-1 py-3 px-3 rounded-xl font-medium transition-all shadow-lg hover:shadow-xl ${
                  animationDirection === 'down' 
                    ? 'bg-accent text-accent-foreground' 
                    : 'bg-gradient-to-br from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground'
                } disabled:opacity-40 disabled:cursor-not-allowed`}
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
