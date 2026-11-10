import React,{useState,useEffect,useCallback,useMemo} from 'react';
import {days} from './data';
import Header from './components/Header';
import Hero from './components/Hero';
import DaySelector from './components/DaySelector';
import Timeline from './components/Timeline';
import TripMap from './components/TripMap';
import TodayOverview from './components/TodayOverview';
import ScheduleWarnings from './components/ScheduleWarnings';
import FamilyToolkit from './components/FamilyToolkit';
import BottomNav from './components/BottomNav';
import WeatherForecast from './components/WeatherForecast';
import useTripProgress from './hooks/useTripProgress';
import useLocalSettings from './hooks/useLocalSettings';
export default function App(){
 const [day,setDay]=useState(0),[selected,setSelected]=useState(null),[mobileMap,setMobileMap]=useState(false);
 const {done,toggle}=useTripProgress();const [settings,onSetting]=useLocalSettings();
 const current=days[day];const total=useMemo(()=>days.reduce((sum,d)=>sum+d.items.length,0),[]),count=Object.values(done).filter(Boolean).length;
 const changeDay=useCallback(i=>{setDay(i);setSelected(null)},[]);
 const closeMap=useCallback(()=>setMobileMap(false),[]);
 const selectStop=useCallback((i,shouldOpen=false)=>{setSelected(i);if(shouldOpen&&window.matchMedia('(max-width: 900px)').matches)setMobileMap(true)},[]);
 const navigate=id=>{if(mobileMap)setMobileMap(false);requestAnimationFrame(()=>document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'}))};
 useEffect(()=>{document.body.classList.toggle('map-overlay-open',mobileMap);return()=>document.body.classList.remove('map-overlay-open')},[mobileMap]);
 return <div className="app-shell"><Header onReset={()=>{changeDay(0);navigate('itinerary-panel')}}/><main className="layout"><section className="overview"><Hero/><WeatherForecast day={day} onDayChange={changeDay}/><TodayOverview day={day} onDayChange={changeDay} onSelect={selectStop} onOpenMap={()=>setMobileMap(true)} done={done} onToggle={toggle}/><div id="itinerary-panel"><DaySelector day={day} onChange={changeDay}/><ScheduleWarnings day={day} onSelect={i=>selectStop(i,true)}/><Timeline key={day} day={day} current={current} selected={selected} onSelect={i=>selectStop(i,true)} done={done} onToggle={toggle}/></div><FamilyToolkit settings={settings} onSetting={onSetting}/></section><TripMap day={day} selected={selected} onSelect={selectStop} open={mobileMap} onClose={closeMap} doneCount={count} total={total} settings={settings}/></main><BottomNav onMap={()=>setMobileMap(true)} onNavigate={navigate}/><footer>Made with ♡ for our Busan memories <span>·</span> 2026 NOVEMBER</footer></div>;
}
