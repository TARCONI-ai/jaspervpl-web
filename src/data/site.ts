// Language-neutral data: links and tools. Translated copy lives in ./copy/{en,es,nl}.ts.

export const site = {
  name: 'Jasper van Puffelen López',
  brand: 'JasperVPL',
  domain: 'jaspervpl.com',
  url: 'https://jaspervpl.com',
  email: 'jaspervpl@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jasper-van-puffelen-lopez/',
  github: 'https://github.com/TARCONI-ai',
};

// Page <title>: adds the name when it still fits in a search result (about 65 characters)
export const pageTitle = (title: string) => {
  const full = `${title} · ${site.name}`;
  return full.length <= 65 ? full : title;
};

// Meta description from plain text: whole sentences up to `max` characters, else cut at a word
export const fitText = (text: string, max = 155) => {
  if (text.length <= max) return text;
  let out = '';
  for (const s of text.match(/[^.!?]+[.!?]+/g) ?? []) {
    if ((out + s).trim().length > max) break;
    out += s;
  }
  // Too little left after whole sentences: cut at a word instead
  return out.trim().length >= 100 ? out.trim() : text.slice(0, text.lastIndexOf(' ', max - 1)) + '…';
};

// Tool groups; labels come from copy.stack.groups
export const stack = {
  languages: ['Swift', 'TypeScript'],
  build: ['Xcode', 'Claude Code', 'React', 'Astro', 'Supabase'],
  local: ['Ollama', 'gemma4 (12b-mlx)'],
};
