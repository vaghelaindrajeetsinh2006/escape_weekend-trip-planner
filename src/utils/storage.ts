import { DESTINATIONS } from '../data/destinations';

export const STORAGE_KEYS = {
  FAVORITES: 'escape_favorites_v1',
  PLANNED: 'escape_planned_trips_v1',
} as const;

const validIds = new Set(DESTINATIONS.map((destination) => destination.id));

function readIdList(key: string, fallback: string[]): string[] {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return fallback;
    return parsed.filter((value): value is string => typeof value === 'string' && validIds.has(value));
  } catch {
    return fallback;
  }
}

function saveIdList(key: string, ids: string[]) {
  try {
    localStorage.setItem(key, JSON.stringify(ids.filter((id) => validIds.has(id))));
  } catch {
    // Storage can be unavailable in private/restricted browser contexts.
  }
}

export function getStoredFavorites(): string[] {
  return readIdList(STORAGE_KEYS.FAVORITES, ['udaipur', 'mount-abu']);
}

export function saveStoredFavorites(ids: string[]) {
  saveIdList(STORAGE_KEYS.FAVORITES, ids);
}

export function getStoredPlanned(): string[] {
  return readIdList(STORAGE_KEYS.PLANNED, ['udaipur']);
}

export function saveStoredPlanned(ids: string[]) {
  saveIdList(STORAGE_KEYS.PLANNED, ids);
}
