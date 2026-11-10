import {days} from '../data';
export function clockMinutes(time){const m=String(time).match(/^(\d{1,2}):(\d{2})/);return m?Number(m[1])*60+Number(m[2]):null;}
export function endMinutes(time){const m=String(time).match(/[–-]\s*(\d{1,2}):(\d{2})/);return m?Number(m[1])*60+Number(m[2]):null;}
export const KNOWN_CHECKS={
  1:[{kind:'warning',title:'ARTE MUSEUM 跨區移動過緊',detail:'展館位於影島區，10:00–11:30 加上回廣安里 11:30 的安排缺少往返緩衝，建議取消可選行程或重新編排。',stop:2}],
  2:[{kind:'warning',title:'Club D Oasis 晚間設施可能不開放',detail:'原定 16:30–20:00 玩水；不同設施與季節營業時間不一，請出發前查看官方當日時間，必要時提早入場。',stop:6}],
  3:[{kind:'info',title:'Skyline Luge 兒童乘坐資格',detail:'小朋友 5 歲、112cm：未滿 6 歲不能單獨搭乘；可詢問 85–120cm 的親子共乘票，並由符合資格的成人陪同，依現場人員判定。',stop:1}],
  4:[{kind:'warning',title:'返程當日行李與機場時間',detail:'Daisy House 位於民樂洞；若行李仍在住宿，要從西面回去取行李可能使 18:55 航班報到時間不足。建議行李隨身前往西面另行寄放。',stop:4}]
};
export function validateDay(dayIndex){
 const items=days[dayIndex].items; const checks=[...(KNOWN_CHECKS[dayIndex]||[])];
 for(let i=1;i<items.length;i++){
  const start=clockMinutes(items[i].time);const prevEnd=endMinutes(items[i-1].time);
  if(start!==null&&prevEnd!==null&&start<prevEnd){checks.push({kind:'warning',title:'行程時間重疊',detail:`「${items[i-1].title}」與「${items[i].title}」有時段重疊。`,stop:i});}
 }
 return checks;
}
