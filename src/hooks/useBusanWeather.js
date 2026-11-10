import {useCallback, useEffect, useState} from 'react';
import {getBusanForecast} from '../services/weatherService';

export default function useBusanWeather() {
  const [result, setResult] = useState({days: [], updatedAt: null, stale: false, loading: true, error: ''});
  const refresh = useCallback(async (force = false, signal) => {
    setResult(old => ({...old, loading: true, error: ''}));
    try {
      const data = await getBusanForecast({force, signal});
      if (!signal?.aborted) setResult({...data, loading: false, error: ''});
    } catch (error) {
      if (!signal?.aborted) setResult(old => ({...old, loading: false, error: error.message || '天氣載入失敗'}));
    }
  }, []);
  useEffect(() => {
    const controller = new AbortController();
    refresh(false, controller.signal);
    return () => controller.abort();
  }, [refresh]);
  return {...result, refresh: () => refresh(true)};
}
