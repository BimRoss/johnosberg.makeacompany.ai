export const SITE_URL = "https://johnosberg.makeacompany.ai";
export const SITE_NAME = "John Osberg";
export const SITE_TITLE = "John Osberg | Growth & Partnerships Leader";

export const HERO_LABEL = "growth · partnerships · revenue";

export const HERO_SUMMARY =
  "VP of Partnerships & Founding Member at Brandlete, Inc. and Head of Growth & Founding Member at MakeaCompany.ai. For 15+ years I've built the partnership and growth engines that move real revenue: $6.5M+ generated ($8.5M+ influenced), $1.5M+ in capital secured, and $1.5M+ raised for nonprofit causes across tech, sports, and startups. I turn relationships into pipeline, and pipeline into signed deals.";

export const LINK_PREVIEW_DESCRIPTION =
  "John Osberg — growth and partnerships leader in Buffalo, NY. 15+ years, $6.5M+ in revenue generated, partnerships with national brands across sports, tech, and nonprofit.";

export const PUBLIC_EMAIL = "john@makeacompany.ai";

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
    org: "MakeaCompany.ai",
    title: "Head of Growth / Founding Member",
    period: "May 2026 – Present",
    blurb:
      "Grew the active user base 9.8x in my first 6 weeks (12 to 117, +880%). Own the growth engine end to end: positioning, messaging, demand, and founder-led sales to signed customers. Build the GTM operating system and close strategic partnerships.",
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

export type Brand = { name: string; mark: string; accent: string; logo: string; url: string };

export const brands: Brand[] = [
  { name: "DICK'S", mark: "D", accent: "#1c8c3b", logo: "/logos/dicks.png", url: "https://www.dickssportinggoods.com" },
  { name: "Golf Galaxy", mark: "GG", accent: "#2f7df6", logo: "/logos/golfgalaxy.png", url: "https://www.golfgalaxy.com" },
  { name: "Wegmans", mark: "W", accent: "#e0301e", logo: "/logos/wegmans.png", url: "https://www.wegmans.com" },
  { name: "Michelob Ultra", mark: "MU", accent: "#c79a3a", logo: "/logos/michelobultra.png", url: "https://www.michelobultra.com" },
  { name: "Oakley", mark: "O", accent: "#9aa0a8", logo: "/logos/oakley.png", url: "https://www.oakley.com" },
  { name: "Ralph Lauren RLX", mark: "RLX", accent: "#3b5bdb", logo: "/logos/ralphlauren.png", url: "https://www.ralphlauren.com/rlx-golf" },
  { name: "Tito's", mark: "T", accent: "#3aa0ff", logo: "/logos/titos.png", url: "https://www.titosvodka.com" },
  { name: "Corebridge Financial", mark: "CF", accent: "#7c4dff", logo: "/logos/corebridge.png", url: "https://www.corebridgefinancial.com" },
  { name: "Sandals Resorts", mark: "S", accent: "#14b8a6", logo: "/logos/sandals.png", url: "https://www.sandals.com" },
  { name: "Gallagher Insurance", mark: "G", accent: "#e0a82e", logo: "/logos/gallagher.png", url: "https://www.ajg.com" },
  { name: "National Fuel", mark: "NF", accent: "#2563eb", logo: "/logos/nationalfuel.png", url: "https://www.nationalfuel.com" },
  { name: "Special Olympics", mark: "SO", accent: "#e0301e", logo: "/logos/specialolympics.png", url: "https://www.specialolympics.org" },
  { name: "Gatorade", mark: "G", accent: "#ff7a1a", logo: "/logos/gatorade.png", url: "https://www.gatorade.com" },
  { name: "Audacy", mark: "A", accent: "#9b5cff", logo: "/logos/audacy.png", url: "https://www.audacy.com" },
  { name: "Club Car", mark: "CC", accent: "#22a447", logo: "/logos/clubcar.png", url: "https://www.clubcar.com" },
  { name: "NY State Golf Assn.", mark: "NYSGA", accent: "#344475", logo: "/logos/nysga.png", url: "https://nysga.org" },
  { name: "Liazon (WTW)", mark: "L", accent: "#0a6ebd", logo: "/logos/liazon.png", url: "https://www.wtwco.com" },
  { name: "CareSource", mark: "CS", accent: "#00a0af", logo: "/logos/caresource.png", url: "https://www.caresource.com" },
  { name: "HealtheLink", mark: "HL", accent: "#1b75bc", logo: "/logos/healthelink.png", url: "https://wnyhealthelink.com" },
  { name: "HealtheConnections", mark: "HC", accent: "#6cb33f", logo: "/logos/healtheconnections.png", url: "https://www.healtheconnections.org" },
  { name: "Fidelis Care", mark: "FC", accent: "#00529b", logo: "/logos/fideliscare.png", url: "https://www.fideliscare.org" },
  { name: "BlueCross BlueShield", mark: "BCBS", accent: "#0066b3", logo: "/logos/bcbs.png", url: "https://www.bcbswny.com" },
];

