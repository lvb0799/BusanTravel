/** Open-Meteo public forecast: Busan center, not a street-level forecast. */
export const BUSAN_WEATHER_URL = 'https://api.open-meteo.com/v1/forecast';
const CACHE_KEY = 'busan-weather-v1';
const CACHE_TTL_MS = 30 * 60 * 1000;

const vars = ['weather_code', 'temperature_2m_max', 'temperature_2m_min',
  'precipitation_probability_max', 'wind_speed_10m_max'];

function fromPayload(payload) {
  const daily = payload?.daily;
  if (!Array.isArray(daily?.time)) throw new Error('天氣資料格式異常');
  return daily.time.map((date, i) => ({
    date,
    code: daily.weather_code?.[i] ?? null,
    high: daily.temperature_2m_max?.[i] ?? null,
    low: daily.temperature_2m_min?.[i] ?? null,
    rain: daily.precipitation_probability_max?.[i] ?? null,
    wind: daily.wind_speed_10m_max?.[i] ?? null,
  }));
}

function readCache() {
  try {
    const value = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null');
    return value && Array.isArray(value.days) ? value : null;
  } catch { return null; }
}

/** Returns {days, updatedAt, stale}; if offline, a previous result may be returned as stale. */
export async function getBusanForecast({signal, force = false} = {}) {
  const cache = readCache();
  if (!force && cache && Date.now() - cache.updatedAt < CACHE_TTL_MS)
    return {...cache, stale: false};
  const params = new URLSearchParams({
    latitude: '35.1796', longitude: '129.0756',
    daily: vars.join(','), timezone: 'Asia/Seoul', forecast_days: '16',
    wind_speed_unit: 'kmh', temperature_unit: 'celsius',
  });
  try {
    const resp = await fetch(`${BUSAN_WEATHER_URL}?${params}`, {signal});
    if (!resp.ok) throw new Error(`天氣 API 暫時無法使用 (${resp.status})`);
    const days = fromPayload(await resp.json());
    const data = {days, updatedAt: Date.now()};
    try {localStorage.setItem(CACHE_KEY, JSON.stringify(data));} catch { /* storage may be disabled */ }
    return {...data, stale: false};
  } catch (error) {
    if (signal?.aborted) throw error;
    if (cache) return {...cache, stale: true};
    throw error;
  }
}

export function weatherDescription(code) {
  if (code === 0) return {emoji: '☀️', text: '晴朗'};
  if ([1,2,3].includes(code)) return {emoji: '🌤️', text: '多雲'};
  if ([45,48].includes(code)) return {emoji: '🌫️', text: '有霧'};
  if ([51,53,55,56,57].includes(code)) return {emoji: '🌦️', text: '毛毛雨'};
  if ([61,63,65,66,67,80,81,82].includes(code)) return {emoji: '🌧️', text: '有雨'};
  if ([71,73,75,77,85,86].includes(code)) return {emoji: '🌨️', text: '可能降雪'};
  if ([95,96,99].includes(code)) return {emoji: '⛈️', text: '雷雨'};
  return {emoji: '🌡️', text: '天氣預報'};
}

export function weatherAdvice(item) {
  if (!item) return '天氣資訊可能尚未涵蓋這個日期，請接近出發日再查看。';
  const notes = [];
  if (item.rain != null && item.rain >= 60) notes.push('降雨機率高，建議準備室內備案與雨具');
  else if (item.rain != null && item.rain >= 35) notes.push('可能下雨，帶上輕便雨具');
  if (item.wind != null && item.wind >= 30) notes.push('沿海風較強，留意海邊及戶外設施');
  if (item.low != null && item.low <= 10) notes.push('早晚偏冷，孩子建議穿著保暖外套');
  return notes.length ? notes.join('；') + '。' : '天氣條件暫無明顯警示，仍請依當日現場天氣調整行程。';
}
