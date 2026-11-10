import React from 'react';
import { RotateCcw } from 'lucide-react';
export default function Header({ onReset }) {
  return <header className="topbar"><div className="brand"><span className="brand-icon">🌷</span><div><strong>BUSAN <em>little trip</em></strong><small>我們的釜山旅行手帳</small></div></div><div className="top-right"><span className="top-status"><i/> 出發日期 · 2026.11.13</span><button type="button" className="icon-button" title="返回第一天" aria-label="返回第一天" onClick={onReset}><RotateCcw size={17}/></button></div></header>;
}
