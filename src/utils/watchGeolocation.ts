import { calculateDistanceUsingHaversine } from '@/utils/calculateHaversine';
import { Location } from '@/types';

export const watchGeolocation = (
	targetLocations: Location[],
	radius: number,
	setIsWithinRadius: React.Dispatch<React.SetStateAction<boolean[]>>,
	setAltitude: (altitude: number | null) => void,
): number[] => {
	const watchIds: number[] = targetLocations.map((targetLocation, index) =>
		navigator.geolocation.watchPosition(
			(position) => {
				const distance = calculateDistanceUsingHaversine(
					position.coords.latitude,
					position.coords.longitude,
					targetLocation.lat,
					targetLocation.lon,
				);

				setIsWithinRadius((prevIsWithinRadius) => {
					const updatedIsWithinRadius = [...prevIsWithinRadius];

					if (localStorage.getItem(`isWithinRadius-${index}`) === 'true') {
						updatedIsWithinRadius[index] = true;
					} else if (distance <= radius && prevIsWithinRadius[index] !== true) {
						updatedIsWithinRadius[index] = true;
						localStorage.setItem(`isWithinRadius-${index}`, 'true');
					} else if (distance > radius && prevIsWithinRadius[index] !== false) {
						updatedIsWithinRadius[index] = false;
						localStorage.setItem(`isWithinRadius-${index}`, 'false');
					}
					return updatedIsWithinRadius;
				});
				setAltitude(position.coords.altitude);
			},
			(error) => console.error('位置情報の取得に失敗しました', error),
			{
				enableHighAccuracy: true,
				timeout: 10000,
				maximumAge: 5000,
			},
		),
	);
	return watchIds;
};
