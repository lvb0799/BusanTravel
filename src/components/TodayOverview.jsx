import React from 'react';
import {Clock3,Navigation,Check,TrainFront,ArrowRight,CalendarDays} from 'lucide-react';
import {days,places,modeMeta} from '../data';
import useKoreaTime from '../hooks/useKoreaTime';
import {clockMinutes} from '../utils/schedule';
import {naverSearchUrl} from '../utils/travel';
export default function TodayOverview({day,onDayChange,onSelect,done,onToggle,onOpenMap}){
 const now=useKoreaTime(); const todayIndex=days.findIndex(d=>`2026-${d.date.replace('/','-')}`===now.date);
 const activeDay=todayIndex>=0?todayIndex:day;
 const current=days[activeDay];
 const idx=current.items.findIndex((stop,i)=>!done[`${activeDay}-${i}`]&&(todayIndex!==activeDay||clockMinutes(stop.time)===null||clockMinutes(stop.time)>=now.minute-25));
 const next=idx<0?current.items.findIndex((_,i)=>!done[`${activeDay}-${i}`]):idx;
 const stop=next>=0?current.items[next]:null;
 const place=stop?places[stop.place]:null;
 const finished=current.items.filter((_,i)=>done[`${activeDay}-${i}`]).length;
 const status=todayIndex<0?'行程預覽 · 非即時定位':activeDay===todayIndex?'韓國當地時間 · 依計畫推估':'行程預覽';
 return <section className="today-panel" id="today-panel"><div className="today-header"><div><div className="tiny-kicker">🐻 OUR LITTLE ADVENTURE</div><h2>今日旅行小幫手</h2><p>{status} · {now.display} KST</p></div><span className="today-sun">🌤️</span></div>
 <div className="today-switch"><span>DAY {activeDay+1} · {current.date}</span>{todayIndex>=0&&activeDay!==day&&<button type="button" onClick={()=>onDayChange(activeDay)}>切到今天 <ArrowRight size={14}/></button>}{todayIndex<0&&<span>旅行期間 11/13–11/17</span>}</div>
 {stop?<div className="next-stop"><div className="next-top"><span className="status-pill">下一站 · 依計畫</span><strong><Clock3 size={14}/>{stop.time}</strong></div><div className="next-body"><span>{place?.emoji||'📍'}</span><div><h3>{stop.title}</h3><p>{stop.desc}</p></div></div><div className="next-transport"><TrainFront size={16}/> {modeMeta[stop.mode]?.name} · {stop.duration}</div><div className="next-actions"><a href={naverSearchUrl(place||{name:stop.title})} target="_blank" rel="noopener noreferrer"><Navigation size={17}/> Naver 地圖搜尋</a><button type="button" onClick={()=>{onDayChange(activeDay);onSelect(next,true);onOpenMap()}}>交通細節</button><button type="button" onClick={()=>onToggle(activeDay,next)}><Check size={16}/> 打卡</button></div></div>:<div className="next-stop"><h3>🎉 今天都完成啦！</h3><p>記得休息、喝水、看看旅遊照片。</p></div>}
 <div className="today-progress"><span><CalendarDays size={16}/> 今天完成 {finished}/{current.items.length} 項</span><div className="progress-track"><div style={{width:`${finished/current.items.length*100}%`}}/></div></div>
 <p className="today-disclaimer">不讀取 GPS、不追蹤現場位置；下一站由旅行日期、預定時間及打卡狀態推估。</p></section>;
}