export type PressItem = { source: string; title: string; href: string; logo: string };

export const press: PressItem[] = [
  {
    source: "PGA REACH WNY",
    title: "John Osberg Named PGA REACH WNY Trustee",
    href: "https://westernnewyork.pga.com/news/john-osberg-named-as-pga-reach-wny-trustee/",
    logo: "/logos/pgareach.png",
  },
  {
    source: "Western NY PGA",
    title: "Osberg Named Director of Development & Foundation Operations",
    href: "https://westernnewyork.pga.com/wp-content/uploads/sites/16/2023/07/Press-Release_Osberg.docx.pdf",
    logo: "/logos/news-pga.png",
  },
  {
    source: "PGA.com",
    title: "PGA REACH Hosts Charity Pro-Am at Oak Hill Country Club",
    href: "https://www.pga.com/story/pga-reach-recently-hosted-a-charity-pro-am-at-oak-hill-country-club",
    logo: "/logos/news-pga.png",
  },
  {
    source: "NYSGA",
    title: "NYSGA Partners with Buffalo-Based OnCore Golf",
    href: "https://nysga.org/communications-news/nysga-partners-with-buffalo-based-oncore-golf-technology",
    logo: "/logos/nysga.png",
  },
  {
    source: "Empire State Entrepreneurs",
    title: "John Osberg of WNY PGA — entrepreneur, athlete, growth strategist",
    href: "https://empirestateentrepreneurs.transistor.fm/s2/7",
    logo: "/logos/news-ese.png",
  },
  {
    source: "Clark Dever",
    title: "Bad Golf Business School: Startup Lessons from the Fairway",
    href: "https://www.clarkdever.com/projects/bad-golf-business-school",
    logo: "/logos/news-clarkdever.png",
  },
  {
    source: "Buffalo Business First",
    title: "John Osberg & Brandlete in Buffalo Business First",
    href: "https://www.bizjournals.com/buffalo/inno/stories/news/2022/09/02/brandlete-buffalo-startup-sports-social-media.html",
    logo: "/logos/news-biz.png",
  },
  {
    source: "Buffalo Business First",
    title: "Buffalo 30 Under 30 Winner",
    href: "https://www.bizjournals.com/buffalo/news/2019/04/01/buffalo-2019-30-under-30-winners-wny.html",
    logo: "/logos/news-biz.png",
  },
];

export const FEATURED_VIDEO = {
  id: "03PnTookfKY",
  start: 500,
  title: "John Osberg on The Incept CONNECT Podcast",
};

export type Podcast = { title: string; role: "Host" | "Guest"; href: string };

export const podcasts: Podcast[] = [
  {
    title: "The Incept CONNECT Podcast",
    role: "Host",
    href: "https://www.youtube.com/playlist?list=PLWvPwqLIgvdvsFWhEAOLgHBuB_e_aAhk8",
  },
  {
    title: "POWER of OZmosis Podcast Library",
    role: "Host",
    href: "https://www.youtube.com/playlist?list=PLgKNSRICJcqgUd-nFY-z2VXu68NbiauLm",
  },
  {
    title: "John Osberg, Featured Guest",
    role: "Guest",
    href: "https://www.youtube.com/playlist?list=PLgKNSRICJcqgMHOYeCaDmnwcjEnzumQSn",
  },
];

