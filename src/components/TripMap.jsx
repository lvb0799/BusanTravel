import React,{useEffect,useMemo} from 'react';
import {MapContainer,TileLayer,Marker,Polyline,Tooltip,useMap} from 'react-leaflet';
import L from 'leaflet';
import {Info} from 'lucide-react';
import {places,days} from '../data';
import {pinIcon} from '../utils/travel';
import TripDetails from './TripDetails';
function MapFocus({pointIds,focus,visible}){
  const map=useMap();
  useEffect(()=>{
    if(!visible) return;
    const raf=requestAnimationFrame(()=>{
      map.invalidateSize();
      const p=focus&&places[focus]?.pos;
      if(p)map.flyTo(p,Math.max(map.getZoom(),12),{duration:.9});
      else if(pointIds.length)map.flyToBounds(L.latLngBounds(pointIds.map(id=>places[id].pos)).pad(.24),{duration:.8,maxZoom:12});
    });
    return ()=>cancelAnimationFrame(raf);
  },[map,pointIds,focus,visible]);
  return null;
}
export default function TripMap({day,selected,onSelect,open,onClose,doneCount,total,settings}){
  const current=days[day];
  const pointIds=useMemo(()=>[...new Set(current.items.filter(s=>s.place&&places[s.place]).map(s=>s.place))],[current]);
  const stop=selected===null?null:current.items[selected];
  useEffect(()=>{if(!open)return;const onKey=e=>{if(e.key==='Escape')onClose()};document.addEventListener('keydown',onKey);return()=>document.removeEventListener('keydown',onKey)},[open,onClose]);
  return <aside id="trip-map" className={`map-panel ${open?'map-mobile-show':''}`} aria-label="旅行地圖和景點資訊"><div className="map-panel-head"><div><div className="tiny-kicker">EXPLORE BUSAN</div><h2>我們的旅行地圖 <span>🗺️</span></h2><p>點選地圖上的可愛圖釘，一起探索吧！</p></div><button className="mobile-close" type="button" onClick={onClose}>收起地圖 ✕</button></div>
    <div className="map-wrap"><MapContainer center={[35.15,129.1]} zoom={11} scrollWheelZoom={false} zoomControl={true} className="leaflet-map"><TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/><MapFocus pointIds={pointIds} focus={stop?.place} visible={open||window.innerWidth>900}/>{pointIds.length>1&&<Polyline positions={pointIds.map(id=>places[id].pos)} pathOptions={{color:current.color,weight:4,opacity:.85,dashArray:'5,11'}}/>}{pointIds.map(id=><Marker key={`${day}-${id}-${stop?.place===id}`} position={places[id].pos} icon={pinIcon(places[id].emoji,stop?.place===id)} eventHandlers={{click:()=>onSelect(current.items.findIndex(s=>s.place===id),false)}}><Tooltip direction="top" offset={[0,-40]}>{places[id].name}</Tooltip></Marker>)}</MapContainer><div className="map-legend"><span>● 今日景點</span><span>┄ 示意連線（非導航）</span></div></div>
    <TripDetails day={day} selected={selected} stop={stop} settings={settings}/>
    <div className="progress-card"><div className="progress-heading"><span>🧡 旅行打卡進度</span><strong>{doneCount} / {total}</strong></div><div className="progress-track"><div style={{width:`${total?doneCount/total*100:0}%`}}/></div><p>每完成一個行程，點時間軸右邊的 ✓ 收藏回憶！</p></div>
    <div className="map-hint"><Info size={15}/><span>地圖使用 OpenStreetMap。住宿圖釘與未指定餐廳以區域示意；直線不代表實際交通路線。</span></div>
  </aside>;
}
