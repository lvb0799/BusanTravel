import React from 'react';
import {AlertTriangle,Info} from 'lucide-react';
import {validateDay} from '../utils/schedule';
export default function ScheduleWarnings({day,onSelect}){const warnings=validateDay(day);if(!warnings.length)return <div className="schedule-ok">🌼 今日沒有偵測到已知的行程警示；仍請確認營業時間與交通。</div>;
return <section className="schedule-warnings" id="schedule-warnings"><div className="schedule-title"><AlertTriangle size={18}/><h3>行程小雷達</h3><span>{warnings.length} 項提醒</span></div>{warnings.map((w,i)=><button key={i} className="schedule-warning" type="button" onClick={()=>onSelect(w.stop)}><span>{w.kind==='warning'?<AlertTriangle size={18}/>:<Info size={18}/>}</span><div><strong>{w.title}</strong><p>{w.detail}</p><small>查看相關行程 ↗</small></div></button>)}<p className="warning-footnote">這是根據已知資料與排定時間進行的靜態檢查，不會即時讀取班次、排隊或店家營業資訊。</p></section>}
