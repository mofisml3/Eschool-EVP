import { useEffect, useState } from 'react';

/**
 * Tracks whether Caps Lock is currently active. Polls keyboard events
 * on the window so the state stays in sync regardless of which input
 * has focus. Returns false on browsers where getModifierState is
 * unavailable (older / non-keyboard contexts).
 */
export function useCapsLock(): boolean {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (typeof event.getModifierState === 'function') {
        setIsOn(event.getModifierState('CapsLock'));
      }
    }

    window.addEventListener('keydown', handleKey);
    window.addEventListener('keyup', handleKey);

    return () => {
      window.removeEventListener('keydown', handleKey);
      window.removeEventListener('keyup', handleKey);
    };
  }, []);

  return isOn;
}
