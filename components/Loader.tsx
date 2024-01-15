import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;
    const duration = 10000;
    const steps = 100;
    const increment = duration / steps;

    const interval = setInterval(() => {
      currentProgress += 100 / steps;
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
      }
    }, increment);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center my-20">
    <h2 className="text-xl font-semibold mb-6">Ihre Bestellung wird verarbeitet</h2>
      <Progress value={progress} className="w-[60%]" />
    </div>
  );
};

export default Loader;