import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIsInView(ref);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Ease-out function
      const easedValue = 1 - Math.pow(1 - percentage, 3);
      
      setCount(Math.floor(easedValue * end));

      if (progress < duration) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(end); // Ensure it ends exactly on the target number
      }
    };

    requestAnimationFrame(animateCount);
    
  }, [end, duration, isInView]);

  return <div ref={ref}>{count.toLocaleString()}</div>;
};

// Custom hook to detect if element is in view
const useIsInView = (ref: React.RefObject<HTMLElement>) => {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIntersecting(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return isIntersecting;
};


export default Counter;