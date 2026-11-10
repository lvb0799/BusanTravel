import React from 'react';
import {CloudSun, CloudRain, Wind, RefreshCw, ExternalLink} from 'lucide-react';
import {days} from '../data';
import useBusanWeather from '../hooks/useBusanWeather';
import {weatherAdvice, weatherDescription} from '../services/weatherService';

const dateFor = day => `2026-${day.date.replace('/', '-')}`;
const formatTemp = value => Number.isFinite(value) ? `${Math.round(value)}°` : '—';
const formatNum = (value, unit) => Number.isFinite(value) ? `${Math.round(value)}${unit}` : '—';

export default function WeatherForecast({day, onDayChange}) {
  const {days: forecast, updatedAt, loading, error, stale, refresh} = useBusanWeather();
  const selected = days[day];
  const match = forecast.find(x => x.date === dateFor(selected));
  const description = match ? weatherDescription(match.code) : {emoji: '🌤️', text: '尚無預報'};
  const updated = updatedAt ? new Intl.DateTimeFormat('zh-TW', {
    timeZone: 'Asia/Seoul', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).format(updatedAt) : null;
  return <section className="weather-panel" aria-label="釜山天氣預報">
    <div className="weather-title">
      <div><div className="tiny-kicker">BUSAN WEATHER · OPEN-METEO</div><h2><CloudSun size={20}/> 釜山天氣小幫手</h2></div>
      <button type="button" onClick={refresh} disabled={loading} aria-label="更新天氣預報" className="weather-refresh"><RefreshCw size={16}/> {loading ? '載入中' : '更新'}</button>
    </div>
    <p className="weather-intro">依韓國時間顯示釜山市區每日預報，點選日期查看穿搭與雨天提醒。</p>
    <div className="weather-days" role="group" aria-label="選擇預報日期">
      {days.map((d, i) => {
        const item = forecast.find(x => x.date === dateFor(d));
        return <button type="button" key={d.date} onClick={() => onDayChange(i)} className={`weather-day ${i === day ? 'active' : ''}`} aria-pressed={i === day}>
          <span>DAY {i+1}</span><strong>{d.date}</strong><span className="weather-day-emoji">{item ? weatherDescription(item.code).emoji : '☁️'}</span><small>{item ? `${formatTemp(item.low)}–${formatTemp(item.high)}` : '待更新'}</small>
        </button>;
      })}
    </div>
    {error && <div className="weather-alert" role="status">目前無法讀取天氣：{error}。可稍後重試。</div>}
    <div className="weather-detail" aria-live="polite">
      <div className="weather-main"><span className="weather-main-emoji" aria-hidden="true">{description.emoji}</span><div><strong>{selected.date} · {description.text}</strong><div className="weather-temperature">{match ? `${formatTemp(match.low)}–${formatTemp(match.high)}` : '—'}</div></div></div>
      <div className="weather-metrics"><span><CloudRain size={16}/> 降雨 {formatNum(match?.rain, '%')}</span><span><Wind size={16}/> 最大風速 {formatNum(match?.wind, ' km/h')}</span></div>
      <p className="weather-tip">🐻 {weatherAdvice(match)}</p>
    </div>
    <div className="weather-footer"><span>{stale ? '⚠️ 離線／載入失敗：顯示上次快取' : updated ? `預報更新：${updated}（韓國時間）` : '預報資料載入中或尚未提供'}。預報可能變動，非即時觀測。</span><a href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer">Open-Meteo <ExternalLink size={12}/></a></div>
  </section>;
}
