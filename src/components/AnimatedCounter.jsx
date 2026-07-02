import { useEffect, useState } from 'react';

function AnimatedCounter({ target, trigger }) {
  const [value, setValue] = useState(0);
  const suffix = target.replace(/\d/g, '');
  const numeric = parseInt(target, 10);

  useEffect(() => {
    if (!trigger) return;
    let startTs = null;
    const duration = 1600;

    const tick = (ts) => {
      if (!startTs) startTs = ts;
      const p = Math.min((ts - startTs) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * numeric));
      if (p < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [trigger, numeric]);

  return <>{value}{suffix}</>;
}

export default AnimatedCounter;
