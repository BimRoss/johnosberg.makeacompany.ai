export const SITE_URL = "https://johnosberg.com";
export const SITE_NAME = "John Osberg";
export const SITE_TITLE = "John Osberg | Growth & Partnerships Leader";

export const HERO_LABEL = "growth · partnerships · revenue";

export const HERO_SUMMARY =
  "Growth and partnerships leader co-building in youth sports and sports tech, with 15+ years turning relationships into revenue and $15M+ generated and influenced.";

export const LINK_PREVIEW_DESCRIPTION =
  "John Osberg — growth and partnerships leader in Buffalo, NY. 15+ years, $15M+ in revenue generated and influenced, partnerships with national brands across sports, tech, and nonprofit.";

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
  { value: "$15M+", label: "revenue generated" },
  { value: "$2.1M+", label: "capital secured" },
  { value: "$1.5M+", label: "nonprofit raised" },
  { value: "15+ yrs", label: "growth & partnerships" },
];

// Experience — mirrors John's LinkedIn: same roles, same order (most recent
// first), same date ranges. The four early finance roles (Citi, CFA Institute,
// Bloomberg, M&T Bank) intentionally carry no blurb per John's direction; the
// Experience list renders the title + period only when blurb is empty.
// Each role carries a `logo` (logo.dev by domain, or "" to go straight to the
// monogram) plus a `mark`/`accent` monogram fallback, rendered by <RoleLogo>.
export type Role = {
  org: string;
  title: string;
  period: string;
  blurb: string;
  logo: string;
  mark: string;
  accent: string;
  // Company site the logo links to. Omit for orgs with no public site
  // (e.g. Stealth Startup) so <RoleLogo> renders the mark without a link.
  url?: string;
};

