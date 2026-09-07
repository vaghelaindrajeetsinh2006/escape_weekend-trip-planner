import { useEffect, useState } from 'react';
import type { MouseEvent } from 'react';
import { getStoredFavorites, getStoredPlanned, saveStoredFavorites, saveStoredPlanned } from '../utils/storage';
import { DESTINATIONS } from '../data/destinations';
import type { Destination } from '../types';

type Notify = (message: string) => void;

export function useTripLists(notify: Notify) {
  const [favorites, setFavorites] = useState<string[]>(() => getStoredFavorites());
  const [plannedTrips, setPlannedTrips] = useState<string[]>(() => getStoredPlanned());

  useEffect(() => saveStoredFavorites(favorites), [favorites]);
  useEffect(() => saveStoredPlanned(plannedTrips), [plannedTrips]);

  const toggleFavorite = (id: string, event?: MouseEvent) => {
    event?.stopPropagation();
    const destination = DESTINATIONS.find((item) => item.id === id);
    if (!destination) return;
    setFavorites((current) => {
      const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id];
      notify(current.includes(id) ? `Removed ${destination.name} from saved favorites` : `Saved ${destination.name} to your weekend favorites!`);
      return next;
    });
  };

  const togglePlan = (destination: Destination, event?: MouseEvent) => {
    event?.stopPropagation();
    setPlannedTrips((current) => {
      const exists = current.includes(destination.id);
      notify(exists ? `Removed ${destination.name} from your weekend plan` : `🎉 ${destination.name} added to your weekend plan!`);
      return exists ? current.filter((item) => item !== destination.id) : [...current, destination.id];
    });
  };

  const removeFavorite = (id: string) => setFavorites((current) => current.filter((item) => item !== id));
  const removePlanned = (id: string) => setPlannedTrips((current) => current.filter((item) => item !== id));

  return { favorites, plannedTrips, toggleFavorite, togglePlan, removeFavorite, removePlanned };
}
