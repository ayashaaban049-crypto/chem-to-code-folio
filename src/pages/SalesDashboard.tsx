import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  LabelList,
  Legend,
} from "recharts";

const COLORS = {
  Furniture: "#8B7355",
  "Office Supplies": "#F4A7B9",
  Technology: "#C0392B",
};

const subCategories = [
  { name: "Accessories", sales: 167380, category: "Technology" },
  { name: "Appliances", sales: 107532, category: "Office Supplies" },
  { name: "Art", sales: 27119, category: "Office Supplies" },
  { name: "Binders", sales: 203412.73, category: "Office Supplies" },
  { name: "Bookcases", sales: 114880, category: "Furniture" },
  { name: "Chairs", sales: 328449.10, category: "Furniture" },
  { name: "Copiers", sales: 149528, category: "Technology" },
  { name: "Envelopes", sales: 16476, category: "Office Supplies" },
  { name: "Fasteners", sales: 3024, category: "Office Supplies" },
  { name: "Furnishings", sales: 91705.16, category: "Furniture" },
  { name: "Labels", sales: 12486, category: "Office Supplies" },
  { name: "Machines", sales: 189238.63, category: "Technology" },
  { name: "Paper", sales: 78479, category: "Office Supplies" },
  { name: "Phones", sales: 330007.05, category: "Technology" },
  { name: "Storage", sales: 223843, category: "Office Supplies" },
  { name: "Supplies", sales: 46673, category: "Office Supplies" },
  { name: "Tables", sales: 206965, category: "Furniture" },
];

const regionData = [
  { region: "West", Technology: 251992, "Office Supplies": 220853, Furniture: 252613 },
  { region: "East", Technology: 264974, "Office Supplies": 205516, Furniture: 208291 },
  { region: "Central", Technology: 170416, "Office Supplies": 167026, Furniture: 163797 },
  { region: "South", Technology: 148772, "Office Supplies": 125651, Furniture: 117299 },
];

const monthly = [
  { m: "Jan", sales: 94925 }, { m: "Feb", sales: 59751 }, { m: "Mar", sales: 205005 },
  { m: "Apr", sales: 137762 }, { m: "May", sales: 155029 }, { m: "Jun", sales: 152719 },
  { m: "Jul", sales: 147238 }, { m: "Aug", sales: 159044 }, { m: "Sep", sales: 307650 },
  { m: "Oct", sales: 200323 }, { m: "Nov", sales: 352461 }, { m: "Dec", sales: 325294 },
];

const pieData = [
  { name: "Technology", value: 836154 },
  { name: "Furniture", value: 742000 },
  { name: "Office Supplies", value: 719047 },
];

const stateBubbles = [
  { state: "CA", x: 8, y: 60, v: 457688 },
  { state: "WA", x: 12, y: 12, v: 138641 },
  { state: "OR", x: 10, y: 28, v: 17431 },
  { state: "NV", x: 16, y: 48, v: 16729 },
  { state: "AZ", x: 22, y: 62, v: 35282 },
  { state: "UT", x: 22, y: 44, v: 11220 },
  { state: "CO", x: 30, y: 46, v: 32108 },
  { state: "TX", x: 42, y: 78, v: 170188 },
  { state: "MN", x: 50, y: 22, v: 29863 },
  { state: "IL", x: 58, y: 42, v: 80166 },
  { state: "MI", x: 62, y: 30, v: 76270 },
  { state: "OH", x: 68, y: 40, v: 78258 },
  { state: "NY", x: 82, y: 26, v: 310876 },
  { state: "PA", x: 78, y: 36, v: 116511 },
  { state: "VA", x: 76, y: 50, v: 70636 },
  { state: "FL", x: 76, y: 86, v: 89474 },
  { state: "GA", x: 70, y: 72, v: 49095 },
  { state: "NC", x: 78, y: 60, v: 55603 },
];

