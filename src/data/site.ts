export const SITE_URL = "https://johnosberg.makeacompany.ai";
export const SITE_NAME = "John Osberg";
export const SITE_TITLE = "John Osberg | Growth & Partnerships Leader";

export const HERO_LABEL = "growth · partnerships · revenue";

export const HERO_SUMMARY =
  "VP of Partnerships & Founding Member at Brandlete, Inc. For 15+ years I've built the partnership and growth engines that move real revenue: $6.5M+ generated ($8.5M+ influenced), $1.5M+ in capital secured, and $1.5M+ raised for nonprofit causes across tech, sports, and startups. I turn relationships into pipeline, and pipeline into signed deals.";

export const LINK_PREVIEW_DESCRIPTION =
  "John Osberg — growth and partnerships leader in Buffalo, NY. 15+ years, $6.5M+ in revenue generated, partnerships with national brands across sports, tech, and nonprofit.";

export const PUBLIC_EMAIL = "john@brandlete.com";

// logo.dev serves real company logos by domain. The publishable key (pk_) is
// meant for client-side use. fallback=404 makes unknown domains 404 so each
// component's onError swaps to its clean monogram tile instead of a generic
// logo.dev placeholder.
const LOGO_DEV_KEY = "pk_W-hvspybR8OzNFwPDlYRSg";
export function logoDev(domain: string): string {
  return `https://img.logo.dev/${domain}?token=${LOGO_DEV_KEY}&size=128&format=png&retina=true&fallback=404`;
}

export const stats = [
  { value: "$8.5M+", label: "revenue gen. / influenced" },
  { value: "$1.5M+", label: "capital secured" },
  { value: "$1.5M+", label: "nonprofit raised" },
  { value: "15+ yrs", label: "growth & partnerships" },
];

export const roles = [
  {
    org: "Brandlete, Inc.",
    title: "VP of Partnerships / Founding Member",
    period: "Nov 2021 – Present",
    blurb:
      "Co-founded an AI-enabled athlete development platform. Drive early-stage partnerships and pilots with clubs, coaches, and athletic organizations, and assembled the founding team.",
  },
  {
    org: "POWER of OZmosis Consulting",
    title: "Founder / Principal Consultant & Coach",
    period: "2019 – 2026",
    blurb:
      "$325K+ in revenue outcomes and $775K in deal flow. Coached 40+ founders and executives, facilitated 150+ strategic introductions, raised $221K+ for nonprofits.",
  },
  {
    org: "PGA of America – Western NY / PGA REACH WNY",
    title: "Director of Partnerships & Development",
    period: "2023 – 2025",
    blurb:
      "275% partner growth with 97% retention across 60+ accounts. $250K+ annually through sponsorships and multi-year partnerships with Michelob Ultra, Oakley, RLX, and more.",
  },
  {
    org: "EmergenceTek Group",
    title: "VP, Client Engagement & Sales (Founding Employee)",
    period: "2012 – 2017",
    blurb:
      "Built the client base 0 to 25+ enterprise and mid-market orgs. $3M+ in revenue across software and staffing, plus $500K in state economic development funding.",
  },
  {
    org: "OnCore Golf Technologies",
    title: "Director of Partnerships & Engagement",
    period: "2017 – 2018",
    blurb:
      "Landed DICK'S Sporting Goods, Golf Galaxy, Wegmans, and NYSGA, driving $3.5M+ across those relationships.",
  },
];

// Partnership sectors — drive the donut chart and the filterable logo wall.
// Order here is the order chips render in.
export type Sector =
  | "Sports & Golf"
  | "Beverage & CPG"
  | "Healthcare"
  | "Finance & Insurance"
  | "Media, Energy & Travel";

export const SECTORS: { name: Sector; color: string }[] = [
  { name: "Sports & Golf", color: "#16a34a" },
  { name: "Beverage & CPG", color: "#f59e0b" },
  { name: "Healthcare", color: "#06b6d4" },
  { name: "Finance & Insurance", color: "#8b5cf6" },
  { name: "Media, Energy & Travel", color: "#ec4899" },
];

