import { useState, useEffect } from 'react';
import { Location } from '@/types';
import { watchGeolocation } from '@/utils/watchGeolocation';

export const useGeolocation = (
	targetLocations: Location[],
	radius: number,
): { isWithinRadius: boolean[]; altitude: number | null } => {
	const [isWithinRadius, setIsWithinRadius] = useState<boolean[]>(() =>
		targetLocations.map((_, index) => {
			const savedValue = localStorage.getItem(`isWithinRadius-${index}`);
			if (savedValue == null) {
				localStorage.setItem(`isWithinRadius-${index}`, 'false');
				return false;
			}
			return savedValue === 'true';
		}),
	);
	const [altitude, setAltitude] = useState<number | null>(null);

	useEffect(() => {
		if (targetLocations.length === 0) {
			console.log('targetLocationsが0です');
			return;
		}

		const watchIds = watchGeolocation(
			targetLocations,
			radius,
			setIsWithinRadius,
			setAltitude,
		);

		return () => {
			watchIds.forEach((id) => navigator.geolocation.clearWatch(id));
		};
	}, [targetLocations]);

	return { isWithinRadius, altitude };
};
