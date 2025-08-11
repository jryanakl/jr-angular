export type Sort = 'name' | 'price';
export interface Params { q: string; sort: Sort; page: number; }

export function normalizeParams(p: Partial<Params>): Params {
  return { q: p.q?.trim() ?? '', sort: p.sort ?? 'name', page: p.page ?? 1 };
}