export const roles: Role[] = [
  {
    org: "Brandlete, Inc.",
    title: "VP of Partnerships / Founding Member",
    period: "Nov 2021 – Present",
    blurb:
      "Co-founded the Sports Program Operating System and Athlete Development Engine. Drive early-stage partnerships and pilots with clubs, coaches, and athletic organizations, and assembled the founding team.",
    logo: logoDev("brandlete.com"),
    mark: "B",
    accent: "#00ccff",
    url: "https://brandlete.com",
  },
  {
    org: "MakeaCompany",
    title: "Head of Growth / GTM",
    period: "Apr 2026 – Present",
    blurb:
      "Own go-to-market for an AI-native startup, building the motion from positioning through pipeline to closed revenue. Stand up the growth engine end to end and the early GTM foundation a Series-stage company scales on.",
    logo: "/logos/makeacompany.png",
    mark: "M",
    accent: "#6366f1",
    url: "https://makeacompany.ai",
  },
  {
    org: "Kreuz Staffing & Business Development",
    title: "Strategic Advisor",
    period: "Jul 2026 – Present",
    blurb:
      "Advise on talent strategy across sales, business development, engineering, and finance, drawing on 14+ years of recruiting built mostly in technology. Help position Kreuz as the boutique, high-touch alternative in search.",
    logo: "/logos/kreuz.png",
    mark: "K",
    accent: "#b45309",
    url: "https://kreuzbd.com",
  },
  {
    org: "Stealth Startup",
    title: "Sports Tech – Revenue / GTM / Partnerships",
    period: "Jan 2017 – Apr 2026",
    blurb:
      "Revenue, go-to-market, and partnerships across a portfolio of early-stage sports-tech companies on a contract basis. An estimated $2.2M+ in total attributed value to the portfolio.",
    logo: "/logos/stealth.png",
    mark: "SS",
    accent: "#64748b",
  },
  {
    org: "PGA of America",
    title: "Director of Partnerships / Founding Trustee",
    period: "Jan 2020 – Oct 2025",
    blurb:
      "275% partner growth with 97% retention across 60+ accounts in Western NY. $250K+ annually through sponsorships and multi-year partnerships with Michelob Ultra, Oakley, RLX, and more. Scaled PGA HOPE and other fundraising to $350K+ in program funding over six years.",
    logo: logoDev("pga.com"),
    mark: "PGA",
    accent: "#0b3d2e",
    url: "https://pga.com",
  },
  {
    org: "OnCore Golf",
    title: "Director of Revenue Partnerships / Strategic Advisor / Consultant",
    period: "Jul 2016 – Aug 2025",
    blurb:
      "Secured distribution partnerships with NYSGA, DICK'S Sporting Goods, Golf Galaxy (30+ locations), and Wegmans, representing $3.5M+ in revenue across those relationships.",
    logo: logoDev("oncoregolf.com"),
    mark: "OC",
    accent: "#111827",
    url: "https://oncoregolf.com",
  },
  {
    org: "Bad Golf Business School",
    title: "Founder / Operator",
    period: "Jan 2019 – Jul 2025",
    blurb:
      "Founded a golf-driven networking platform (a POWER of OZmosis sub-brand) convening 50–125 professionals per event to generate referrals and early-stage deal flow, with monetization validated through pricing partnerships.",
    logo: "/logos/badgolf.png",
    mark: "BG",
    accent: "#15803d",
    url: "https://powerofozmosis.com",
  },
  {
    org: "POWER of OZmosis",
    title: "Principal Consultant / Founder",
    period: "Jul 2019 – Jun 2025",
    blurb:
      "$200K–$325K+ in client revenue through strategic partnerships, with $817K in aggregate client deal flow closed as of Q1 2026. Coached 20+ leaders across verticals over four years, secured $221K+ in venture funding for startup clients, and raised $285K across nonprofit campaigns.",
    logo: logoDev("powerofozmosis.com"),
    mark: "OZ",
    accent: "#1d4ed8",
    url: "https://powerofozmosis.com",
  },
  {
    org: "EmergenceTek Group Inc.",
    title: "VP of Sales / Founding Member / Management Consultant",
    period: "Sep 2012 – Sep 2024",
    blurb:
      "Drove full-cycle business development, growing the client base 0 to 35+ enterprise and mid-market orgs and helping push company revenue to ~$5M. Generated $3M+ across technical projects, staffing, and MRR contracts, plus $750K+ in new business and $500K in NY State economic development incentives.",
    logo: logoDev("emergencetek.com"),
    mark: "ET",
    accent: "#0ea5e9",
    url: "https://emergencetek.com",
  },
  {
    org: "Oro Sports USA, Inc.",
    title: "Strategic Advisor",
    period: "May 2019 – Dec 2021",
    blurb:
      "Advised Oro Sports (formerly Coolture) through its rebrand on go-to-market and product positioning, working directly with the CEO to sharpen the youth-sports pitch and support strategy, fundraising, and early product priorities.",
    logo: "/logos/orosports.png",
    mark: "OS",
    accent: "#14b8a6",
    url: "https://orosportsusa.com",
  },
  {
    org: "DataSure24",
    title: "Director of Business Development / Founding Employee",
    period: "Aug 2018 – Jul 2019",
    blurb:
      "Generated $150K+ in new revenue and expanded existing accounts 22% in year one. Built and managed a $600K pipeline through prospecting, partnerships, and targeted account development, supporting $400K ARR across startups, SMBs, and enterprise accounts.",
    logo: logoDev("datasure24.com"),
    mark: "DS",
    accent: "#dc2626",
    url: "https://datasure24.com",
  },
  {
    org: "Citi",
    title: "Investment Equities Associate",
    period: "Apr 2012 – Dec 2012",
    blurb: "",
    logo: logoDev("citi.com"),
    mark: "C",
    accent: "#003b70",
    url: "https://citi.com",
  },
  {
    org: "CFA Institute",
    title: "Management Analyst",
    period: "Jan 2012 – Jun 2012",
    blurb: "",
    logo: logoDev("cfainstitute.org"),
    mark: "CFA",
    accent: "#00539b",
    url: "https://cfainstitute.org",
  },
  {
    org: "Bloomberg",
    title: "Brand Engagement Lead",
    period: "Sep 2011 – Feb 2012",
    blurb: "",
    logo: logoDev("bloomberg.com"),
    mark: "B",
    accent: "#111827",
    url: "https://bloomberg.com",
  },
  {
    org: "M&T Bank",
    title: "Profitability Analytics Associate",
    period: "Jan 2011 – Sep 2011",
    blurb: "",
    logo: logoDev("mtb.com"),
    mark: "MT",
    accent: "#005e5d",
    url: "https://mtb.com",
  },
];

