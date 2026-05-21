
## What's New in v11

- **Manager colours** — each manager now has a specific assigned colour (An=Yellow, Hieu=Red, Bach=Dark Blue, etc.) synced across all tabs, tables, and charts
- **To Play** — "YTP" renamed to "To Play"; now uses fixture status data so players whose game has finished and didn't play are correctly excluded
- **Chart hover tooltips** — hover over any dot on the Rank Journey or Premier Journey charts to see the manager, GW, and rank
- **Position vs Hits** — X-axis label corrected to "Hit Pts"
- **Profile layout** — Title card larger; Rivalries below Radar; Trophies and Honors equal size
- **Avg GW clarification** — labelled as "(personal)" to distinguish from FPL's league average
- **Captaincy pts** — confirmed as bonus-only (player pts × (multiplier − 1))

---
# Núi Lửa FPL Dashboard — v11

A private Fantasy Premier League dashboard for the Núi Lửa league — storytelling, live stats, and identity platform for 12 managers.

## Project Structure

```
nui-lua-fpl/
├── index.html              # Main dashboard (all UI, logic, styles)
├── content.js              # ✏️  Manual content — edit this each gameweek
├── classic-badge.jpg       # Classic league badge image
├── premier-badge.jpg       # Premier league badge image
├── netlify.toml            # Netlify routing config
├── netlify/
│   └── functions/
│       └── fpl.js          # Serverless proxy for FPL API (handles CORS)
└── README.md
```

## What Each File Does

### `content.js` — Edit Every Gameweek
This is the only file you need to touch regularly. It contains:
- **Breaking News** — quotes, transfer news, chip usage, captain picks
- **Predictions** — safe / bold / mad picks for the week
- **Matches of the Day** — featured H2H matchups with titles
- **Last GW recap** — quotes and highlights from the previous week
- **Did You Know** — fun facts and historical stats
- **Rivalries** — named derbies and descriptions
- **Manager profiles** — AKA names, trophies, honors, awards (update awards manually each GW)

### `index.html` — The Dashboard
Single-file app with three tabs:
- **Matchday** — weekly stories, predictions, points chart, H2H matchups
- **Campaign** — Classic league table + stats, Premier H2H fixtures/table/matrix
- **Teams** — manager cards + full profile pages with squad, radar, snapshot

### `netlify/functions/fpl.js` — API Proxy
Runs server-side on Netlify. Fetches data from the FPL API without CORS issues. All 12 managers can access the site simultaneously without rate limiting.

## Deploying on Netlify (Quick Start)

1. **First time**: Go to [app.netlify.com](https://app.netlify.com), create account, drag this folder into the deploy zone
2. **Updates**: Go to your site → Deploys tab → drag the updated folder
3. **Custom domain**: Site Configuration → Change site name → e.g. `nuilua-fpl.netlify.app`

## Deploying via GitHub (Recommended for ongoing updates)

1. Create a GitHub account at [github.com](https://github.com)
2. Create a new repository (click **+** → New repository → name it `nui-lua-fpl` → Public or Private)
3. Upload files: drag all files from this folder into the GitHub repository page
4. Connect to Netlify: Netlify dashboard → **Add new site** → **Import from Git** → select your repo
5. From now on: edit `content.js` on GitHub → Netlify auto-deploys in ~30 seconds

## Editing `content.js`

### Chip abbreviations used throughout the site
| Chip | Code |
|------|------|
| Triple Captain | TC |
| Bench Boost | BB |
| Free Hit | FH |
| Wildcard | WC |

### Manager entry IDs (FPL team IDs)
| Manager | Display Name | Entry ID |
|---------|-------------|----------|
| An Ng | An | 198683 |
| Hiếu Nguyễn | Hieu | 3973873 |
| Bach Tran | Bach | 888937 |
| Manh Linh Tran | Linh | 1537418 |
| Gia Bách Nguyễn | Gbach | 7897954 |
| Khoi Nguyen | Khoi | 848693 |
| Trung Le | Trung | 4979754 |
| Hà Phạm | Ha | 5221586 |
| Hai V | Hai | 208451 |
| Vũ Hoàng | Vu | 1727691 |
| Tùng Nguyễn | Tung | 5126841 |
| Phú Nguyễn | Phu | 910084 |

### League IDs
- Classic: `37679`
- H2H Premier: `294115`

## Data Notes

- **Live points** are fetched fresh on every page load / browser refresh
- **Positional stats** (GK/DEF/MID/FWD/Cap) accumulate in browser localStorage — they load faster on repeat visits
- **Form dots** are based on actual H2H match results
- **Average GW** = total classic points ÷ number of gameweeks played

## Manager Colours

Each manager has a unique colour used consistently across all tabs:

| Manager | Colour |
|---------|--------|
| An | `#00e5a0` |
| Hieu | `#ffd54f` |
| Bach | `#64b5f6` |
| Linh | `#f48fb1` |
| Gbach | `#ce93d8` |
| Khoi | `#ff7043` |
| Trung | `#4dd0e1` |
| Ha | `#ef5350` |
| Hai | `#81c784` |
| Vu | `#ffb74d` |
| Tung | `#ba68c8` |
| Phu | `#4fc3f7` |
