import type { Skill, Project, Experience } from './types';

const BASE = import.meta.env.VITE_API_BASE || '';

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}${path}`);
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json() as Promise<T>;
}

export const api = {
  skills: () => get<Skill[]>('/api/skills'),
  projects: () => get<Project[]>('/api/projects'),
  experience: () => get<Experience[]>('/api/experience'),

  async contact(payload: {
    name: string;
    email: string;
    message: string;
    via: 'whatsapp' | 'email';
    company?: string;
  }) {
    const res = await fetch(`${BASE}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
    if (!res.ok || !data.ok) {
      throw new Error(data.error || 'Failed to send message');
    }
    return data;
  },
};
