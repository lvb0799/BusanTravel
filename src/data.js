// 時間與景點按照旅客提供的 2026/11/13–11/17 圖片整理。
// 地圖座標為景點或區域示意；住宿門牌已預填但圖釘仍是區域示意，避免誤認為精準定位。
export const places = {
 centralbay: {name:'Hotel Central Bay Gwangalli',ko:'호텔 센트럴베이 광안리',pos:[35.1532,129.1186],type:'住宿',emoji:'🏨',address:'부산광역시 수영구 광안해변로 189',mapApprox:true},
 daisy: {name:'Daisy House',ko:'데이지 하우스',pos:[35.1532,129.1186],type:'住宿',emoji:'🏡',address:'부산광역시 수영구 민락본동로19번길 16-1, 101호',mapApprox:true},
 airport: {name:'金海國際機場',ko:'김해국제공항',pos:[35.1795,128.9382],type:'交通',emoji:'✈️',address:'김해국제공항'},
 gwangalli: {name:'廣安里海水浴場',ko:'광안리해수욕장',pos:[35.1532,129.1186],type:'海景',emoji:'🌉',address:'부산광역시 수영구 광안해변로'},
 arte: {name:'ARTE MUSEUM BUSAN',ko:'아르떼뮤지엄 부산',pos:[35.08709354,129.07635383],type:'展覽',emoji:'🎨',address:'부산광역시 영도구 해양로247번길 29',verified:true},
 haeundae: {name:'海雲台海水浴場',ko:'해운대해수욕장',pos:[35.1587,129.1604],type:'海景',emoji:'🏖️',address:'부산광역시 해운대구 해운대해변로'},
 sealife: {name:'SEA LIFE 釜山水族館',ko:'씨라이프 부산아쿠아리움',pos:[35.1603,129.1603],type:'親子',emoji:'🐠',address:'부산광역시 해운대구 해운대해변로 266'},
 clubd: {name:'Club D Oasis 水樂園',ko:'클럽디오아시스',pos:[35.1631,129.1676],type:'玩樂',emoji:'💦',address:'부산광역시 해운대구 달맞이길 30, 엘시티'},
 luge: {name:'Skyline Luge 釜山',ko:'스카이라인 루지 부산',pos:[35.196,129.219],type:'玩樂',emoji:'🏎️',address:'부산광역시 기장군 기장읍 기장해안로 205'},
 nampo: {name:'南浦洞商圈',ko:'남포동',pos:[35.0977,129.0327],type:'購物',emoji:'🛍️',address:'부산광역시 중구 남포동'},
 biff: {name:'BIFF 廣場',ko:'BIFF 광장',pos:[35.0988,129.0286],type:'美食',emoji:'🍢',address:'부산광역시 중구 비프광장로'},
 gukje: {name:'國際市場',ko:'국제시장',pos:[35.1012,129.028],type:'購物',emoji:'🎁',address:'부산광역시 중구 국제시장2길'},
 seomyeon: {name:'西面商圈',ko:'서면',pos:[35.1579,129.0593],type:'購物',emoji:'🛍️',address:'부산광역시 부산진구 서면문화로'},
 lotte: {name:'樂天百貨釜山本店',ko:'롯데백화점 부산본점',pos:[35.1569,129.0568],type:'購物',emoji:'🏬',address:'부산광역시 부산진구 가야대로 772'},
};
export const days = [
 {date:'11/13',week:'五',name:'抵達釜山・廣安里晚餐',subtitle:'Hello, Busan!',color:'#f49b86',emoji:'✈️',description:'抵達釜山的第一晚，先放行李，再去看看浪漫的廣安大橋。',items:[
  {time:'17:40',title:'抵達金海國際機場',desc:'入境、領行李、準備 T-money 交通卡',place:'airport',mode:'plane',duration:'—',transit:'抵達後前往機場輕軌站；如需購卡與儲值可先到便利商店詢問。'},
  {time:'18:30–19:30',title:'前往 CENTRALBAY 住宿',desc:'Check-in／放好行李',place:'centralbay',mode:'metro',duration:'約 50–70 分',transit:'金海機場站搭釜山金海輕軌 → 沙上 Sasang 換乘地鐵 2 號線（萇山方向）→ 廣安 Gwangan 站，出站後依飯店正式地址『광안해변로 189』步行。攜帶大件行李可改搭計程車。',note:'CENTRALBAY 地址已預填；地圖圖釘為廣安里區域示意，建議使用 Naver 搜尋門牌。'},
  {time:'19:30–20:30',title:'廣安里海邊散步',desc:'賞廣安大橋夜景、拍照',place:'gwangalli',mode:'walk',duration:'依飯店位置',transit:'從住宿步行前往廣安里海水浴場。'},
  {time:'20:30 後',title:'廣安里晚餐・夜景',desc:'備選：1953 Hyeongje 豬肉湯飯／Gozip Gwangalli 韓式烤肉',place:'gwangalli',mode:'walk',duration:'步行',transit:'以廣安里海邊商圈為中心，實際餐廳營業時間與候位需事先確認。'}]},
 {date:'11/14',week:'六',name:'換住宿・與朋友會合',subtitle:'Meet up & little adventures',color:'#e6ac55',emoji:'🏠',description:'上午留點彈性探索藝術，下午會合後一起往海雲台走。',items:[
  {time:'08:30–09:30',title:'早餐・整理行李',desc:'迎接海邊的早晨',place:'gwangalli',mode:'walk',duration:'—',transit:'住宿周邊早餐店步行。'},
  {time:'09:30–10:00',title:'CENTRALBAY 退房',desc:'退房並確認行李保管安排',place:'centralbay',mode:'walk',duration:'—',transit:'依飯店櫃檯指示辦理。'},
  {time:'10:00–11:30',title:'ARTE MUSEUM（可加碼）',desc:'沉浸式光影展，需預留交通與入場時間',place:'arte',mode:'taxi',duration:'依實際館址',transit:'ARTE MUSEUM BUSAN 位於影島區（영도구），從廣安里跨區前往；請先確認實際車程與回程時段，避免影響會合。',optional:true,note:'ARTE MUSEUM 位於影島，離廣安里有一段距離；10:00–11:30 行程不含充分往返交通緩衝，建議評估取消。'},
  {time:'11:30–12:30',title:'返回廣安里・寄放行李',desc:'準備與朋友會合',place:'gwangalli',mode:'taxi',duration:'依出發地',transit:'建議依當下地點搭計程車或地鐵返回住宿取行李。'},
  {time:'12:30–20:30',title:'朋友會合・海雲台漫遊',desc:'午餐、散步、咖啡、晚餐、Millac the Market 等依實際安排',place:'haeundae',mode:'metro',duration:'約 20–35 分＋步行',transit:'廣安站搭地鐵 2 號線往萇山方向 → 海雲台站，出站步行往海邊；若先去 Millac the Market，可在廣安里區域安排。'},
  {time:'20:30 後',title:'入住 Daisy House',desc:'Check-in，住宿位於廣安里一帶的民樂洞',place:'daisy',mode:'walk',duration:'依住宿地址',transit:'Daisy House 位於水營區民樂洞，韓文地址：민락본동로19번길 16-1, 101호。從海雲台過來可搭地鐵 2 號線到廣安站，再步行或搭計程車前往。',note:'請核對訂房確認單與 101 號房；地圖圖釘為廣安里區域示意，不是門牌座標。'}]},
 {date:'11/15',week:'日',name:'海雲台親子日',subtitle:'Under the sea!',color:'#68b7be',emoji:'🐳',description:'今天放慢速度，跟朋友一起享受海灘、水族館和水樂園。',items:[
  {time:'08:00–09:00',title:'早餐',desc:'補充滿滿活力',place:'daisy',mode:'walk',duration:'—',transit:'Daisy House 位於民樂洞；早餐可在民樂洞／廣安里周邊選擇。'},
  {time:'09:00–10:00',title:'海雲台沙灘散步',desc:'玩沙、看海、拍照',place:'haeundae',mode:'metro',duration:'需預留約 35–55 分',transit:'從 Daisy House 民樂洞出發，先到廣安站搭地鐵 2 號線往萇山方向 → 海雲台站，再步行至海水浴場。原排定 09:00 開始散步，需提早出門。',note:'住宿不在海雲台，當天需要額外的通勤時間。'},
  {time:'10:00–11:10',title:'SEA LIFE 水族館',desc:'看鯊魚、魟魚與可愛海洋生物',place:'sealife',mode:'walk',duration:'約 5–10 分',transit:'水族館位於海雲台海灘旁，步行即可。'},
  {time:'11:10–12:10',title:'午餐・豬肉湯飯',desc:'釜山經典在地料理',place:'haeundae',mode:'walk',duration:'周邊步行',transit:'建議選海雲台水族館附近餐廳。'},
  {time:'12:20–16:10',title:'SEA LIFE／海邊彈性活動',desc:'原始行程保留彈性，可安排休息或繼續館內參觀',place:'sealife',mode:'walk',duration:'彈性',transit:'步行活動，依同行孩子體力調整。'},
  {time:'16:10–16:30',title:'前往 Club D Oasis',desc:'準備入場、換裝',place:'clubd',mode:'walk',duration:'約 10–20 分',transit:'沿海雲台沙灘往 LCT 建築群方向步行。'},
  {time:'16:30–20:00',title:'Club D Oasis 水樂園',desc:'一起玩水，記得攜帶泳衣與所需用品',place:'clubd',mode:'walk',duration:'館內活動',transit:'現場玩樂；開放時段與票種須出發前確認。'},
  {time:'20:00–21:00',title:'晚餐・味覺王國烤肉',desc:'吃飽回住宿休息',place:'haeundae',mode:'walk',duration:'依餐廳位置',transit:'餐廳名稱按原圖整理；請用店家韓文名稱確認分店位置。'}]},
 {date:'11/16',week:'一',name:'Skyline Luge・南浦洞',subtitle:'Adventure & street food',color:'#a89ad9',emoji:'🏎️',description:'上午玩斜坡滑車，下午到南浦洞吃吃逛逛，晚上還能自由加碼西面！',items:[
  {time:'08:40',title:'從 Daisy House 出發',desc:'民樂洞 → 東釜山 Osiria 園區',place:'daisy',mode:'metro',duration:'建議預留 60–90 分',transit:'Daisy House 位於民樂洞；先到廣安站搭 2 號線至 BEXCO，轉東海線至 Osiria，再轉公車或計程車前往 Skyline Luge；帶小朋友也可直接搭計程車。'},
  {time:'10:00–11:30',title:'Skyline Luge 斜坡滑車',desc:'超好玩的親子滑車體驗',place:'luge',mode:'taxi',duration:'Osiria 站後短程接駁',transit:'搭東海線至 Osiria 站後再轉地面交通；實際乘車路線依 Naver Map。'},
  {time:'11:30–12:10',title:'簡單午餐',desc:'在園區附近補充體力',place:'luge',mode:'walk',duration:'—',transit:'園區周邊步行。'},
  {time:'12:10–13:30',title:'前往南浦洞',desc:'從東釜山跨到舊城區',place:'nampo',mode:'metro',duration:'約 70–100 分',transit:'Osiria 東海線 → BEXCO 轉地鐵 2 號線 → 西面 Seomyeon 轉 1 號線 → 南浦 Nampo／札嘎其 Jagalchi，含步行與等車時間。'},
  {time:'13:30–14:30',title:'樂天百貨／南浦商圈',desc:'安排輕鬆購物與點心',place:'nampo',mode:'walk',duration:'商圈步行',transit:'南浦站附近步行；南浦樂天百貨與西面釜山本店是不同分店，請依現場目的地確認。'},
  {time:'14:30–15:30',title:'光復路商圈',desc:'沿街吃甜點、拍照、買紀念品',place:'nampo',mode:'walk',duration:'步行',transit:'南浦洞與光復路商圈可串連步行。'},
  {time:'15:30–16:30',title:'國際市場',desc:'特色小店與在地市集',place:'gukje',mode:'walk',duration:'約 5–15 分',transit:'由光復路或 BIFF 商圈步行。'},
  {time:'16:30–17:15',title:'BIFF 廣場',desc:'找小吃、逛電影街',place:'biff',mode:'walk',duration:'約 5–10 分',transit:'國際市場與 BIFF 廣場之間步行可達。'},
  {time:'17:20–19:20',title:'帝王蟹晚餐',desc:'今晚的大餐',place:'nampo',mode:'walk',duration:'依店家位置',transit:'南浦洞／札嘎其周邊餐廳；先確認實際預訂位置。'},
  {time:'19:30 後',title:'返回 Daisy House／自由加碼西面',desc:'看孩子體力決定是否再逛',place:'daisy',mode:'metro',duration:'約 40–60 分＋末段步行',transit:'南浦站 1 號線 → 西面轉 2 號線 → 廣安站，再前往民樂洞 Daisy House；若加碼西面就在換乘站出站逛街。'}]},
 {date:'11/17',week:'二',name:'韓牛・西面・返台',subtitle:'See you again, Busan!',color:'#f18da9',emoji:'🧳',description:'最後一天吃韓牛、購物買伴手禮，記得保留充足機場時間。',items:[
  {time:'07:30–09:30',title:'早餐・整理行李・退房',desc:'再次確認護照、行李與退房時間',place:'daisy',mode:'walk',duration:'—',transit:'在民樂洞 Daisy House 退房，先確認行李是否隨身帶去西面，或另安排寄存／運送。'},
  {time:'11:00–13:00',title:'與朋友一起吃韓牛',desc:'旅程最後一頓大餐',place:'seomyeon',mode:'metro',duration:'約 30–50 分',transit:'從 Daisy House 民樂洞前往廣安站，搭地鐵 2 號線至西面 Seomyeon；韓牛餐廳尚未指定分店，先以西面商圈為示意。'},
  {time:'13:00–14:00',title:'西面商圈逛街',desc:'最後補貨、找紀念品',place:'seomyeon',mode:'walk',duration:'步行',transit:'西面商圈步行。'},
  {time:'14:00–15:00',title:'西面地下街／樂天百貨',desc:'不怕雨的購物選項',place:'lotte',mode:'walk',duration:'步行',transit:'西面站地下商店街與樂天百貨釜山本店步行可達。'},
  {time:'15:00–16:30',title:'前往金海機場',desc:'取齊行李，準備報到',place:'airport',mode:'metro',duration:'約 45–65 分＋取行李',transit:'西面站搭地鐵 2 號線至沙上 Sasang → 換釜山金海輕軌至機場站；若行李留在民樂洞 Daisy House，務必先取件並重新估算時間。',note:'原圖 15:00–16:56 為前往機場，這裡採較保守的 16:30 前抵達目標；實際請依航班及航空公司規定。'},
  {time:'16:30–18:55',title:'報到・托運・出境',desc:'機場辦理登機手續',place:'airport',mode:'walk',duration:'依航空公司',transit:'確認航廈、航空公司櫃檯與登機門時間。'},
  {time:'18:55',title:'班機起飛・回台灣',desc:'帶著滿滿照片與回憶返家',place:'airport',mode:'plane',duration:'—',transit:'依實際機票核對出發時間。'}]}
];
export const modeMeta = {
 plane:{name:'飛機',icon:'plane',color:'#82b9e8'},metro:{name:'地鐵／輕軌',icon:'train-front',color:'#7c9ee9'},walk:{name:'步行',icon:'footprints',color:'#78bba1'},taxi:{name:'計程車／接駁',icon:'car-front',color:'#e4ad67'},bus:{name:'公車',icon:'bus-front',color:'#bc9ad9'}
};
