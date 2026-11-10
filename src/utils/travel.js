import L from 'leaflet';
export const naverSearchUrl = (place) => `https://map.naver.com/p/search/${encodeURIComponent(place.ko || place.name)}`;
export function pinIcon(emoji,active=false){return L.divIcon({html:`<div class="cute-pin ${active?'active':''}"><span>${emoji}</span></div>`,iconSize:[42,48],iconAnchor:[21,46],className:'custom-leaflet-icon'});}
