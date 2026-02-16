import { useState, useEffect } from 'react';
import { Excalidraw } from '@excalidraw/excalidraw';
import '@excalidraw/excalidraw/index.css';

/**
 * Whiteboard — React component wrapping Excalidraw.
 * Listens for postMessage from parent to toggle theme.
 * MIT licensed, 100% free.
 */
export default function Whiteboard() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === 'set-theme') {
        setTheme(e.data.theme);
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Excalidraw theme={theme} />
    </div>
  );
}
