import React from "react";

export const useEffectOnce = (effect: () => void) => {
  const hasRun = React.useRef(false);

  React.useEffect(() => {
    if (hasRun.current) return;

    effect();
    hasRun.current = true;

    return () => {
      hasRun.current = false;
    };
  }, [hasRun.current]);
};
