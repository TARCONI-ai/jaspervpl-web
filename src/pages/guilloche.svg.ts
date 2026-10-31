import type { APIRoute } from 'astro';

// Banknote-style guilloche rosette in Light Gold, used as engraving on deep-green surfaces.
// Generated at build time and served as a static, cacheable file.
const C = 200;
const f = (n: number) => n.toFixed(1);

function rosette(R: number, amp: number, lobes: number, count: number, step: number, pts = 240) {
  let out = '';
  for (let k = 0; k < count; k++) {
    let d = '';
    for (let i = 0; i <= pts; i++) {
      const t = (i / pts) * Math.PI * 2;
      const r = R + amp * Math.sin(lobes * t + k * step) + amp * 0.35 * Math.sin((lobes / 2) * t - k * step);
      d += `${i ? 'L' : 'M'}${f(C + r * Math.cos(t))} ${f(C + r * Math.sin(t))}`;
    }
    out += `<path d="${d}Z"/>`;
  }
  return out;
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none" stroke="#C9A96A" stroke-width="0.6">
<g opacity="0.55">${rosette(96, 9, 16, 9, Math.PI / 9)}</g>
<g opacity="0.4">${rosette(150, 12, 24, 8, Math.PI / 12)}</g>
<g opacity="0.3"><circle cx="${C}" cy="${C}" r="70"/><circle cx="${C}" cy="${C}" r="182"/><circle cx="${C}" cy="${C}" r="188"/></g>
</svg>`;

export const GET: APIRoute = () =>
  new Response(svg, { headers: { 'Content-Type': 'image/svg+xml; charset=utf-8' } });
