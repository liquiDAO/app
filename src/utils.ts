/*jslint es6 */
import { useState, useEffect } from 'react';

declare global {
  interface Window {
    marina: any;
  }
}

// custom react hook to enable and connect users Marina account.
function useChecks() {
  const [isInstalled, setIsInstalled] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    let isCheckingMarina = false;
    const interval = setInterval(async () => {
      try {
        const marina = window.marina;

        if (marina === undefined) return;

        setIsInstalled(true);

        if (isCheckingMarina) return;
        isCheckingMarina = true;

        let isEnabled = await window.marina.isEnabled();
        setIsConnected(isEnabled);
        

      } catch (error) {
        console.log(error);
      } finally {
        isCheckingMarina = false;
      }
    }, 1000);

    // Clean up
    return () => {
      clearInterval(interval);
    };
  }, []);

  return [isInstalled, isConnected];
}

const handleInstall = () => {
  const newWindow = window.open(
    'https://vulpem.com/marina',
    '_blank',
    'noopener,noreferrer',
  );
  if (newWindow) newWindow.opener = null;
};

export { useChecks, handleInstall };