// Partnership sectors — drive the donut chart and the filterable logo wall.
// Order here is the order chips render in.
// Tools & technology — from John's resume, ordered by importance. AI tools lead
// (John builds in AI-native startups), then sales/GTM, collaboration, creative,
// job boards, and golf tech. `logo` pulls the real brand mark via logo.dev;
// `mark`/`accent` are the colored-monogram fallback rendered by <SkillsGrid>.
export type Tool = { name: string; logo: string; mark: string; accent: string };

export const tools: Tool[] = [
  // AI
  { name: "Claude", logo: logoDev("anthropic.com"), mark: "C", accent: "#d97757" },
  { name: "ChatGPT", logo: logoDev("openai.com"), mark: "AI", accent: "#10a37f" },
  { name: "Claude Code", logo: logoDev("claude.com"), mark: "CC", accent: "#d97757" },
  { name: "Gemini", logo: "/logos/tool-gemini.svg", mark: "G", accent: "#8e75f8" },
  { name: "Perplexity", logo: logoDev("perplexity.ai"), mark: "PX", accent: "#20808d" },
  { name: "Copilot", logo: "/logos/tool-copilot.svg", mark: "Co", accent: "#111111" },
  // Sales / GTM
  { name: "HubSpot", logo: logoDev("hubspot.com"), mark: "HS", accent: "#ff7a59" },
  { name: "LinkedIn Sales Navigator", logo: logoDev("linkedin.com"), mark: "in", accent: "#0a66c2" },
  { name: "ZoomInfo", logo: logoDev("zoominfo.com"), mark: "ZI", accent: "#e11d48" },
  { name: "LinkedIn Recruiter", logo: logoDev("linkedin.com"), mark: "in", accent: "#0a66c2" },
  // Collaboration / productivity
  { name: "Slack", logo: logoDev("slack.com"), mark: "S", accent: "#611f69" },
  { name: "Microsoft Teams", logo: "/logos/tool-teams.svg", mark: "T", accent: "#6264a7" },
  { name: "Microsoft 365", logo: logoDev("microsoft.com"), mark: "365", accent: "#0078d4" },
  { name: "Google Workspace", logo: "", mark: "GW", accent: "#4285f4" },
  { name: "Monday.com", logo: logoDev("monday.com"), mark: "M", accent: "#ff3d57" },
  { name: "Asana", logo: logoDev("asana.com"), mark: "A", accent: "#f06a6a" },
  { name: "Trello", logo: logoDev("trello.com"), mark: "T", accent: "#0079bf" },
  // Creative / marketing
  { name: "Canva", logo: logoDev("canva.com"), mark: "C", accent: "#00c4cc" },
  { name: "Mailchimp", logo: logoDev("mailchimp.com"), mark: "MC", accent: "#eab308" },
  { name: "Eventbrite", logo: logoDev("eventbrite.com"), mark: "E", accent: "#f05537" },
  // Job boards
  { name: "Dice", logo: logoDev("dice.com"), mark: "D", accent: "#e11d48" },
  { name: "Monster", logo: logoDev("monster.com"), mark: "M", accent: "#6f42c1" },
  // Golf tech
  { name: "Golf Genius", logo: logoDev("golfgenius.com"), mark: "GG", accent: "#1a7f37" },
  { name: "BlueGolf", logo: logoDev("bluegolf.com"), mark: "BG", accent: "#1d4ed8" },
];

export type Sector =
  | "Sports & Golf"
  | "Beverage & CPG"
  | "Healthcare"
  | "Finance & Insurance"
  | "Media, Energy & Travel";