// Revenue driven by venture, in $K. Numbers are the ones John states on his
// resume for each role — used by the "Revenue driven, by venture" bar chart.
export const revenueByVenture: { label: string; period: string; valueK: number; note: string }[] = [
  { label: "OnCore Golf", period: "2017–18", valueK: 3500, note: "DICK'S, Golf Galaxy, Wegmans, NYSGA" },
  { label: "EmergenceTek", period: "2012–17", valueK: 3000, note: "0→25+ enterprise & mid-market" },
  { label: "POWER of OZmosis", period: "2019–26", valueK: 775, note: "$325K revenue · $775K deal flow" },
  { label: "PGA WNY", period: "2023–25", valueK: 250, note: "annual, sponsorships & renewals" },
];

// Career milestones for the interactive timeline. `metric` is the one headline
// number for each stop; `revenueK` sizes the marker.
export const milestones: { year: string; org: string; title: string; metric: string; revenueK: number }[] = [
  { year: "2012", org: "EmergenceTek", title: "VP, Client Engagement & Sales", metric: "$3M+ · 0→25 orgs", revenueK: 3000 },
  { year: "2017", org: "OnCore Golf", title: "Director of Partnerships", metric: "$3.5M+ driven", revenueK: 3500 },
  { year: "2019", org: "POWER of OZmosis", title: "Founder / Principal", metric: "40+ founders coached", revenueK: 775 },
  { year: "2021", org: "Brandlete", title: "VP Partnerships / Founding Member", metric: "AI athlete platform", revenueK: 1000 },
  { year: "2023", org: "PGA of America WNY", title: "Director, Partnerships & Dev.", metric: "275% growth · 97% kept", revenueK: 250 },
];

export type Brand = { name: string; mark: string; accent: string; logo: string; url: string; sector: Sector };

export const brands: Brand[] = [
  { name: "DICK'S", mark: "D", accent: "#1c8c3b", logo: logoDev("dickssportinggoods.com"), url: "https://www.dickssportinggoods.com", sector: "Sports & Golf" },
  { name: "Golf Galaxy", mark: "GG", accent: "#2f7df6", logo: logoDev("golfgalaxy.com"), url: "https://www.golfgalaxy.com", sector: "Sports & Golf" },
  { name: "Wegmans", mark: "W", accent: "#e0301e", logo: logoDev("wegmans.com"), url: "https://www.wegmans.com", sector: "Beverage & CPG" },
  { name: "Michelob Ultra", mark: "MU", accent: "#c79a3a", logo: logoDev("michelobultra.com"), url: "https://www.michelobultra.com", sector: "Beverage & CPG" },
  { name: "Oakley", mark: "O", accent: "#9aa0a8", logo: logoDev("oakley.com"), url: "https://www.oakley.com", sector: "Sports & Golf" },
  { name: "Ralph Lauren RLX", mark: "RLX", accent: "#3b5bdb", logo: logoDev("ralphlauren.com"), url: "https://www.ralphlauren.com/rlx-golf", sector: "Sports & Golf" },
  { name: "Tito's", mark: "T", accent: "#3aa0ff", logo: logoDev("titosvodka.com"), url: "https://www.titosvodka.com", sector: "Beverage & CPG" },
  { name: "Corebridge Financial", mark: "CF", accent: "#7c4dff", logo: logoDev("corebridgefinancial.com"), url: "https://www.corebridgefinancial.com", sector: "Finance & Insurance" },
  { name: "Sandals Resorts", mark: "S", accent: "#14b8a6", logo: logoDev("sandals.com"), url: "https://www.sandals.com", sector: "Media, Energy & Travel" },
  { name: "Gallagher Insurance", mark: "G", accent: "#e0a82e", logo: logoDev("ajg.com"), url: "https://www.ajg.com", sector: "Finance & Insurance" },
  { name: "National Fuel", mark: "NF", accent: "#2563eb", logo: logoDev("nationalfuel.com"), url: "https://www.nationalfuel.com", sector: "Media, Energy & Travel" },
  { name: "Special Olympics", mark: "SO", accent: "#e0301e", logo: logoDev("specialolympics.org"), url: "https://www.specialolympics.org", sector: "Sports & Golf" },
  { name: "Gatorade", mark: "G", accent: "#ff7a1a", logo: logoDev("gatorade.com"), url: "https://www.gatorade.com", sector: "Beverage & CPG" },
  { name: "Audacy", mark: "A", accent: "#9b5cff", logo: logoDev("audacy.com"), url: "https://www.audacy.com", sector: "Media, Energy & Travel" },
  { name: "Club Car", mark: "CC", accent: "#22a447", logo: logoDev("clubcar.com"), url: "https://www.clubcar.com", sector: "Sports & Golf" },
  { name: "NY State Golf Assn.", mark: "NYSGA", accent: "#344475", logo: logoDev("nysga.org"), url: "https://nysga.org", sector: "Sports & Golf" },
  { name: "Liazon (WTW)", mark: "L", accent: "#0a6ebd", logo: logoDev("wtwco.com"), url: "https://www.wtwco.com", sector: "Finance & Insurance" },
  { name: "CareSource", mark: "CS", accent: "#00a0af", logo: logoDev("caresource.com"), url: "https://www.caresource.com", sector: "Healthcare" },
  { name: "HealtheLink", mark: "HL", accent: "#1b75bc", logo: logoDev("wnyhealthelink.com"), url: "https://wnyhealthelink.com", sector: "Healthcare" },
  { name: "HealtheConnections", mark: "HC", accent: "#6cb33f", logo: logoDev("healtheconnections.org"), url: "https://www.healtheconnections.org", sector: "Healthcare" },
  { name: "Fidelis Care", mark: "FC", accent: "#00529b", logo: logoDev("fideliscare.org"), url: "https://www.fideliscare.org", sector: "Healthcare" },
  { name: "BlueCross BlueShield", mark: "BCBS", accent: "#0066b3", logo: logoDev("bcbswny.com"), url: "https://www.bcbswny.com", sector: "Healthcare" },
];

