// ============================================================
//  NÚI LỬA FPL — CONTENT FILE
//  ✏️  Edit this file before each gameweek.
//  DO NOT change entryId or color values.
//  Chip abbreviations: TC | BB | FH | WC
// ============================================================
const CONTENT = {
  currentGW: 36,

  breakingNews: [
    { type:"quote",    text:"\"Salah every week until the wheels fall off. Simple.\"", author:"An" },
    { type:"transfer", text:"Hieu brings in Salah for the run-in — only 3 GWs late to the party.", author:null },
    { type:"chip",     text:"Vu considering the BB with a double gameweek on the horizon.", author:null },
    { type:"captain",  text:"Six managers captain Salah this week. The other six will regret it.", author:null },
    { type:"news",     text:"Phu sitting last in both leagues. The gap to safety is 57 points.", author:null },
  ],

  predictions: [
    { text:"An holds top spot in Classic — 30+ point gap is too much to claw back in 3 GWs.", confidence:"safe" },
    { text:"Tung blanks this week. Six points, maybe seven. Bench outscores starters again.", confidence:"bold" },
    { text:"Vu fires a 90+ GW and sneaks into top 8 on the final day.", confidence:"mad" },
  ],

  matchesOfTheDay: [
    { title:"Derby Cầu Diễn", subtitle:"The neighbourhood classic", entryIdA:198683, entryIdB:208451 },
    { title:"Relegation Six-Pointer", subtitle:"Bottom two go to war", entryIdA:5126841, entryIdB:910084 },
  ],

  lastGW: {
    gw: 35,
    items: [
      { type:"quote",    text:"\"Six points. Six. My captain blanked, my bench blanked, everything blanked.\"", author:"Tùng" },
      { type:"news",     text:"Vu tops GW35 with 39 pts — best score in a week the average was 22.", author:null },
      { type:"captain",  text:"GW35 verdict: Salah owners won. Haaland owners suffered in silence.", author:null },
      { type:"transfer", text:"Ha takes a -8 hit in GW35. Net gain: 2 points. Classic.", author:null },
    ],
  },

  onThisDay: [
    { text:"GW36 last season: An sat on a 60-point bench while his starters combined for 31.", label:"On This Day" },
    { text:"Lêds is the only team in Núi Lửa history to hold top spot from GW1 to GW36.", label:"Did You Know" },
    { text:"The biggest single-GW collapse: Bach went from 1st to 4th in one gameweek in 2023.", label:"Did You Know" },
  ],

  rivalries: [
    { name:"Derby Cầu Diễn",    teams:["An","Hai"],    description:"Old friends, eternal rivals." },
    { name:"Derby Bún Chả",     teams:["Bach","Hieu"],  description:"2nd vs 3rd. Separated by luck." },
    { name:"Battle of the Bottom", teams:["Tung","Phu"], description:"Fighting for dignity." },
    { name:"Derby Nhà Nghèo",   teams:["Khoi","Trung"], description:"Mid-table roommates." },
    { name:"Derby Tứ Vũ",       teams:["Ha","Vu"],      description:"Neither admits how much they care." },
  ],

  managers: [
    { entryId:198683,  displayName:"An",    teamName:"Lêds",               color:"#FFD700", akaNames:["The Admin","Pep An"],          trophies:["2x Núi Lửa Classic","1x Núi Lửa Premier"], honors:[], awards:{kingOfGW:9,clownOfGW:1,goldenBench:4} },
    { entryId:3973873, displayName:"Hieu",  teamName:"The Liems FC",        color:"#E53935", akaNames:["The Chaser","Forever 2nd"],     trophies:["1x Núi Lửa Classic"],                      honors:[], awards:{kingOfGW:6,clownOfGW:3,goldenBench:2} },
    { entryId:888937,  displayName:"Bach",  teamName:"bún chả ngon",        color:"#880E4F", akaNames:["Bún Chả","The Consistent One"],trophies:["1x Núi Lửa Premier"],                      honors:[], awards:{kingOfGW:5,clownOfGW:3,goldenBench:3} },
    { entryId:1537418, displayName:"Linh",  teamName:"Nhẵng cực",          color:"#2E7D32", akaNames:["Nhẵng","The Dark Horse"],       trophies:[],                                          honors:[], awards:{kingOfGW:4,clownOfGW:4,goldenBench:3} },
    { entryId:7897954, displayName:"Gbach", teamName:"Doi bong nho",        color:"#64B5F6", akaNames:["Gia Bách"],                     trophies:[],                                          honors:[], awards:{kingOfGW:3,clownOfGW:5,goldenBench:2} },
    { entryId:848693,  displayName:"Khoi",  teamName:"đày ải 100 năm",     color:"#F06292", akaNames:["100 Năm","The Sufferer"],       trophies:["1x Núi Lửa Classic"],                      honors:[], awards:{kingOfGW:4,clownOfGW:4,goldenBench:1} },
    { entryId:4979754, displayName:"Trung", teamName:"NAtoEU",              color:"#66BB6A", akaNames:["NA to EU"],                     trophies:[],                                          honors:[], awards:{kingOfGW:3,clownOfGW:5,goldenBench:2} },
    { entryId:5221586, displayName:"Ha",    teamName:"Pamiuoi",             color:"#9E9E9E", akaNames:["Hit King"],                     trophies:[],                                          honors:[], awards:{kingOfGW:3,clownOfGW:4,goldenBench:3} },
    { entryId:208451,  displayName:"Hai",   teamName:"Sa Làh Nhớ",         color:"#FB8C00", akaNames:["Sa Lah","Obi-wan Iwobi"],       trophies:["1x Núi Lửa Classic"],                      honors:[], awards:{kingOfGW:4,clownOfGW:3,goldenBench:2} },
    { entryId:1727691, displayName:"Vu",    teamName:"Thành Cát Thư Giãn", color:"#7B1FA2", akaNames:["Thành Cát","Sleeping Giant"],   trophies:[],                                          honors:[], awards:{kingOfGW:3,clownOfGW:5,goldenBench:4} },
    { entryId:5126841, displayName:"Tung",  teamName:"Tung Dich FC",        color:"#6D4C41", akaNames:["Perpetual 11th"],               trophies:[],                                          honors:[], awards:{kingOfGW:1,clownOfGW:8,goldenBench:1} },
    { entryId:910084,  displayName:"Phu",   teamName:"Hẹ hẹ",              color:"#FFF176", akaNames:["Wooden Spoon Candidate"],        trophies:[],                                          honors:[], awards:{kingOfGW:1,clownOfGW:9,goldenBench:1} },
  ],
};
