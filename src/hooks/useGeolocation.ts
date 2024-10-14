import { useState, useEffect } from 'react';
import { Location } from '@/types';

export const useGeolocation = (
	targetLocations: Location[],
	radius: number,
): { isWithinRadius: boolean[]; altitude: number | null } => {
	const [isWithinRadius, setIsWithinRadius] = useState<boolean[]>(() =>
		targetLocations.map((_, index) => {
			const savedValue = localStorage.getItem(`isWithinRadius-${index}`);
			if (savedValue === null) {
				localStorage.setItem(`isWithinRadius-${index}`, 'false');
				return false;
			}
			return savedValue === 'true';
		}),
	);
	const [altitude, setAltitude] = useState<number | null>(null);

	useEffect(() => {
		const watchIds: number[] = targetLocations.map((targetLocation, index) =>
			navigator.geolocation.watchPosition(
				(position) => {
					const distance = calculateDistanceUsingHaversine(
						position.coords.latitude,
						position.coords.longitude,
						targetLocation.lat,
						targetLocation.lon,
					);

					if (distance < radius && !isWithinRadius[index]) {
						const updatedIsWithinRadius = [...isWithinRadius];
						updatedIsWithinRadius[index] = true;
						setIsWithinRadius(updatedIsWithinRadius);
						localStorage.setItem(`isWithinRadius-${index}`, 'true');
					} else if (
						distance >= radius &&
						localStorage.getItem(`isWithinRadius-${index}`) === null
					) {
						localStorage.setItem(`isWithinRadius-${index}`, 'false');
					}
					setAltitude(position.coords.altitude);
				},
				(error) => console.error('位置情報の取得に失敗しました', error),
				{
					enableHighAccuracy: true,
					timeout: 5000,
					maximumAge: 0,
				},
			),
		);

		return () => {
			watchIds.forEach((id) => navigator.geolocation.clearWatch(id));
		};
	}, [targetLocations, radius, isWithinRadius]);

	return { isWithinRadius, altitude };
};

const deg2rad = (deg: number): number => {
	return deg * (Math.PI / 180);
};

const calculateDistanceUsingHaversine = (
	lat1: number,
	lon1: number,
	lat2: number,
	lon2: number,
): number => {
	const R = 6371;
	const dLat = deg2rad(lat2 - lat1);
	const dLon = deg2rad(lon2 - lon1);
	const a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(deg2rad(lat1)) *
			Math.cos(deg2rad(lat2)) *
			Math.sin(dLon / 2) *
			Math.sin(dLon / 2);
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	const distance = R * c;
	return distance * 1000;
};
