import { useState, useEffect } from 'react';

const VERSION_CONFIG_URL = 'https://gist.githubusercontent.com/kycjojo/bad78d48962d0f36f81710e566d70c5e/raw/version-config.json';
const CURRENT_VERSION = '1.0.0';

function compareVersions(v1: string, v2: string): number {
  const clean1 = v1.replace(/-(beta|alpha|rc)\d*/i, '');
  const clean2 = v2.replace(/-(beta|alpha|rc)\d*/i, '');
  const p1 = clean1.split('.').map(Number);
  const p2 = clean2.split('.').map(Number);
  const maxLen = Math.max(p1.length, p2.length);

  for (let i = 0; i < maxLen; i++) {
    const n1 = p1[i] ?? 0;
    const n2 = p2[i] ?? 0;
    if (n1 > n2) return 1;
    if (n1 < n2) return -1;
  }
  return 0;
}

export function useForceUpdate() {
  const [needsUpdate, setNeedsUpdate] = useState(false);
  const [updateUrl, setUpdateUrl] = useState('');
  const [updateMessage, setUpdateMessage] = useState('');
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    async function checkVersion() {
      try {
        const response = await fetch(`${VERSION_CONFIG_URL}?t=${Date.now()}`, {
          cache: 'no-store',
          headers: { 'Cache-Control': 'no-cache' },
        });
        if (!response.ok) {
          setChecking(false);
          return;
        }
        const config = await response.json();
        const prod = config.production;
        if (prod && compareVersions(CURRENT_VERSION, prod.minVersion) < 0) {
          setUpdateUrl(prod.updateUrl || '');
          setUpdateMessage(prod.updateMessage || '');
          setNeedsUpdate(true);
        }
      } catch (err) {
        console.log('[ForceUpdate] Version check skipped:', err);
      } finally {
        setChecking(false);
      }
    }
    checkVersion();
  }, []);

  return { needsUpdate, updateUrl, updateMessage, checking };
}
