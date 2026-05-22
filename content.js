// ============================================================
//  NÚI LỬA FPL — CONTENT FILE
//  ✏️  Edit this file before each gameweek.
//  DO NOT change entryId or color values.
//  Chip abbreviations: TC | BB | FH | WC
// ============================================================
const CONTENT = {
  currentGW: 38,

  breakingNews: [
    { type:"news", text:"Final day: All to play for as gap to Classic title stands at 18 pts.", author:null },
    { type:"chip",     text:"Vu considering the BB with a double gameweek on the horizon.", author:null },
    { type:"quote",    text:"\"The season is over, I don’t want to talk about it.\"", author:"Phu" },
    { type:"news",     text:"Nui Lua Liga Cup - Final: Lêds representing the league", author:null },
  ],

  predictions: [
    { text:"Doi bong nho wins Classic Cup comfortably", confidence:null },
    { text:"Lêds loses all 3 cup finals yet wins The Double.", confidence:null },
    { text:"đày ải 100 năm ends the season with a 3-game winstreak", confidence:null },
  ],

  matchesOfTheDay: [
    { title:"Núi Lửa Classic Cup - Final", subtitle:"Unpredictable clash", entryIdA:198683, entryIdB:208451 },
    { title:"Vietnam’s Open Cup - Final", subtitle:"Third-tier trophy is still a trophy", entryIdA:5126841, entryIdB:910084 },
  ],

  lastGW: {
    gw: 37,
    items: [
      { type:"news", text:"Classic: Pamiuoi dropped to 10th with a 20 pts gap to safety.", author:null },
      { type:"news", text:"Classic Cup: BachNg triumphed in the Bach-to-Bach derby to reach final.", author:null },
      { type:"chip", text:"19 pts BB for Hai. Not bad!", author:null },
      { type:"transfer", text:"Another hit for The Liems FC, making it 33", author:null },
    ],
  },

  didYouKnow: [
    { text:"23-24 Season: Trung holds the record for highest pts scored ever in GW38 - 99 pts!", label:"On This Day" },
    { text:"Season Stats, H2H Matrix and more are available in Campaign", label:"Did You Know" },
    { text:"Live Ranking is updated on refresh, live!", label:"Did You Know" },
  ],

  rivalries: [
    { name:"Derby Cầu Diễn",    teams:["Hieu","BachTr"],    description:"Old friends, eternal rivals." },
    { name:"Bach-to-Bach",     teams:["BachTr","BachNg"],  description:"2nd vs 3rd. Separated by luck." },
    { name:"Derby Chè Xanh", teams:["Hoang","Linh"], description:"Fighting for dignity." },
    { name:"Derby London 1",   teams:["Khoi","Hoang"], description:"Mid-table roommates." },
    { name:"Derby London 2",   teams:["Khoi","Linh"], description:"Mid-table roommates." },
    { name:"Derby Tu Vũ",       teams:["An","BachTr"],      description:"Neither admits how much they care." },
  ],

  managers: [
    { entryId:198683,  displayName:"An",    teamName:"Lêds",               color:"#FFD700", akaNames:["Lửng Mật"], trophies:[], honors:[], awards:{kingOfGW:9,clownOfGW:1,goldenBench:4} },
    { entryId:3973873, displayName:"Hieu",  teamName:"The Liems FC",        color:"#E53935", akaNames:["Hihihaha FC"], trophies:[], honors:[], awards:{kingOfGW:6,clownOfGW:3,goldenBench:2} },
    { entryId:888937,  displayName:"BachTr",  teamName:"bún chả ngon",        color:"#0D47A1", akaNames:["Omygaard"], trophies:[], honors:[], awards:{kingOfGW:5,clownOfGW:3,goldenBench:3} },
    { entryId:1537418, displayName:"Linh",  teamName:"Nhẵng cực",          color:"#2E7D32", akaNames:["Cánh Én Đua Xe"], trophies:[], honors:[], awards:{kingOfGW:4,clownOfGW:4,goldenBench:3} },
    { entryId:7897954, displayName:"BachNg", teamName:"Doi bong nho",        color:"#64B5F6", akaNames:["MAgnifico United"], trophies:[], honors:[], awards:{kingOfGW:3,clownOfGW:5,goldenBench:2} },
    { entryId:848693,  displayName:"Khoi",  teamName:"đày ải 100 năm",     color:"#F06292", akaNames:["Ngáp", "3jack"], trophies:[], honors:[], awards:{kingOfGW:4,clownOfGW:4,goldenBench:1} },
    { entryId:4979754, displayName:"Trung", teamName:"NAtoEU",              color:"#66BB6A", akaNames:["East River FC"], trophies:[], honors:[], awards:{kingOfGW:3,clownOfGW:5,goldenBench:2} },
    { entryId:5221586, displayName:"Ha",    teamName:"Pamiuoi",             color:"#9E9E9E", akaNames:["CSCĐ"], trophies:[], honors:[], awards:{kingOfGW:3,clownOfGW:4,goldenBench:3} },
    { entryId:208451,  displayName:"Hai",   teamName:"Sa Làh Nhớ",         color:"#FB8C00", akaNames:["Obi-wan Iwobi"], trophies:[], honors:[], awards:{kingOfGW:4,clownOfGW:3,goldenBench:2} },
    { entryId:1727691, displayName:"Hoang",    teamName:"Thành Cát Thư Giãn", color:"#7B1FA2", akaNames:["Becamex Bình Tĩnh"], trophies:[],honors:[], awards:{kingOfGW:3,clownOfGW:5,goldenBench:4} },
    { entryId:5126841, displayName:"Tung",  teamName:"Tung Dich FC",        color:"#6D4C41", akaNames:["Tung Dich"], trophies:[], honors:[], awards:{kingOfGW:1,clownOfGW:8,goldenBench:1} },
    { entryId:910084,  displayName:"Phu",   teamName:"Hẹ hẹ",              color:"#FFF59D", akaNames:["Anh 7 Núi"], trophies:[], honors:[], awards:{kingOfGW:1,clownOfGW:9,goldenBench:1} },
  ],
};