import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LabelList, Legend,
} from "recharts";

const PURPLE = {
  lightest: "#f3e0f3",
  light: "#e8c4e8",
  mid: "#c9a0c9",
  medium: "#b07ab0",
  deep: "#a06090",
  dark: "#6b3a6b",
};

const customers = [
  { name: "Bettie Lang", value: 112602 },
  { name: "Ashton Charles", value: 107412 },
  { name: "Alexander Bond", value: 85461 },
  { name: "Lola Hughes", value: 78972 },
  { name: "Angie Massengill", value: 75550 },
  { name: "Thomas Thompson", value: 71238 },
  { name: "Indiana Wekey", value: 70984 },
  { name: "Isaac David", value: 69833 },
  { name: "George Dawson", value: 69012 },
  { name: "Rachel Tyler", value: 68414 },
];

const segments = [
  { name: "Consumer", value: 6165650, color: PURPLE.light },
  { name: "Corporate", value: 3880087, color: PURPLE.medium },
  { name: "Home Office", value: 1853246, color: PURPLE.dark },
];

const regions = [
  { region: "Central", value: 6662973 },
  { region: "North", value: 2622628 },
  { region: "South", value: 2613382 },
];

type Country = { code: string; name: string; value: number; x: number; y: number };
const countries: Country[] = [
  { code: "DE", name: "Germany", value: 2411483, x: 52, y: 42 },
  { code: "FR", name: "France", value: 3108592, x: 42, y: 54 },
  { code: "GB", name: "United Kingdom", value: 2161947, x: 36, y: 32 },
  { code: "ES", name: "Spain", value: 1340832, x: 32, y: 72 },
  { code: "IT", name: "Italy", value: 1177921, x: 54, y: 64 },
  { code: "NL", name: "Netherlands", value: 379714, x: 47, y: 36 },
  { code: "BE", name: "Belgium", value: 229829, x: 45, y: 41 },
  { code: "AT", name: "Austria", value: 241661, x: 58, y: 50 },
  { code: "CH", name: "Switzerland", value: 391694, x: 50, y: 52 },
  { code: "SE", name: "Sweden", value: 168461, x: 60, y: 16 },
  { code: "NO", name: "Norway", value: 99878, x: 52, y: 14 },
  { code: "DK", name: "Denmark", value: 34617, x: 53, y: 26 },
  { code: "FI", name: "Finland", value: 82001, x: 70, y: 14 },
  { code: "IE", name: "Ireland", value: 75724, x: 28, y: 32 },
  { code: "PT", name: "Portugal", value: 94629, x: 24, y: 72 },
];

const allCountries = countries.map((c) => c.name).sort();

const orders = Array.from({ length: 15 }, (_, i) => {
  const names = ["Aaron Bergman","Aaron Carter","Aaron Davis","Aaron Miller","Abbie Parker","Abby Collins","Abby Mei","Abby Mitchell","Abigail Ross","Ada Dalton","Adam Barnes","Adam Gilbert","Adam Hayes","Adam Park","Aidan Hughes"];
  const amounts = [22147,10960,15247,243,4392,20747,39915,4484,4486,14967,20274,2350,21604,5637,23658];
  const ids = ["AZ-2011-144325","AZ-2011-257509","AZ-2011-332801","AZ-2011-578089","AZ-2011-583228","AZ-2011-734782","AZ-2011-804486","AZ-2011-126098","AZ-2011-132281","AZ-2011-136213","AZ-2011-137264","AZ-2011-147402","AZ-2011-160325","AZ-2011-167254","AZ-2011-168092"];
  return { name: names[i], amount: amounts[i], id: ids[i] };
});

const fmt = (v: number) => `$${v.toLocaleString()}`;
const fmtCompact = (v: number) => `${Math.round(v / 1000)}K`;

// Manual bubble layout: cluster of touching circles around a center
const bubbleLayout = (() => {
  const max = Math.max(...customers.map((c) => c.value));
  const scaled = customers.map((c) => ({
    ...c,
    r: 28 + (c.value / max) * 42,
  }));
  // Predefined offsets (relative units) for tight cluster
  const positions = [
    { x: 0, y: 0 },         // Bettie (biggest, center-top)
    { x: 0, y: 1 },         // Ashton (center)
    { x: -1, y: 0.4 },      // Alexander
    { x: -1, y: 1.5 },      // Lola
    { x: 0.9, y: 0.5 },     // Angie
    { x: -1.5, y: -0.4 },   // Thomas
    { x: 1.05, y: -0.15 },  // Indiana
    { x: 0.5, y: 1.45 },    // Isaac
    { x: 1.05, y: -1.1 },   // George (top-right)
    { x: -1.55, y: -1.25 }, // Rachel
  ];
  const SCALE = 75;
  return scaled.map((c, i) => ({
    ...c,
    cx: 200 + positions[i].x * SCALE,
    cy: 175 + positions[i].y * SCALE,
  }));
})();

