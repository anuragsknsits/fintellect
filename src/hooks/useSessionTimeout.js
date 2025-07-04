import { useEffect } from 'react';
export const useSessionTimeout = (onTimeout, timeout = 10 * 60 * 1000) => {
  useEffect(() => {
    const timer = setTimeout(() => onTimeout(), timeout);
    return () => clearTimeout(timer);
  }, []);
};