export type PressItem = { source: string; title: string; href: string; logo: string; fallback: string };

export const press: PressItem[] = [
  {
    source: "PGA REACH WNY",
    title: "John Osberg Named PGA REACH WNY Trustee",
    href: "https://westernnewyork.pga.com/news/john-osberg-named-as-pga-reach-wny-trustee/",
    logo: logoDev("pga.com"),
    fallback: "/logos/pgareach.png",
  },
  {
    source: "Western NY PGA",
    title: "Osberg Named Director of Development & Foundation Operations",
    href: "https://westernnewyork.pga.com/wp-content/uploads/sites/16/2023/07/Press-Release_Osberg.docx.pdf",
    logo: logoDev("pga.com"),
    fallback: "/logos/news-pga.png",
  },
  {
    source: "PGA.com",
    title: "PGA REACH Hosts Charity Pro-Am at Oak Hill Country Club",
    href: "https://www.pga.com/story/pga-reach-recently-hosted-a-charity-pro-am-at-oak-hill-country-club",
    logo: logoDev("pga.com"),
    fallback: "/logos/news-pga.png",
  },
  {
    source: "NYSGA",
    title: "NYSGA Partners with Buffalo-Based OnCore Golf",
    href: "https://nysga.org/communications-news/nysga-partners-with-buffalo-based-oncore-golf-technology",
    logo: logoDev("nysga.org"),
    fallback: "/logos/nysga.png",
  },
  {
    source: "Empire State Entrepreneurs",
    title: "John Osberg of WNY PGA — entrepreneur, athlete, growth strategist",
    href: "https://empirestateentrepreneurs.transistor.fm/s2/7",
    logo: "/logos/news-ese.png",
    fallback: "/logos/news-ese.png",
  },
  {
    source: "Clark Dever",
    title: "Bad Golf Business School: Startup Lessons from the Fairway",
    href: "https://www.clarkdever.com/projects/bad-golf-business-school",
    logo: logoDev("clarkdever.com"),
    fallback: "/logos/news-clarkdever.png",
  },
  {
    source: "Buffalo Business First",
    title: "John Osberg & Brandlete in Buffalo Business First",
    href: "https://www.bizjournals.com/buffalo/inno/stories/news/2022/09/02/brandlete-buffalo-startup-sports-social-media.html",
    logo: logoDev("bizjournals.com"),
    fallback: "/logos/news-biz.png",
  },
  {
    source: "Buffalo Business First",
    title: "Buffalo 30 Under 30 Winner",
    href: "https://www.bizjournals.com/buffalo/news/2019/04/01/buffalo-2019-30-under-30-winners-wny.html",
    logo: logoDev("bizjournals.com"),
    fallback: "/logos/news-biz.png",
  },
];

