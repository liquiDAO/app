import React, { useState, useEffect, useCallback } from 'react';

// custom react hook to enable and connect users Marina account.
function useChecks() {
  const [isInstalled, setIsInstalled] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const isMarinaInstalled = async () => {
    if (window.marina) {
      setIsInstalled(!isInstalled);
    } else {
      setIsInstalled(isInstalled);
    }
  };

  const checkEnabled = useCallback(async () => {
    let res = await window.marina.isEnabled();
    if (res) {
      setIsConnected(!isConnected);
    } else {
        document
        .getElementById('btn1')
        .addEventListener('click', async () => await window.marina.enable());
      document
        .getElementById('btn2')
        .addEventListener('click', async () => await window.marina.enable());
      setIsConnected(!isConnected);
    }
  }, []);

  useEffect(() => {
    isMarinaInstalled();
    checkEnabled();
  }, []);

  return [isInstalled, isConnected];
}

// open the install link on a new tab
function link() {
    window.open('https://vulpem.com/marina')
}

export { useChecks, link };