const colorForBubble = (v: number) => {
  const max = Math.max(...customers.map((c) => c.value));
  const min = Math.min(...customers.map((c) => c.value));
  const t = (v - min) / (max - min);
  // interpolate from lightest pink to deep purple
  const palette = [PURPLE.lightest, PURPLE.light, PURPLE.mid, PURPLE.medium, PURPLE.deep, PURPLE.dark];
  const idx = Math.min(palette.length - 1, Math.floor(t * (palette.length - 1) + 0.5));
  return palette[idx];
};

const colorForCountry = (v: number) => {
  const max = Math.max(...countries.map((c) => c.value));
  const t = v / max;
  const palette = [PURPLE.lightest, PURPLE.light, PURPLE.mid, PURPLE.medium, PURPLE.deep, PURPLE.dark];
  return palette[Math.min(palette.length - 1, Math.floor(t * (palette.length - 1) + 0.4))];
};

const Kpi = ({ label, value, sub }: { label: string; value: string; sub?: string }) => (
  <div className="rounded-xl border border-purple-100 bg-white p-5 shadow-sm">
    <div className="text-[11px] font-semibold uppercase tracking-wider text-purple-400">{label}</div>
    <div className="mt-2 font-serif text-2xl font-semibold text-[#6b3a6b]">{value}</div>
    {sub && <div className="mt-1 text-xs text-stone-500">{sub}</div>}
  </div>
);

const Panel = ({ title, children, className = "" }: { title?: string; children: React.ReactNode; className?: string }) => (
  <div className={`rounded-xl border border-purple-100 bg-white shadow-sm ${className}`}>
    {title && <div className="border-b border-purple-100 bg-purple-50/60 px-4 py-2 text-sm font-semibold text-[#6b3a6b]">{title}</div>}
    <div className="p-3">{children}</div>
  </div>
);

