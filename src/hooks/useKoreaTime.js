import {useEffect,useState} from 'react';
const formatter=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Seoul',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'});
export function koreaClock(){const o=Object.fromEntries(formatter.formatToParts(new Date()).filter(x=>x.type!=='literal').map(x=>[x.type,x.value]));return {date:`${o.year}-${o.month}-${o.day}`,minute:Number(o.hour)*60+Number(o.minute),display:`${o.hour}:${o.minute}`};}
export default function useKoreaTime(){const [now,setNow]=useState(koreaClock);useEffect(()=>{const t=setInterval(()=>setNow(koreaClock()),30000);return()=>clearInterval(t)},[]);return now;}
