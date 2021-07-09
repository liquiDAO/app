/*jslint es6 */
import { useState, useEffect } from 'react';

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

        if (isEnabled) {
          setIsConnected(isEnabled);
        } else {
          document
            .getElementById('btn1')
            .addEventListener(
              'click',
              async () => await window.marina.enable(),
            );
        }
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

// open the install link on a new tab
function link() {
  window.open('https://vulpem.com/marina');
}

export { useChecks, link };
