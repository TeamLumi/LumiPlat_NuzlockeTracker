import { useCallback, useLayoutEffect, useState } from 'react';
import styles from './UpdateSW.module.scss';

declare global {
  interface Window {
    setServiceWorker: (sw: ServiceWorkerRegistration) => void;
  }
}

function UpdateSW(): JSX.Element {
  const [waitingServiceWorker, setWaitingServiceWorker] = useState(null);

  const setServiceWorker = useCallback(
    (registration: ServiceWorkerRegistration) => {
      setWaitingServiceWorker(registration.waiting);
      if (registration.waiting && registration.waiting.state === 'installed') {
        // New service worker installed, trigger the update
        updateServiceWorker();
      }
    },
    [setWaitingServiceWorker]
  );

  useLayoutEffect(() => {
    window.setServiceWorker = setServiceWorker;
  }, [setServiceWorker]);

  const updateServiceWorker = () => {
    if (waitingServiceWorker) {
      waitingServiceWorker.postMessage({ type: 'SKIP_WAITING' });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      waitingServiceWorker.addEventListener('statechange', (e: any) => {
        if (e.target.state === 'activated') {
          window.location.reload();
        }
      });
    }
  };

  // No visible UI, update automatically if a new version is available
  return null;
}

export default UpdateSW;
