import React from 'react';
import {Compass,CalendarDays,Map,Backpack} from 'lucide-react';
const items=[['today-panel','今天',Compass],['itinerary-panel','行程',CalendarDays],['trip-map','地圖',Map],['family-toolkit','工具箱',Backpack]];
export default function BottomNav({onMap,onNavigate}){return <nav className="bottom-nav" aria-label="手機快捷導覽">{items.map(([id,label,Icon])=><button type="button" key={id} onClick={()=>id==='trip-map'?onMap():onNavigate(id)}><Icon size={22}/><span>{label}</span></button>)}</nav>}
