const ALL_UPDATED_POSTS = [
  {
    title: "Hyundai Ioniq 5 (2026) On-Road Price in Kolkata: WB RTO, 84 kWh Specs & Review",
    shortTitle: "Hyundai Ioniq 5 (2026) Kolkata Price",
    updated: "Updated Nov 28, 2026",
    category: "EV Car News",
    segment: "suv",
    url: "/hyundai-ioniq-5-price-kolkata",
    sub: "₹58.80L On-Road • 84 kWh",
    excerpt: "2026 Hyundai Ioniq 5 Kolkata on-road price starts at ₹58.80 Lakh (₹55.71 Lakh ex-showroom) with WB EV RTO breakup & 18-min DC charge."
  },
  {
    title: "Ampere Nexus EX Plus On-Road Price 2026–2027: 136 km LFP Range & 5 kW Motor",
    shortTitle: "Ampere Nexus EX Plus Review & Price",
    updated: "Updated Nov 27, 2026",
    category: "Electric Scooty / Bike",
    segment: "scooty",
    url: "/ampere-nexus-ex-plus",
    sub: "₹1,29,999* • 3 kWh LFP",
    excerpt: "Ampere Nexus EX+ starts at ₹1,29,999 with 3 kWh LFP battery (2,00,000 km cycle life), 93 km/h top speed & practical range estimator."
  },
  {
    title: "Tata Harrier.ev On-Road Price 2026–2027, QWD 504 Nm, BaaS ₹14.49L & Specs",
    shortTitle: "Tata Harrier.ev QWD & BaaS Guide",
    updated: "Updated Nov 27, 2026",
    category: "Tata EV",
    segment: "suv",
    url: "/tata-harrier-ev",
    sub: "₹21.79L • BaaS ₹14.49L",
    excerpt: "Official Harrier.ev 65 & 75 kWh QWD specs, 627 km MIDC range, 5-Star BNCAP, 10-image gallery & practical range estimator."
  },
  {
    title: "Tata Tiago.ev On-Road Price 2026–2027, BaaS ₹4.69L Plan, Colours & Range",
    shortTitle: "Tata Tiago.ev BaaS & Range Guide",
    updated: "Updated Nov 27, 2026",
    category: "Tata EV",
    segment: "commuter",
    url: "/tata-tiago-ev",
    sub: "₹6.99L • BaaS ₹4.69L",
    excerpt: "2026 Tata Tiago.ev facelift 6 official shades, interior gallery, 19.2 & 24 kWh range estimator & BaaS ₹2.60/km math."
  },
  {
    title: "Tata Sierra.ev On-Road Price 2026–2027, QWD Dual Motor, BaaS ₹11.99L & 665 km Range",
    shortTitle: "Tata Sierra.ev 75 kWh & QWD Guide",
    updated: "Updated Nov 27, 2026",
    category: "Tata EV",
    segment: "suv",
    url: "/tata-sierra-ev",
    sub: "₹18.79L • 665 km MIDC",
    excerpt: "Official Sierra.ev 63 & 75 kWh brochure specs, Triple Screen cabin, L2+ ADAS & BaaS ₹11.99L + ₹5.50/km breakdown."
  },
  {
    title: "Tata Curvv.ev SeriesX On-Road Price 2026–2027, BaaS ₹10.99L, 55 kWh & Specs",
    shortTitle: "Tata Curvv.ev SeriesX 55 kWh Guide",
    updated: "Updated Nov 27, 2026",
    category: "Tata EV",
    segment: "suv",
    url: "/tata-curvv-ev",
    sub: "₹17.19L • BaaS ₹10.99L",
    excerpt: "Curvv.ev SeriesX 55 kWh 502 km MIDC range, 5-Star BNCAP rating, Accomplished X vs Empowered X & BaaS pricing."
  },
  {
    title: "Tata Tigor.ev On-Road Price 2026–2027, 315 km Ziptron Range & Brochure Specs",
    shortTitle: "Tata Tigor.ev 315 km Sedan Guide",
    updated: "Updated Nov 27, 2026",
    category: "Tata EV",
    segment: "commuter",
    url: "/tata-tigor-ev",
    sub: "₹12.49L • 316L Boot",
    excerpt: "26 kWh Ziptron sedan specs, 315 km ARAI range, XE/XT/XZ+/XZ+ Lux variants & practical range estimator."
  },
  {
    title: "BaaS Model vs Full Price AI Calculator India (2026–2027)",
    shortTitle: "BaaS vs Full Price AI Calculator",
    updated: "Updated Nov 27, 2026",
    category: "AI EV Tool",
    segment: "tool",
    url: "/baas-vs-full-price-calculator",
    sub: "Compare ₹/km Rental vs EMI",
    excerpt: "Compare Battery-as-a-Service upfront price + per-km battery rental vs full EV ownership EMI & exact breakeven km."
  },
  {
    title: "Tata Nexon.ev On-Road Price 2027, Range, BaaS Model & Variants",
    shortTitle: "Tata Nexon.ev 45 kWh & BaaS Guide",
    updated: "Updated Nov 27, 2026",
    category: "Tata EV",
    segment: "suv",
    url: "/tata-nexon-ev",
    sub: "₹12.49L • BaaS ₹8.99L",
    excerpt: "Nexon.ev 30 & 45 kWh variants, studio colours, BaaS ₹4.40/km comparison & practical range estimator."
  },
  {
    title: "Tata Punch.ev On-Road Price 2026, Facelift Range & BaaS Guide",
    shortTitle: "Tata Punch.ev Facelift & BaaS Guide",
    updated: "Updated Nov 27, 2026",
    category: "Tata EV",
    segment: "commuter",
    url: "/tata-punch-ev",
    sub: "₹9.79L • BaaS ₹6.59L",
    excerpt: "Punch.ev 30 & 40 kWh range, 7 official shades, city on-road prices & BaaS ₹2.60/km breakdown."
  },
  {
    title: "Foldable Off-Grid Solar EV Charger: Gaotu's New Tech",
    shortTitle: "Foldable Off-Grid Solar EV Charger",
    updated: "Updated Nov 25, 2026",
    category: "EV Car News",
    segment: "news",
    url: "/foldable-off-grid-solar-ev-charger",
    sub: "1,600W Solar • 2.5 kWh LFP",
    excerpt: "Gaotu Innovation's foldable off-grid solar EV charger features 1,600W solar panels, 2.5kWh LFP storage & smart MPPT charging."
  },
  {
    title: "Hyundai Ioniq P EV India Launch Date, Expected Price & Specs",
    shortTitle: "Hyundai Ioniq P EV India Guide",
    updated: "Updated Nov 25, 2026",
    category: "Upcoming EV",
    segment: "suv",
    url: "/hyundai-ioniq-p-ev",
    sub: "Sub-4m SUV • Jan 2027",
    excerpt: "Hyundai's India-focused sub-4-metre electric SUV expected price, battery range & launch timeline."
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const curPath = window.location.pathname.replace(/\\.html$/, "") || "/";
  const currentPost = ALL_UPDATED_POSTS.find(p => p.url === curPath);
  const currentSeg = currentPost ? currentPost.segment : null;

  // 1. Latest / Recently Updated Posts (top 4 most recently updated, excluding current page)
  const latestItems = ALL_UPDATED_POSTS.filter(p => p.url !== curPath).slice(0, 4);
  const latestUrls = new Set(latestItems.map(p => p.url));

  const box = document.getElementById("latest-news-grid");
  if (box) {
    box.className = "space-y-3";
    box.innerHTML = latestItems.map((n, i) => `
      <a href="${n.url}" class="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-2xl border border-emerald-200 bg-white p-4 hover:border-emerald-400 hover:bg-emerald-50/40 transition">
        <div>
          <div class="flex items-center gap-2 text-[11px] font-bold text-emerald-700 mb-1">
            <span>#${i + 1} ${n.category}</span><span class="text-slate-400">&bull; ${n.updated}</span>
          </div>
          <h3 class="font-bold text-slate-900 group-hover:text-emerald-700 text-sm sm:text-base">${n.title}</h3>
          <p class="text-xs text-slate-600 mt-1">${n.excerpt}</p>
        </div>
        <span class="text-xs font-bold text-emerald-700 shrink-0">Read Post &rarr;</span>
      </a>
    `).join("");
  }

  // 2. Related Posts (prioritize same segment & recent updates, avoiding duplicates with Latest where possible)
  const relBox = document.getElementById("related-posts-grid");
  if (relBox) {
    const candidates = ALL_UPDATED_POSTS.filter(p => p.url !== curPath);
    const sameSegNotLatest = candidates.filter(p => currentSeg && p.segment === currentSeg && !latestUrls.has(p.url));
    const otherNotLatest = candidates.filter(p => !latestUrls.has(p.url) && (!currentSeg || p.segment !== currentSeg));
    const fallbackSameSeg = candidates.filter(p => currentSeg && p.segment === currentSeg && latestUrls.has(p.url));
    const relItems = [...sameSegNotLatest, ...otherNotLatest, ...fallbackSameSeg, ...candidates]
      .filter((item, idx, arr) => arr.findIndex(x => x.url === item.url) === idx)
      .slice(0, 4);

    relBox.innerHTML = relItems.map(r => `
      <a href="${r.url}" class="rounded-2xl border border-emerald-200 bg-white p-4 hover:border-emerald-400 hover:shadow-sm transition block">
        <div class="flex items-center justify-between gap-1 mb-1.5">
          <span class="inline-block rounded-md bg-emerald-100 text-emerald-800 px-2 py-0.5 text-[10px] font-extrabold">${r.category}</span>
          <span class="text-[10px] font-semibold text-slate-400">${r.updated.replace("Updated ", "")}</span>
        </div>
        <h3 class="text-sm font-extrabold text-slate-900">${r.shortTitle}</h3>
        <p class="text-xs font-semibold text-emerald-700 mt-1">${r.sub}</p>
      </a>
    `).join("");
  }
});
