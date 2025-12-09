import { useScrollAnimation, useAnimatedCounter } from '@/hooks/useScrollAnimation';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

const AnimatedCounter = ({ end, suffix = '', duration = 2000, className = '' }: AnimatedCounterProps) => {
  const { ref, isVisible } = useScrollAnimation(0.5);
  const count = useAnimatedCounter(end, duration, isVisible);

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  );
};

export default AnimatedCounter;
