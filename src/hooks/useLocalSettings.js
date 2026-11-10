import {useState,useEffect} from 'react';
const KEY='busan-2026-family-settings-v2';
const defaults={childHeight:'112',childAge:'5',centralBayAddress:'부산광역시 수영구 광안해변로 189',daisyAddress:'부산광역시 수영구 민락본동로19번길 16-1, 101호',bagPlan:'建議退房後帶行李到西面安排寄放；前往機場前務必取回。',airportTarget:'16:30'};
export default function useLocalSettings(){
 const [settings,setSettings]=useState(()=>{
   try{const old=JSON.parse(localStorage.getItem(KEY)||'{}');return {...defaults,...Object.fromEntries(Object.entries(old).filter(([k,v])=>k in defaults&&v!==''))}}
   catch{return {...defaults}}
 });
 useEffect(()=>{try{localStorage.setItem(KEY,JSON.stringify(settings))}catch{}},[settings]);
 return [settings,(key,value)=>setSettings(s=>({...s,[key]:value}))];
}