const SalesDashboard2026 = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      {/* Header */}
      <div className="border-b border-purple-100 bg-gradient-to-b from-stone-100 to-stone-50">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-stone-600 hover:text-[#6b3a6b]">
            <ArrowLeft size={16} /> Back
          </Link>
          <h1 className="font-serif text-3xl font-medium tracking-wide text-stone-500 md:text-4xl">Sales Dashboard Year 2026</h1>
          <div className="w-16" />
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] space-y-4 px-6 py-6">
        {/* KPI row */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <Kpi label="Total Sales" value="$11,898,983" sub="Across 14 European countries" />
          <Kpi label="Top Segment" value="Consumer" sub="$6,165,650" />
          <Kpi label="Top Region" value="Central" sub="$6,662,973" />
          <Kpi label="Top Country" value="France" sub="$3,108,592" />
        </div>

        {/* Top row */}
        <div className="grid gap-4 lg:grid-cols-12">
          {/* Bubble chart */}
          <Panel className="lg:col-span-5">
            <svg viewBox="0 0 400 360" className="h-[400px] w-full">
              {bubbleLayout.map((b) => {
                const fill = colorForBubble(b.value);
                const isLight = fill === PURPLE.lightest || fill === PURPLE.light;
                const textColor = isLight ? "#6b3a6b" : "#fff";
                return (
                  <g key={b.name}>
                    <circle cx={b.cx} cy={b.cy} r={b.r} fill={fill} stroke="#fff" strokeWidth={2}>
                      <title>{`${b.name}: ${fmt(b.value)}`}</title>
                    </circle>
                    <text x={b.cx} y={b.cy - 4} textAnchor="middle" fontSize={Math.min(12, b.r / 5)} fill={textColor} fontWeight={500}>
                      {b.name}
                    </text>
                    <text x={b.cx} y={b.cy + 10} textAnchor="middle" fontSize={Math.min(11, b.r / 5.5)} fill={textColor}>
                      {fmt(b.value)}
                    </text>
                  </g>
                );
              })}
            </svg>
          </Panel>

          {/* Pie */}
          <Panel className="lg:col-span-3">
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={segments}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={110}
                  label={({ name, value }) => `${(value as number).toLocaleString()}\n${name}`}
                  labelLine
                >
                  {segments.map((s) => <Cell key={s.name} fill={s.color} />)}
                </Pie>
                <Tooltip formatter={(v: number) => fmt(v)} />
              </PieChart>
            </ResponsiveContainer>
          </Panel>

          {/* Bar */}
          <Panel title="Region" className="lg:col-span-4">
            <ResponsiveContainer width="100%" height={380}>
              <BarChart data={regions} margin={{ top: 30, right: 20, left: 10, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="region" tick={{ fontSize: 12 }} />
                <YAxis tickFormatter={fmtCompact} domain={[0, 8000000]} tick={{ fontSize: 11 }} label={{ value: "Amount", angle: -90, position: "insideLeft", style: { fontSize: 11, fill: "#888" } }} />
                <Tooltip formatter={(v: number) => fmt(v)} />
                <Bar dataKey="value" fill={PURPLE.medium}>
                  <LabelList dataKey="value" position="top" formatter={(v: number) => v.toLocaleString()} style={{ fontSize: 11, fill: "#6b3a6b", fontWeight: 600 }} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Panel>
        </div>

        {/* Bottom: map + sidebar */}
        <div className="grid gap-4 lg:grid-cols-12">
          <Panel title="Sales by Country (Europe)" className="lg:col-span-9">
            <div className="relative h-[500px] w-full overflow-hidden rounded bg-gradient-to-br from-stone-50 to-stone-100">
              {/* faint europe outline */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full opacity-25">
                <path
                  d="M18,28 Q26,18 38,22 L52,14 Q66,16 74,24 L82,32 L80,48 L74,62 L66,76 L52,82 L38,80 L26,72 L18,58 Z"
                  fill="none"
                  stroke="#999"
                  strokeWidth="0.3"
                />
              </svg>
              {countries.map((c) => {
                const fill = colorForCountry(c.value);
                const size = 30 + (c.value / 3108592) * 50;
                const isLight = fill === PURPLE.lightest || fill === PURPLE.light;
                return (
                  <div
                    key={c.code}
                    title={`${c.name}: ${fmt(c.value)}`}
                    className="absolute flex flex-col items-center transition hover:scale-110"
                    style={{ left: `${c.x}%`, top: `${c.y}%`, transform: "translate(-50%, -50%)" }}
                  >
                    <div
                      className="flex items-center justify-center rounded-full ring-2 ring-white shadow-md"
                      style={{ width: size, height: size, background: fill }}
                    >
                      <span className="text-[10px] font-bold" style={{ color: isLight ? "#6b3a6b" : "#fff" }}>{c.code}</span>
                    </div>
                    <div className="mt-1 rounded bg-white/90 px-1.5 py-0.5 text-[10px] font-medium text-[#6b3a6b] shadow-sm">
                      {c.value.toLocaleString()}
                    </div>
                  </div>
                );
              })}
              <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded bg-white/90 px-3 py-1.5 text-[10px] text-stone-600 shadow">
                <span>34,617</span>
                <div className="h-2 w-32 rounded" style={{ background: `linear-gradient(to right, ${PURPLE.lightest}, ${PURPLE.dark})` }} />
                <span>3,108,592</span>
              </div>
            </div>
          </Panel>

          {/* Sidebar */}
          <Panel className="lg:col-span-3">
            <div className="space-y-4 text-xs">
              <div>
                <div className="mb-2 font-semibold text-[#6b3a6b]">Segment</div>
                {segments.map((s) => (
                  <div key={s.name} className="flex items-center gap-2 py-0.5">
                    <span className="inline-block h-3 w-3 rounded-sm" style={{ background: s.color }} />
                    <span className="text-stone-600">{s.name}</span>
                  </div>
                ))}
              </div>
              <div>
                <div className="mb-2 font-semibold text-[#6b3a6b]">Amount Range</div>
                <div className="flex items-center gap-2 text-stone-500">
                  <span>34,617</span>
                  <div className="h-2 flex-1 rounded" style={{ background: `linear-gradient(to right, ${PURPLE.lightest}, ${PURPLE.dark})` }} />
                  <span>3.1M</span>
                </div>
              </div>
              <div>
                <div className="mb-2 font-semibold text-[#6b3a6b]">Countries</div>
                <div className="max-h-56 space-y-1 overflow-y-auto">
                  {allCountries.map((name) => (
                    <label key={name} className="flex cursor-pointer items-center gap-2 text-stone-600">
                      <input type="checkbox" defaultChecked className="h-3 w-3 accent-[#6b3a6b]" />
                      {name}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </Panel>
        </div>

        {/* Orders table */}
        <Panel title="Customer Orders">
          <div className="max-h-80 overflow-auto">
            <table className="w-full text-xs">
              <thead className="sticky top-0 bg-purple-50/80 text-[#6b3a6b]">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold">Customer Name</th>
                  <th className="px-3 py-2 text-right font-semibold">Amount</th>
                  <th className="px-3 py-2 text-left font-semibold">Order ID</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.id} className="border-t border-stone-100 hover:bg-purple-50/40">
                    <td className="px-3 py-1.5 text-stone-700">Name: {o.name}</td>
                    <td className="px-3 py-1.5 text-right font-mono text-stone-700">{o.amount.toLocaleString()}</td>
                    <td className="px-3 py-1.5 font-mono text-stone-600">{o.id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
      </div>
    </div>
  );
};

export default SalesDashboard2026;
