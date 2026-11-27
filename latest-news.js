const LATEST_EV_NEWS = [
  {
    title: "Foldable Off-Grid Solar EV Charger: Gaotu's New Tech",
    date: "Nov 25, 2026",
    category: "EV Car News",
    url: "/foldable-off-grid-solar-ev-charger",
    excerpt: "Gaotu Innovation's foldable off-grid solar EV charger features 1,600W solar panels, 2.5kWh LFP storage, and smart MPPT charging."
  },
  {
    title: "Real-World EV Range Tested in India 2026: Claimed vs Actual Results",
    date: "Nov 2026",
    category: "EV Car News",
    url: "/ev-car-news#news-1",
    excerpt: "Combined city and highway range test results across top Indian electric cars."
  },
  {
    title: "Best EV Cars Under 10 & 15 Lakhs in India (2026 Guide)",
    date: "Nov 2026",
    category: "EV Car Compare and Analysis",
    url: "/ev-car-news#news-2",
    excerpt: "Comparing Tata Tiago EV, Punch EV, MG Comet EV, and Windsor EV for budget buyers."
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const box = document.getElementById("latest-news-grid");
  if (!box) return;
  box.className = "space-y-3";
  box.innerHTML = LATEST_EV_NEWS.map((n, i) => `
    <a href="${n.url}" class="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-2xl border border-emerald-200 bg-white p-4 hover:border-emerald-400 hover:bg-emerald-50/40 transition">
      <div>
        <div class="flex items-center gap-2 text-[11px] font-bold text-emerald-700 mb-1">
          <span>#${i + 1} ${n.category}</span><span class="text-slate-400">&bull; ${n.date}</span>
        </div>
        <h3 class="font-bold text-slate-900 group-hover:text-emerald-700 text-sm sm:text-base">${n.title}</h3>
        <p class="text-xs text-slate-600 mt-1">${n.excerpt}</p>
      </div>
      <span class="text-xs font-bold text-emerald-700 shrink-0">Read Post &rarr;</span>
    </a>
  `).join("");
});