export const FEATURED_VIDEO = {
  id: "03PnTookfKY",
  start: 500,
  title: "John Osberg on The Incept CONNECT Podcast",
};

export type Podcast = { title: string; role: "Host" | "Guest"; href: string; thumb: string };

export const podcasts: Podcast[] = [
  {
    title: "The Incept CONNECT Podcast",
    role: "Host",
    href: "https://www.youtube.com/playlist?list=PLWvPwqLIgvdvsFWhEAOLgHBuB_e_aAhk8",
    thumb: "uJ39_XxlB3I",
  },
  {
    title: "POWER of OZmosis Podcast Library",
    role: "Host",
    href: "https://www.youtube.com/playlist?list=PLgKNSRICJcqgUd-nFY-z2VXu68NbiauLm",
    thumb: "cRGzR-yDVEo",
  },
  {
    title: "John Osberg, Featured Guest",
    role: "Guest",
    href: "https://www.youtube.com/playlist?list=PLgKNSRICJcqgMHOYeCaDmnwcjEnzumQSn",
    thumb: "n2aAi-frg7Q",
  },
];

export type Civic = { org: string; role: string; logo: string; mark: string; accent: string; url: string };

// John's civic leadership & volunteer roles. logo "" falls back to a monogram.
export const civic: Civic[] = [
  { org: "Techstars", role: "Community Organizer & Program Contributor", logo: logoDev("techstars.com"), mark: "T", accent: "#1f1f1f", url: "https://www.techstars.com" },
  { org: "POWER of OZmosis", role: "Mentor · Connector · Fundraiser", logo: logoDev("powerofozmosis.com"), mark: "OZ", accent: "#1d4ed8", url: "https://www.powerofozmosis.com" },
  { org: "PGA REACH Western NY", role: "Board of Trustees & Advisor", logo: logoDev("pga.com"), mark: "PGA", accent: "#0b3d2e", url: "https://westernnewyork.pga.com" },
  { org: "EforAll", role: "Lead Mentor, Buffalo NY Cohort", logo: logoDev("eforall.org"), mark: "Ef", accent: "#2bb3a3", url: "https://eforall.org" },
  { org: "OnCore Golf", role: "Fundraising Director", logo: logoDev("oncoregolf.com"), mark: "OC", accent: "#111827", url: "https://www.oncoregolf.com" },
  { org: "UB CoLab · Blackstone LaunchPad", role: "Finals Judge, Student Pitches", logo: logoDev("buffalo.edu"), mark: "UB", accent: "#005bbb", url: "https://www.buffalo.edu/blackstonelaunchpad.html" },
  { org: "dooProcess", role: "Community Champion & Mentor", logo: "", mark: "DP", accent: "#6d28d9", url: "https://www.google.com/search?q=dooProcess%20Buffalo" },
  { org: "Buffalo Startup Week", role: "Featured Speaker, Social Media", logo: "", mark: "BSW", accent: "#f59e0b", url: "https://www.google.com/search?q=Buffalo%20Startup%20Week" },
  { org: "University at Buffalo", role: "Expert in Residence, LaunchPad", logo: logoDev("buffalo.edu"), mark: "UB", accent: "#005bbb", url: "https://www.buffalo.edu" },
  { org: "Heritage Christian Services", role: "Chairperson, Heritage HERO 5K & Annual Foundation Fundraiser", logo: logoDev("heritagechristianservices.org"), mark: "HC", accent: "#0e7490", url: "https://www.heritagechristianservices.org" },
  { org: "Niagara Global Tourism Institute", role: "Community Advocate, TReC", logo: "", mark: "NG", accent: "#0891b2", url: "https://www.google.com/search?q=Niagara%20Global%20Tourism%20Institute" },
  { org: "First Tee", role: "Youth Golf Coach", logo: logoDev("firsttee.org"), mark: "FT", accent: "#16a34a", url: "https://firsttee.org" },
  { org: "Police Athletic League", role: "Youth Golf Coach", logo: logoDev("nationalpal.org"), mark: "PAL", accent: "#1e3a8a", url: "https://www.nationalpal.org" },
  { org: "NAACP", role: "Member, Buffalo NY Chapter", logo: logoDev("naacp.org"), mark: "NA", accent: "#111827", url: "https://naacp.org" },
  { org: "Recovery Options Made Easy", role: "5x4x24 Challenge Fundraiser", logo: logoDev("recoveryoptionsmadeeasy.org"), mark: "RO", accent: "#dc2626", url: "https://www.recoveryoptionsmadeeasy.org" },
  { org: "People Inc.", role: "Mentor", logo: logoDev("people-inc.org"), mark: "PI", accent: "#16a34a", url: "https://www.people-inc.org" },
  { org: "Team F.A.S.T.", role: "Board Member", logo: logoDev("teamfastfoundation.com"), mark: "TF", accent: "#1d4ed8", url: "https://teamfastfoundation.com" },
  { org: "Niagara University Marketing Assn.", role: "Business Competition Finals Judge", logo: logoDev("niagara.edu"), mark: "NUMA", accent: "#5b2a86", url: "https://www.niagara.edu" },
  { org: "Accessible Academics", role: "Mentor", logo: "", mark: "AA", accent: "#b45309", url: "https://www.google.com/search?q=Accessible%20Academics" },
  { org: "F BITES", role: "Community Champion", logo: "", mark: "FB", accent: "#65a30d", url: "https://www.google.com/search?q=F%20BITES%20Buffalo" },
  { org: "CALLSIGN 22", role: "5x4x48 Challenge Fundraiser", logo: "", mark: "C22", accent: "#475569", url: "https://www.google.com/search?q=CALLSIGN%2022%20veteran%20fundraiser" },
  { org: "Niagara University", role: "Featured Speaker & Careers Connector", logo: logoDev("niagara.edu"), mark: "NU", accent: "#5b2a86", url: "https://www.niagara.edu" },
  { org: "The Essential Machine", role: "Mentor to Founder", logo: "", mark: "EM", accent: "#0ea5e9", url: "https://www.google.com/search?q=The%20Essential%20Machine%20startup" },
  { org: "NYBPC", role: "Regional Finals Judge", logo: logoDev("nybpc.org"), mark: "NY", accent: "#1f7a3f", url: "https://nybpc.org" },
  { org: "UB School of Management", role: "Mentor / Finals Judge, Student 2 Biz", logo: logoDev("buffalo.edu"), mark: "UB", accent: "#005bbb", url: "https://management.buffalo.edu" },
  { org: "vidwheel", role: "Podcast Host & Featured Speaker", logo: logoDev("vidwheel.com"), mark: "VW", accent: "#16a34a", url: "https://vidwheel.com" },
  { org: "Bad Golf Business School", role: "Founder / Operator", logo: "", mark: "BG", accent: "#15803d", url: "https://www.clarkdever.com/projects/bad-golf-business-school" },
  { org: "American University", role: "Featured Speaker", logo: logoDev("american.edu"), mark: "AU", accent: "#b91c1c", url: "https://www.american.edu" },
  { org: "Trocaire College", role: "Featured Speaker", logo: logoDev("trocaire.edu"), mark: "TC", accent: "#7f1d1d", url: "https://www.trocaire.edu" },
  { org: "American Lung Association", role: "Fight for Air Climb Fundraiser", logo: logoDev("lung.org"), mark: "AL", accent: "#2563eb", url: "https://www.lung.org" },
  { org: "InfoTech WNY", role: "Board Member & Co-Director, Networking", logo: "", mark: "IT", accent: "#0d9488", url: "https://www.google.com/search?q=InfoTech%20WNY" },
  { org: "Buffalo Niagara Partnership", role: "Featured Speaker, BN360", logo: logoDev("thepartnership.org"), mark: "BN", accent: "#1d4ed8", url: "https://www.thepartnership.org" },
  { org: "Cystic Fibrosis Foundation", role: "Rising Star Selection", logo: logoDev("cff.org"), mark: "CF", accent: "#2563eb", url: "https://www.cff.org" },
  { org: "Special Olympics", role: "Event Volunteer, Fire Truck Pull", logo: logoDev("specialolympics.org"), mark: "SO", accent: "#e0301e", url: "https://www.specialolympics.org" },
  { org: "United Way of Buffalo & Erie County", role: "Student Liaison", logo: logoDev("uwbec.org"), mark: "UW", accent: "#e0301e", url: "https://www.uwbec.org" },
  { org: "Jericho Road Community Health Center", role: "Volunteer, Vive La Casa", logo: logoDev("jrchc.org"), mark: "JR", accent: "#ea580c", url: "https://jrchc.org" },
];
