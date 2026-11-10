import { useState,useEffect } from 'react';
const KEY='busan-complete-v1';
export default function useTripProgress(){
  const [done,setDone]=useState(()=>{try{return JSON.parse(localStorage.getItem(KEY)) || {}}catch{return {}}});
  useEffect(()=>{try{localStorage.setItem(KEY,JSON.stringify(done));}catch{}},[done]);
  const toggle=(day,index)=>setDone(s=>({...s,[`${day}-${index}`]:!s[`${day}-${index}`]}));
  return {done,toggle};
}