const fmt = (v: number) => `$${v.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
const fmtK = (v: number) => `${Math.round(v / 1000)}K`;

const KpiCard = ({ label, value, sub }: { label: string; value: string; sub?: string }) => (
  <div className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
    <div className="text-xs font-medium uppercase tracking-wider text-stone-500">{label}</div>
    <div className="mt-2 font-serif text-2xl font-semibold text-stone-800">{value}</div>
    {sub && <div className="mt-1 text-xs text-stone-500">{sub}</div>}
  </div>
);

const Panel = ({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) => (
  <div className={`rounded-lg border border-stone-200 bg-white shadow-sm ${className}`}>
    <div className="border-b border-stone-200 bg-stone-50 px-4 py-2 text-sm font-semibold text-stone-700">{title}</div>
    <div className="p-3">{children}</div>
  </div>
);

const Legend3 = () => (
  <div className="flex items-center gap-4 text-xs text-stone-600">
    {(Object.keys(COLORS) as (keyof typeof COLORS)[]).map((k) => (
      <div key={k} className="flex items-center gap-2">
        <span className="inline-block h-3 w-3 rounded-sm" style={{ background: COLORS[k] }} />
        {k}
      </div>
    ))}
  </div>
);

const SalesDashboard = () => {
  const sortedSubs = [...subCategories].sort((a, b) => a.sales - b.sales);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <div className="border-b border-stone-200 bg-stone-100">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900">
            <ArrowLeft size={16} /> Back
          </Link>
          <h1 className="font-serif text-4xl font-semibold tracking-wide text-[#8B7355] md:text-5xl">Sales Dashboard</h1>
          <Legend3 />
        </div>
      </div>

      <div className="mx-auto max-w-[1500px] space-y-4 px-6 py-6">
        {/* KPI row */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <KpiCard label="Total Sales" value="$2,297,201" sub="9,994 orders" />
          <KpiCard label="Top State" value="California" sub="$457,688" />
          <KpiCard label="Top Month" value="November" sub="$352,461" />
          <KpiCard label="Top Category" value="Technology" sub="$836,154" />
        </div>

        {/* Middle row: bar (40) + map (40) + pie (20) */}
        <div className="grid gap-4 lg:grid-cols-10">
          <Panel title="Sales By Category" className="lg:col-span-4">
            <ResponsiveContainer width="100%" height={420}>
              <BarChart data={sortedSubs} layout="vertical" margin={{ left: 10, right: 40, top: 10, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" horizontal={false} />
                <XAxis type="number" tickFormatter={fmtK} domain={[0, 400000]} tick={{ fontSize: 11 }} />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 11 }} width={80} />
                <Tooltip formatter={(v: number) => fmt(v)} />
                <Bar dataKey="sales">
                  {sortedSubs.map((d, i) => (
                    <Cell key={i} fill={COLORS[d.category as keyof typeof COLORS]} />
                  ))}
                  <LabelList
                    dataKey="sales"
                    position="right"
                    formatter={(v: number) => (v > 150000 ? fmt(v) : "")}
                    style={{ fontSize: 10, fill: "#555" }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Panel>

          <Panel title="Sales By Map" className="lg:col-span-4">
            <div className="relative h-[420px] w-full overflow-hidden rounded bg-gradient-to-br from-stone-100 to-stone-200">
              <div className="absolute inset-0 flex items-center justify-center text-stone-400">
                <svg viewBox="0 0 100 100" className="h-full w-full opacity-30">
                  <path d="M5,35 Q15,20 30,25 L50,15 Q70,18 85,30 L95,45 L90,70 L75,85 L40,90 L15,80 L5,60 Z"
                    fill="none" stroke="#999" strokeWidth="0.4" />
                </svg>
              </div>
              {stateBubbles.map((s) => {
                const r = Math.max(8, Math.min(36, Math.sqrt(s.v) / 20));
                return (
                  <div key={s.state}
                    className="absolute flex flex-col items-center"
                    style={{ left: `${s.x}%`, top: `${s.y}%`, transform: "translate(-50%, -50%)" }}>
                    <div
                      title={`${s.state}: ${fmt(s.v)}`}
                      className="rounded-full bg-[#C0392B]/80 ring-2 ring-[#C0392B] transition hover:scale-110"
                      style={{ width: r, height: r }}
                    />
                    <div className="mt-0.5 text-[9px] font-medium text-stone-700">{s.v.toLocaleString()}</div>
                  </div>
                );
              })}
              <div className="absolute bottom-2 right-3 text-[10px] text-stone-400">State-level revenue bubbles</div>
            </div>
          </Panel>

          <Panel title="Category" className="lg:col-span-2">
            <ResponsiveContainer width="100%" height={420}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  label={({ name, value }) => `${name} ${fmt(value as number)}`}
                  labelLine
                >
                  {pieData.map((d, i) => (
                    <Cell key={i} fill={COLORS[d.name as keyof typeof COLORS]} />
                  ))}
                </Pie>
                <Tooltip formatter={(v: number) => fmt(v)} />
              </PieChart>
            </ResponsiveContainer>
          </Panel>
        </div>

        {/* Bottom row: stacked + line */}
        <div className="grid gap-4 lg:grid-cols-2">
          <Panel title="Sales By Region">
            <ResponsiveContainer width="100%" height={360}>
              <BarChart data={regionData} margin={{ top: 10, right: 20, left: 10, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="region" tick={{ fontSize: 12 }} />
                <YAxis tickFormatter={fmtK} tick={{ fontSize: 11 }} />
                <Tooltip formatter={(v: number) => fmt(v)} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Bar dataKey="Technology" stackId="a" fill={COLORS.Technology}>
                  <LabelList dataKey="Technology" position="center" formatter={(v: number) => v.toLocaleString()} style={{ fontSize: 11, fill: "#fff" }} />
                </Bar>
                <Bar dataKey="Office Supplies" stackId="a" fill={COLORS["Office Supplies"]}>
                  <LabelList dataKey="Office Supplies" position="center" formatter={(v: number) => v.toLocaleString()} style={{ fontSize: 11, fill: "#5a3a3a" }} />
                </Bar>
                <Bar dataKey="Furniture" stackId="a" fill={COLORS.Furniture}>
                  <LabelList dataKey="Furniture" position="center" formatter={(v: number) => v.toLocaleString()} style={{ fontSize: 11, fill: "#fff" }} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Panel>

          <Panel title="Sales By Month">
            <ResponsiveContainer width="100%" height={360}>
              <LineChart data={monthly} margin={{ top: 20, right: 30, left: 10, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="m" tick={{ fontSize: 11 }} />
                <YAxis tickFormatter={fmtK} domain={[0, 400000]} tick={{ fontSize: 11 }} />
                <Tooltip formatter={(v: number) => fmt(v)} />
                <Line type="monotone" dataKey="sales" stroke={COLORS.Furniture} strokeWidth={2.5} dot={{ r: 4, fill: COLORS.Furniture }}>
                  <LabelList dataKey="sales" position="top" formatter={(v: number) => v.toLocaleString()} style={{ fontSize: 10, fill: "#555" }} />
                </Line>
              </LineChart>
            </ResponsiveContainer>
          </Panel>
        </div>
      </div>
    </div>
  );
};

export default SalesDashboard;
