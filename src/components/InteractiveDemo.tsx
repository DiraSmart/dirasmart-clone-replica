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
import { useLanguage } from "@/contexts/LanguageContext";

type ACMode = 'off' | 'cool' | 'dry';
type FanSpeed = 'auto' | 'min' | 'med' | 'high';

const InteractiveDemo = () => {
  const [acMode, setAcMode] = useState<ACMode>('off');
  const [fanSpeed, setFanSpeed] = useState<FanSpeed>('med');
  const [acTemp, setAcTemp] = useState(24);
  const [currentTemp, setCurrentTemp] = useState(27);
  const [currentHumidity] = useState(65);
  const ambientTemp = 27; // Ambient temperature when AC is off
  const [lightOn, setLightOn] = useState(true);
  const [brightness, setBrightness] = useState(75);
  const [blindsLevel, setBlindsLevel] = useState(70);
  const [blindsTarget, setBlindsTarget] = useState(70);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<'up' | 'down' | null>(null);
  const animationRef = useRef<number | null>(null);
  const blindsLevelRef = useRef(blindsLevel);
  const { t } = useLanguage();

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
    setBlindsTarget(blindsLevelRef.current);
    setIsAnimating(false);
    setAnimationDirection(null);
  };

  const startBlindsAnimation = (targetLevel: number, sliderFollows: boolean) => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }

    if (!sliderFollows) {
      setBlindsTarget(targetLevel);
    }

    const currentLevel = blindsLevelRef.current;
    if (currentLevel === targetLevel) {
      setIsAnimating(false);
      setAnimationDirection(null);
      return;
    }

    const direction = targetLevel > currentLevel ? 'up' : 'down';
    setIsAnimating(true);
    setAnimationDirection(direction);

    const totalSteps = 100;
    const duration = 8000;
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

        const level = blindsLevelRef.current;
        let newLevel: number;

        if (direction === 'up') {
          newLevel = Math.min(level + steps, targetLevel);
        } else {
          newLevel = Math.max(level - steps, targetLevel);
        }

        setBlindsLevel(newLevel);
        if (sliderFollows) {
          setBlindsTarget(newLevel);
        }

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

  const animateBlinds = (direction: 'up' | 'down') => {
    if (isAnimating) return;
    startBlindsAnimation(direction === 'up' ? 100 : 0, true);
  };

  const setBlindsPercentage = (value: number[]) => {
    startBlindsAnimation(value[0], false);
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

  // Temperature simulation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTemp(prev => {
        if (acMode === 'cool') {
          // Cooling: slowly decrease to target temperature
          if (prev > acTemp) {
            return Math.round((prev - 0.5) * 10) / 10;
          }
          return acTemp;
        } else {
          // Off or dry mode: slowly return to ambient (27°C)
          if (prev < ambientTemp) {
            return Math.round((prev + 0.5) * 10) / 10;
          } else if (prev > ambientTemp) {
            return Math.round((prev - 0.5) * 10) / 10;
          }
          return ambientTemp;
        }
      });
    }, 1500); // Update every 1.5 seconds for smooth transition

    return () => clearInterval(interval);
  }, [acMode, acTemp, ambientTemp]);

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

  const getACStatus = () => {
    switch (acMode) {
      case 'cool':
        return t("demo.ac.cooling");
      case 'dry':
        return t("demo.ac.drying");
      default:
        return t("demo.ac.off");
    }
  };

  const getBlindsStatus = () => {
    if (blindsTarget === 0 && blindsLevel === 0) return t("demo.blinds.closed");
    if (blindsTarget === 100 && blindsLevel === 100) return t("demo.blinds.open");
    if (isAnimating) return `${t("demo.blinds.partial")} · ${blindsLevel}% → ${blindsTarget}%`;
    return `${t("demo.blinds.partial")} · ${blindsLevel}%`;
  };

  return (
    <section id="demo" className="section-padding section-divider bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container-custom px-3 sm:px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            {t("demo.title")} <span className="text-gradient">{t("demo.titleHighlight")}</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            {t("demo.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto items-stretch">
          {/* AC Control */}
          <div className="bg-card rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all shadow-card hover:shadow-card-hover flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-xl ${getACIconBg()} transition-colors`}>
                  {getACIcon()}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{t("demo.ac")}</h3>
                  <p className={`text-sm ${acMode === 'cool' ? 'text-primary' : acMode === 'dry' ? 'text-orange-500' : 'text-muted-foreground'}`}>
                    {getACStatus()}
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
                <span className="text-muted-foreground text-sm">{t("demo.target")}</span>
                <div className="flex items-center gap-3">
                  <button
                    className="h-10 w-10 rounded-xl bg-muted hover:bg-muted/80 flex items-center justify-center text-foreground font-bold transition-colors disabled:opacity-40 text-xl"
                    onClick={() => setAcTemp(Math.max(16, acTemp - 1))}
                    disabled={acMode === 'off'}
                    aria-label="Decrease temperature"
                  >
                    -
                  </button>
                  <span className="text-4xl font-bold text-primary min-w-[80px] text-center">{acTemp}°C</span>
                  <button
                    className="h-10 w-10 rounded-xl bg-muted hover:bg-muted/80 flex items-center justify-center text-foreground font-bold transition-colors disabled:opacity-40 text-xl"
                    onClick={() => setAcTemp(Math.min(30, acTemp + 1))}
                    disabled={acMode === 'off'}
                    aria-label="Increase temperature"
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
                aria-label="AC mode: Off"
                className={`flex-1 flex flex-col items-center gap-1 py-3 px-3 rounded-lg border transition-all ${
                  acMode === 'off' ? 'bg-muted border-muted-foreground/30' : 'bg-card border-border hover:bg-muted/50'
                }`}
              >
                <Power className="w-5 h-5" aria-hidden="true" />
                <span className="text-xs">off</span>
              </button>
              <button
                onClick={() => setACMode('cool')}
                aria-label="AC mode: Cool"
                className={`flex-1 flex flex-col items-center gap-1 py-3 px-3 rounded-lg border transition-all ${
                  acMode === 'cool' ? 'bg-primary text-primary-foreground border-primary' : 'bg-card border-border hover:bg-muted/50'
                }`}
              >
                <Snowflake className="w-5 h-5" aria-hidden="true" />
                <span className="text-xs">cool</span>
              </button>
              <button
                onClick={() => setACMode('dry')}
                aria-label="AC mode: Dry"
                className={`flex-1 flex flex-col items-center gap-1 py-3 px-3 rounded-lg border transition-all ${
                  acMode === 'dry' ? 'bg-orange-500 text-white border-orange-500' : 'bg-card border-border hover:bg-muted/50'
                }`}
              >
                <Droplets className="w-5 h-5" aria-hidden="true" />
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

          {/* Lights Control - Ceiling Lamp */}
          <div className="bg-card rounded-2xl p-6 border border-accent/20 hover:border-accent/40 transition-all shadow-card hover:shadow-card-hover flex flex-col">
            <div className="flex items-center gap-3 mb-6">
            <div className={`p-3 rounded-xl transition-colors ${lightOn ? 'bg-amber-500' : 'bg-muted'}`}>
                <Sun className={`w-6 h-6 ${lightOn ? 'text-white' : 'text-muted-foreground'}`} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{t("demo.lights")}</h3>
                <p className="text-sm text-muted-foreground">
                  {lightOn ? t("demo.lights.on") : t("demo.lights.off")}
                </p>
              </div>
            </div>

            {/* Ceiling Lamp */}
            <div className="relative flex justify-center flex-grow items-start pt-0 pb-4 overflow-hidden min-h-[220px]">
              <svg width="200" height="220" viewBox="0 0 200 220" className="relative z-10" role="img" aria-label="Ceiling lamp visualization">
                <defs>
                  {/* Lamp shade metallic gradient */}
                  <linearGradient id="shadeOuter" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#78716c" />
                    <stop offset="30%" stopColor="#57534e" />
                    <stop offset="60%" stopColor="#44403c" />
                    <stop offset="100%" stopColor="#292524" />
                  </linearGradient>
                  {/* Shade highlight for 3D effect */}
                  <linearGradient id="shadeHighlight" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
                    <stop offset="100%" stopColor="rgba(0,0,0,0)" />
                  </linearGradient>
                  {/* Inner shade warm reflection */}
                  <radialGradient id="shadeInner" cx="50%" cy="0%" r="100%">
                    <stop offset="0%" stopColor={lightOn ? `rgba(253, 224, 71, ${brightness / 150})` : 'rgba(100,100,100,0.3)'} />
                    <stop offset="100%" stopColor={lightOn ? `rgba(180, 120, 20, ${brightness / 300})` : 'rgba(60,60,60,0.2)'} />
                  </radialGradient>
                  {/* Light cone gradient */}
                  <linearGradient id="lightCone" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={lightOn ? `rgba(253, 224, 71, ${brightness / 200})` : 'transparent'} />
                    <stop offset="40%" stopColor={lightOn ? `rgba(253, 224, 71, ${brightness / 400})` : 'transparent'} />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>

                {/* Ceiling plate */}
                <ellipse cx="100" cy="4" rx="18" ry="4" fill="#57534e" stroke="#44403c" strokeWidth="1" />
                <rect x="86" y="0" width="28" height="4" fill="#57534e" />

                {/* Cable/rod */}
                <line x1="100" y1="8" x2="100" y2="45" stroke="#78716c" strokeWidth="2.5" />

                {/* Lamp shade - smooth bell/dome shape */}
                <path
                  d="M100 45 C100 45, 97 48, 96 52 C94 58, 80 62, 62 72 C56 75, 52 80, 52 84 L148 84 C148 80, 144 75, 138 72 C120 62, 106 58, 104 52 C103 48, 100 45, 100 45 Z"
                  fill="url(#shadeOuter)"
                  stroke="#44403c"
                  strokeWidth="1"
                />
                {/* Shade highlight strip for realism */}
                <path
                  d="M100 46 C98 49, 96 53, 82 63 C74 68, 66 73, 60 78 L66 78 C72 73, 80 68, 88 63 C98 55, 99 50, 100 46 Z"
                  fill="url(#shadeHighlight)"
                  opacity="0.6"
                />

                {/* Shade bottom rim */}
                <ellipse cx="100" cy="84" rx="48" ry="5" fill="#44403c" stroke="#3f3f46" strokeWidth="0.5" />

                {/* Inner shade visible surface */}
                <ellipse cx="100" cy="83" rx="44" ry="4" fill="url(#shadeInner)" className="transition-all duration-300" />

                {/* Light cone - trapezoid using SVG polygon with gradient */}
                {lightOn && (
                  <polygon
                    points={`${100 - 42} 88, ${100 + 42} 88, ${100 + 30 + brightness * 0.4} 218, ${100 - 30 - brightness * 0.4} 218`}
                    fill="url(#lightCone)"
                    className="transition-all duration-500"
                  />
                )}

                {/* Warm spot directly under lamp */}
                {lightOn && (
                  <ellipse cx="100" cy="210" rx={20 + brightness * 0.3} ry="6"
                    fill={`rgba(253, 224, 71, ${brightness / 500})`}
                    className="transition-all duration-500"
                  />
                )}
              </svg>
            </div>

            {/* Power toggle */}
            <div className="flex justify-center mb-6">
              <button
                onClick={toggleLight}
                aria-label={lightOn ? "Turn off light" : "Turn on light"}
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
                <span className="text-muted-foreground">{t("demo.intensity")}</span>
                <span className="font-medium text-foreground">{brightness}%</span>
              </div>
              <Slider
                value={[brightness]}
                onValueChange={(v) => setBrightness(v[0])}
                min={10}
                max={100}
                step={1}
                aria-label="Light brightness intensity"
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
                  <h3 className="font-semibold text-foreground">{t("demo.blinds")}</h3>
                  <p className="text-sm text-muted-foreground">
                    {getBlindsStatus()}
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
                    className="h-[8.33%] bg-gradient-to-b from-slate-300/80 to-slate-400/80 border-b border-slate-500/30 backdrop-blur-[1px]"
                  />
                ))}
              </div>
            </div>

            {/* Controls - Up/Stop/Down buttons */}
            <div className="flex justify-center gap-3 mb-4">
              <button
                onClick={() => animateBlinds('up')}
                disabled={isAnimating && animationDirection !== 'up'}
                aria-label="Open blinds"
                className={`p-3 rounded-xl transition-all ${
                  animationDirection === 'up'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted hover:bg-muted/80 text-foreground'
                } disabled:opacity-40`}
              >
                <ChevronUp className="w-5 h-5" />
              </button>
              <button
                onClick={stopBlinds}
                disabled={!isAnimating}
                aria-label="Stop blinds"
                className="p-3 rounded-xl bg-muted hover:bg-muted/80 text-foreground disabled:opacity-40 transition-all"
              >
                <Square className="w-5 h-5" />
              </button>
              <button
                onClick={() => animateBlinds('down')}
                disabled={isAnimating && animationDirection !== 'down'}
                aria-label="Close blinds"
                className={`p-3 rounded-xl transition-all ${
                  animationDirection === 'down'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted hover:bg-muted/80 text-foreground'
                } disabled:opacity-40`}
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>

            {/* Percentage slider */}
            <Slider
              value={[blindsTarget]}
              onValueChange={setBlindsPercentage}
              min={0}
              max={100}
              step={1}
              aria-label="Blinds open percentage"
              className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary [&_[role=slider]]:w-5 [&_[role=slider]]:h-5 [&_[role=slider]]:shadow-md [&_.relative]:bg-muted/60 [&_.relative]:h-2 [&_.relative]:rounded-full [&_[data-orientation=horizontal]>.absolute]:bg-gradient-to-r [&_[data-orientation=horizontal]>.absolute]:from-primary [&_[data-orientation=horizontal]>.absolute]:to-accent [&_[data-orientation=horizontal]>.absolute]:rounded-full"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8 md:mt-12">
          <a
            href={`https://wa.me/50765956439?text=${encodeURIComponent(t("demo.cta.message"))}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-full hover:opacity-90 hover:scale-105 transition-all shadow-lg"
          >
            {t("demo.cta")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