export const SECTORS: { name: Sector; color: string }[] = [
  { name: "Sports & Golf", color: "#00ccff" },
  { name: "Beverage & CPG", color: "#0088cc" },
  { name: "Healthcare", color: "#2563eb" },
  { name: "Finance & Insurance", color: "#7cc9ff" },
  { name: "Media, Energy & Travel", color: "#005f99" },
];

// Revenue driven by venture, in $K. Numbers are the ones John states on his
// resume for each role — used by the "Revenue driven, by venture" bar chart.
export const revenueByVenture: { label: string; period: string; valueK: number; note: string }[] = [
  { label: "OnCore Golf", period: "2017–18", valueK: 4000, note: "DICK'S, Golf Galaxy, Wegmans, NYSGA" },
  { label: "EmergenceTek", period: "2012–17", valueK: 5000, note: "0→25+ enterprise & mid-market" },
  { label: "POWER of OZmosis", period: "2019–26", valueK: 820, note: "$325K revenue · $775K deal flow" },
  { label: "PGA WNY", period: "2020–2025", valueK: 750, note: "annual, sponsorships & renewals" },
];

// Career milestones for the interactive timeline. `metric` is the one headline
// number for each stop; `revenueK` sizes the marker.
export const milestones: { year: string; org: string; title: string; metric: string; revenueK: number }[] = [
  { year: "2012", org: "EmergenceTek", title: "VP, Client Engagement & Sales", metric: "$5M+ · 0→25 orgs", revenueK: 5000 },
  { year: "2017", org: "OnCore Golf", title: "Director of Partnerships", metric: "$4M+ driven", revenueK: 4000 },
  { year: "2019", org: "POWER of OZmosis", title: "Founder / Principal", metric: "40+ founders coached", revenueK: 820 },
  { year: "2021", org: "Brandlete", title: "VP Partnerships / Founding Member", metric: "Sports Org OS & Athlete Development Engine", revenueK: 1000 },
  { year: "2023", org: "PGA of America WNY", title: "Director, Partnerships & Dev.", metric: "275% growth · 97% retained", revenueK: 250 },
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

// Awards & honors — mirrors John's LinkedIn "Honors & awards", newest first.
// Repeat issuers (PGA, Heritage Christian Services, Veterans Affairs) are
// grouped into one entry that lists each award with its year.
export type Award = { org: string; items: { title: string; year: string }[] };

export const awards: Award[] = [
  {
    org: "PGA of America",
    items: [
      { title: "Top Fundraiser Award · REACH Foundation", year: "2025" },
      { title: "Above & Beyond Recognition Award", year: "2024" },
    ],
  },
  { org: "Buffalo Business First", items: [{ title: "Wellness Champion of 2024", year: "2024" }] },
  {
    org: "Heritage Christian Services",
    items: [
      { title: "Top Fundraiser Award", year: "2022" },
      { title: "Carol & Ernie Forth Community Service Award", year: "2021" },
      { title: "Top Fundraiser / Event Chair Award", year: "2018" },
    ],
  },
  {
    org: "U.S. Dept. of Veterans Affairs",
    items: [
      { title: "Community Partnership Award", year: "2022" },
      { title: "Certificate of Pride in Public Service", year: "2021" },
    ],
  },
  { org: "November Project — Buffalo", items: [{ title: "“Good Neighbor” Community Award", year: "2022" }] },
  { org: "Jack Nicklaus", items: [{ title: "Amateur Golf National Champion", year: "2020" }] },
  { org: "Buffalo Business First", items: [{ title: "30 Under 30", year: "2019" }] },
  { org: "Cystic Fibrosis Foundation", items: [{ title: "Rising Star Awardee", year: "2018" }] },
  { org: "The First Tee of WNY", items: [{ title: "New Coach of the Year", year: "2016" }] },
  { org: "Niagara University", items: [{ title: "Top 20 Most Intriguing Student", year: "2013" }] },
  { org: "Niagara University", items: [{ title: "Who’s Who Among Students in American Universities & Colleges", year: "2012" }] },
];

export const FEATURED_VIDEO = {
  id: "03PnTookfKY",
  start: 500,
  title: "John Osberg on The Incept CONNECT Podcast",
};

// Guest appearance, embedded directly under the main podcast and above the
// three playlist cards. Featured episode from John's "Featured Guest" playlist.
export const FEATURED_GUEST_VIDEO = {
  id: "n2aAi-frg7Q",
  start: 0,
  title: "John Osberg, Featured Guest",
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
];

export type Civic = { org: string; role: string; logo: string; mark: string; accent: string; url: string };

// John's civic leadership & volunteer roles. logo "" falls back to a monogram.
export const civic: Civic[] = [
  { org: "Techstars", role: "Community Organizer & Program Contributor", logo: logoDev("techstars.com"), mark: "T", accent: "#1f1f1f", url: "https://www.techstars.com" },
  { org: "POWER of OZmosis", role: "Mentor · Connector · Fundraiser", logo: logoDev("powerofozmosis.com"), mark: "OZ", accent: "#1d4ed8", url: "https://www.powerofozmosis.com" },
  { org: "PGA REACH Western NY", role: "Board of Trustees & Advisor", logo: logoDev("pga.com"), mark: "PGA", accent: "#0b3d2e", url: "https://westernnewyork.pga.com" },
  { org: "EforAll", role: "Lead Mentor, Buffalo NY Cohort", logo: logoDev("eforall.org"), mark: "Ef", accent: "#2bb3a3", url: "https://eforall.org" },
  { org: "OnCore Golf", role: "Fundraising Director", logo: logoDev("oncoregolf.com"), mark: "OC", accent: "#111827", url: "https://www.oncoregolf.com" },
  { org: "UB CoLab · Blackstone LaunchPad", role: "Finals Judge, Student Pitches", logo: logoDev("buffalo.edu"), mark: "UB", accent: "#005bbb", url: "https://www.buffalo.edu/entrepreneurship/about/welcome.html" },
  { org: "dooProcess", role: "Community Champion & Mentor", logo: "/logos/civ-dooprocess.png", mark: "DP", accent: "#6d28d9", url: "https://www.dooprocess.org" },
  { org: "Buffalo Startup Week", role: "Featured Speaker, Social Media", logo: "/logos/civ-buffalo-startup-week.png", mark: "BSW", accent: "#f59e0b", url: "https://www.buffalo.edu/partnerships/landing-pages/startup-week.html" },
  { org: "University at Buffalo", role: "Expert in Residence, LaunchPad", logo: logoDev("buffalo.edu"), mark: "UB", accent: "#005bbb", url: "https://www.buffalo.edu" },
  { org: "Heritage Christian Services", role: "Chairperson, Heritage HERO 5K & Annual Foundation Fundraiser", logo: logoDev("heritagechristianservices.org"), mark: "HC", accent: "#0e7490", url: "https://www.heritagechristianservices.org" },
  { org: "Niagara Global Tourism Institute", role: "Community Advocate, TReC", logo: "/logos/civ-niagara-global.png", mark: "NG", accent: "#0891b2", url: "https://www.google.com/search?q=Niagara%20Global%20Tourism%20Institute" },
  { org: "First Tee", role: "Youth Golf Coach", logo: logoDev("firsttee.org"), mark: "FT", accent: "#16a34a", url: "https://firsttee.org" },
  { org: "Police Athletic League", role: "Youth Golf Coach", logo: logoDev("nationalpal.org"), mark: "PAL", accent: "#1e3a8a", url: "https://www.nationalpal.org" },
  { org: "NAACP", role: "Member, Buffalo NY Chapter", logo: logoDev("naacp.org"), mark: "NA", accent: "#111827", url: "https://naacp.org" },
  { org: "Recovery Options Made Easy", role: "5x4x24 Challenge Fundraiser", logo: logoDev("recoveryoptionsmadeeasy.org"), mark: "RO", accent: "#dc2626", url: "https://www.recoveryoptionsmadeeasy.org" },
  { org: "People Inc.", role: "Mentor", logo: logoDev("people-inc.org"), mark: "PI", accent: "#16a34a", url: "https://www.people-inc.org" },
  { org: "Team F.A.S.T.", role: "Board Member", logo: logoDev("teamfastfoundation.com"), mark: "TF", accent: "#1d4ed8", url: "https://teamfastfoundation.com" },
  { org: "Niagara University Marketing Assn.", role: "Business Competition Finals Judge", logo: logoDev("niagara.edu"), mark: "NUMA", accent: "#5b2a86", url: "https://www.niagara.edu" },
  { org: "Accessible Academics", role: "Mentor", logo: "/logos/civ-accessible-academics.png", mark: "AA", accent: "#b45309", url: "https://www.google.com/search?q=Accessible%20Academics" },
  { org: "F BITES", role: "Community Champion", logo: "/logos/civ-fbites.png", mark: "FB", accent: "#65a30d", url: "https://www.google.com/search?q=F%20BITES%20Buffalo" },
  { org: "CALLSIGN 22", role: "5x4x48 Challenge Fundraiser", logo: "/logos/civ-callsign22.png", mark: "C22", accent: "#475569", url: "https://www.google.com/search?q=CALLSIGN%2022%20veteran%20fundraiser" },
  { org: "Niagara University", role: "Featured Speaker & Careers Connector", logo: logoDev("niagara.edu"), mark: "NU", accent: "#5b2a86", url: "https://www.niagara.edu" },
  { org: "The Essential Machine", role: "Mentor to Founder", logo: "/logos/civ-essential-machine.png", mark: "EM", accent: "#0ea5e9", url: "https://www.google.com/search?q=The%20Essential%20Machine%20startup" },
  { org: "NYBPC", role: "Regional Finals Judge", logo: logoDev("nybpc.org"), mark: "NY", accent: "#1f7a3f", url: "https://nybpc.org" },
  { org: "UB School of Management", role: "Mentor / Finals Judge, Student 2 Biz", logo: logoDev("buffalo.edu"), mark: "UB", accent: "#005bbb", url: "https://management.buffalo.edu" },
  { org: "vidwheel", role: "Podcast Host & Featured Speaker", logo: logoDev("vidwheel.com"), mark: "VW", accent: "#16a34a", url: "https://vidwheel.com" },
  { org: "Bad Golf Business School", role: "Founder / Operator", logo: "/logos/badgolf.png", mark: "BG", accent: "#15803d", url: "https://www.clarkdever.com/projects/bad-golf-business-school" },
  { org: "American University", role: "Featured Speaker", logo: logoDev("american.edu"), mark: "AU", accent: "#b91c1c", url: "https://www.american.edu" },
  { org: "Trocaire College", role: "Featured Speaker", logo: logoDev("trocaire.edu"), mark: "TC", accent: "#7f1d1d", url: "https://www.trocaire.edu" },
  { org: "American Lung Association", role: "Fight for Air Climb Fundraiser", logo: logoDev("lung.org"), mark: "AL", accent: "#2563eb", url: "https://www.lung.org" },
  { org: "InfoTech WNY", role: "Board Member & Co-Director, Networking", logo: "/logos/civ-infotech-wny.png", mark: "IT", accent: "#0d9488", url: "https://www.google.com/search?q=InfoTech%20WNY" },
  { org: "Buffalo Niagara Partnership", role: "Featured Speaker, BN360", logo: logoDev("thepartnership.org"), mark: "BN", accent: "#1d4ed8", url: "https://www.thepartnership.org" },
  { org: "Cystic Fibrosis Foundation", role: "Rising Star Selection", logo: logoDev("cff.org"), mark: "CF", accent: "#2563eb", url: "https://www.cff.org" },
  { org: "Special Olympics", role: "Event Volunteer, Fire Truck Pull", logo: logoDev("specialolympics.org"), mark: "SO", accent: "#e0301e", url: "https://www.specialolympics.org" },
  { org: "United Way of Buffalo & Erie County", role: "Student Liaison", logo: logoDev("uwbec.org"), mark: "UW", accent: "#e0301e", url: "https://www.uwbec.org" },
  { org: "Jericho Road Community Health Center", role: "Volunteer, Vive La Casa", logo: logoDev("jrchc.org"), mark: "JR", accent: "#ea580c", url: "https://jrchc.org" },
];
