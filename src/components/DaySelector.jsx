import React from 'react';
import {days} from '../data';
export default function DaySelector({day,onChange}){
  return <><div className="section-title"><div><span className="tiny-kicker">THE ITINERARY</span><h2>每天都是小冒險 <span>✧</span></h2></div><div className="mini-hint">點選日期切換行程</div></div>
    <nav className="day-tabs" aria-label="選擇旅行日期">{days.map((d,i)=><button type="button" key={d.date} aria-current={day===i?'date':undefined} className={`day-tab ${day===i?'chosen':''}`} onClick={()=>onChange(i)} style={{'--day-color':d.color}}><span className="day-emoji">{d.emoji}</span><span><b>DAY {i+1}</b><small>{d.date} ({d.week})</small></span></button>)}</nav>
    <div className="day-intro" style={{'--day-color':days[day].color}}><div className="intro-emoji">{days[day].emoji}</div><div className="intro-text"><div className="intro-top">DAY {day+1} · 2026/{days[day].date} ({days[day].week})</div><h3>{days[day].name}</h3><p>{days[day].description}</p></div><div className="intro-sticker">{days[day].subtitle} <span>✦</span></div></div>
  </>;
}
