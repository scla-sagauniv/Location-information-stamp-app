import { useState, useEffect } from 'react';

interface Location {
	lat: number;
	lon: number;
}

export const useGeolocation = (
	targetLocation: Location,
	radius: number,
): boolean => {
	const [isWithinRadius, setIsWithinRadius] = useState(false);

	useEffect(() => {
		const watchId = navigator.geolocation.watchPosition(
			(position) => {
				const distance = calculateDistanceUsingHaversine(
					position.coords.latitude,
					position.coords.longitude,
					targetLocation.lat,
					targetLocation.lon,
				);
				if (distance < radius) {
					setIsWithinRadius(true);
				}
			},
			(error) => console.error('位置情報の取得に失敗しました', error),
			{
				enableHighAccuracy: true,
				timeout: 5000,
				maximumAge: 0,
			},
		);

		return () => navigator.geolocation.clearWatch(watchId);
	}, []);
	return isWithinRadius;
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
	const d = R * c;
	return d * 1000;
};