export type Civic = { org: string; role: string; logo: string; mark: string; accent: string; url: string };

// John's civic leadership & volunteer roles. logo "" falls back to a monogram.
export const civic: Civic[] = [
  { org: "Techstars", role: "Community Organizer & Program Contributor", logo: "/logos/civ-techstars.png", mark: "T", accent: "#1f1f1f", url: "https://www.techstars.com" },
  { org: "POWER of OZmosis", role: "Mentor · Connector · Fundraiser", logo: "/logos/powerofozmosis.png", mark: "OZ", accent: "#1d4ed8", url: "https://www.powerofozmosis.com" },
  { org: "PGA REACH Western NY", role: "Board of Trustees & Advisor", logo: "/logos/pgareach.png", mark: "PGA", accent: "#0b3d2e", url: "https://westernnewyork.pga.com" },
  { org: "EforAll", role: "Lead Mentor, Buffalo NY Cohort", logo: "/logos/civ-eforall.png", mark: "Ef", accent: "#2bb3a3", url: "https://eforall.org" },
  { org: "OnCore Golf", role: "Fundraising Director", logo: "/logos/civ-oncoregolf.png", mark: "OC", accent: "#111827", url: "https://www.oncoregolf.com" },
  { org: "UB CoLab · Blackstone LaunchPad", role: "Finals Judge, Student Pitches", logo: "/logos/civ-buffalo.png", mark: "UB", accent: "#005bbb", url: "https://www.buffalo.edu/blackstonelaunchpad.html" },
  { org: "dooProcess", role: "Community Champion & Mentor", logo: "", mark: "DP", accent: "#6d28d9", url: "https://www.google.com/search?q=dooProcess%20Buffalo" },
  { org: "Niagara University", role: "Featured Speaker", logo: "/logos/civ-niagara.png", mark: "NU", accent: "#5b2a86", url: "https://www.niagara.edu" },
  { org: "Buffalo Startup Week", role: "Featured Speaker, Social Media", logo: "", mark: "BSW", accent: "#f59e0b", url: "https://www.google.com/search?q=Buffalo%20Startup%20Week" },
  { org: "University at Buffalo", role: "Expert in Residence, LaunchPad", logo: "/logos/civ-buffalo.png", mark: "UB", accent: "#005bbb", url: "https://www.buffalo.edu" },
  { org: "Heritage Christian Services", role: "Chairperson, Heritage HERO 5K", logo: "/logos/heritagechristian.png", mark: "HC", accent: "#0e7490", url: "https://www.heritagechristianservices.org" },
  { org: "Niagara Global Tourism Institute", role: "Community Advocate, TReC", logo: "", mark: "NG", accent: "#0891b2", url: "https://www.google.com/search?q=Niagara%20Global%20Tourism%20Institute" },
  { org: "First Tee", role: "Youth Golf Coach", logo: "/logos/civ-firsttee.png", mark: "FT", accent: "#16a34a", url: "https://firsttee.org" },
  { org: "Police Athletic League", role: "Youth Golf Coach", logo: "/logos/civ-pal.png", mark: "PAL", accent: "#1e3a8a", url: "https://www.nationalpal.org" },
  { org: "NAACP", role: "Member, Buffalo NY Chapter", logo: "/logos/civ-naacp.png", mark: "NA", accent: "#111827", url: "https://naacp.org" },
  { org: "Recovery Options Made Easy", role: "5x4x24 Challenge Fundraiser", logo: "/logos/civ-eom.png", mark: "RO", accent: "#dc2626", url: "https://www.recoveryoptionsmadeeasy.org" },
  { org: "People Inc.", role: "Mentor", logo: "/logos/civ-peopleinc.png", mark: "PI", accent: "#16a34a", url: "https://www.people-inc.org" },
  { org: "Team F.A.S.T.", role: "Board Member", logo: "/logos/civ-teamfast.png", mark: "TF", accent: "#1d4ed8", url: "https://teamfastfoundation.com" },
  { org: "Heritage Christian Services", role: "Chair, Annual Foundation Fundraiser", logo: "/logos/heritagechristian.png", mark: "HC", accent: "#0e7490", url: "https://www.heritagechristianservices.org" },
  { org: "Niagara University Marketing Assn.", role: "Business Competition Finals Judge", logo: "/logos/civ-niagara.png", mark: "NUMA", accent: "#5b2a86", url: "https://www.niagara.edu" },
  { org: "Accessible Academics", role: "Mentor", logo: "", mark: "AA", accent: "#b45309", url: "https://www.google.com/search?q=Accessible%20Academics" },
  { org: "F BITES", role: "Community Champion", logo: "", mark: "FB", accent: "#65a30d", url: "https://www.google.com/search?q=F%20BITES%20Buffalo" },
  { org: "CALLSIGN 22", role: "5x4x48 Challenge Fundraiser", logo: "", mark: "C22", accent: "#475569", url: "https://www.google.com/search?q=CALLSIGN%2022%20veteran%20fundraiser" },
  { org: "Niagara University", role: "Featured Speaker & Careers Connector", logo: "/logos/civ-niagara.png", mark: "NU", accent: "#5b2a86", url: "https://www.niagara.edu" },
  { org: "The Essential Machine", role: "Mentor to Founder", logo: "", mark: "EM", accent: "#0ea5e9", url: "https://www.google.com/search?q=The%20Essential%20Machine%20startup" },
  { org: "NYBPC", role: "Regional Finals Judge", logo: "/logos/civ-nybpc.png", mark: "NY", accent: "#1f7a3f", url: "https://nybpc.org" },
  { org: "UB School of Management", role: "Mentor / Finals Judge, Student 2 Biz", logo: "/logos/civ-buffalo.png", mark: "UB", accent: "#005bbb", url: "https://management.buffalo.edu" },
  { org: "vidwheel", role: "Podcast Host & Featured Speaker", logo: "/logos/civ-vidwheel.png", mark: "VW", accent: "#16a34a", url: "https://vidwheel.com" },
  { org: "Bad Golf Business School", role: "Founder / Operator", logo: "", mark: "BG", accent: "#15803d", url: "https://www.clarkdever.com/projects/bad-golf-business-school" },
  { org: "American University", role: "Featured Speaker", logo: "/logos/civ-american.png", mark: "AU", accent: "#b91c1c", url: "https://www.american.edu" },
  { org: "Trocaire College", role: "Featured Speaker", logo: "/logos/civ-trocaire.png", mark: "TC", accent: "#7f1d1d", url: "https://www.trocaire.edu" },
  { org: "American Lung Association", role: "Fight for Air Climb Fundraiser", logo: "/logos/civ-lung.png", mark: "AL", accent: "#2563eb", url: "https://www.lung.org" },
  { org: "InfoTech WNY", role: "Board Member & Co-Director, Networking", logo: "", mark: "IT", accent: "#0d9488", url: "https://www.google.com/search?q=InfoTech%20WNY" },
  { org: "Buffalo Niagara Partnership", role: "Featured Speaker, BN360", logo: "/logos/civ-bnp.png", mark: "BN", accent: "#1d4ed8", url: "https://www.thepartnership.org" },
  { org: "Cystic Fibrosis Foundation", role: "Rising Star Selection", logo: "/logos/civ-cff.png", mark: "CF", accent: "#2563eb", url: "https://www.cff.org" },
  { org: "Special Olympics", role: "Event Volunteer, Fire Truck Pull", logo: "/logos/specialolympics.png", mark: "SO", accent: "#e0301e", url: "https://www.specialolympics.org" },
  { org: "United Way of Buffalo & Erie County", role: "Student Liaison", logo: "/logos/civ-uwbec.png", mark: "UW", accent: "#e0301e", url: "https://www.uwbec.org" },
  { org: "Jericho Road Community Health Center", role: "Volunteer, Vive La Casa", logo: "/logos/civ-jericho.png", mark: "JR", accent: "#ea580c", url: "https://jrchc.org" },
];
