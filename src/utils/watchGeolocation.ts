// import { calculateDistanceUsingHaversine } from '@/utils/calculateHaversine';
import { getCurrentLocation } from '@/utils/getCurrentLocation';
import { Location } from '@/types';

export const watchGeolocation = (
	targetLocations: Location[],
	radius: number,
	setIsWithinRadius: React.Dispatch<React.SetStateAction<boolean[]>>,
	setAltitude: (altitude: number | null) => void,
	setPosition: (position: Location) => void,
	setCurrentLocationId: (currentLocationId: number | null) => void,
): number[] => {
	const watchIds: number[] = targetLocations.map((targetLocation, index) =>
		navigator.geolocation.watchPosition(
			(position) => {
				// const distance = calculateDistanceUsingHaversine(
				// 	position.coords.latitude,
				// 	position.coords.longitude,
				// 	targetLocation.lat,
				// 	targetLocation.lon,
				// );
				console.log(radius);

				console.log('位置情報取得:', {
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
					altitude: position.coords.altitude,
					accuracy: position.coords.accuracy,
				});

				// 位置情報をセット
				setPosition({
					lat: position.coords.latitude,
					lon: position.coords.longitude,
				});

				const currentLocationId = getCurrentLocation({
					lat: position.coords.latitude,
					lon: position.coords.longitude,
				});

				setCurrentLocationId(currentLocationId);

				setIsWithinRadius((prevIsWithinRadius) => {
					const updatedIsWithinRadius = [...prevIsWithinRadius];

					// if (localStorage.getItem(`isWithinRadius-${index}`) === 'true') {
					// 	updatedIsWithinRadius[index] = true;
					// } else if (distance <= radius && prevIsWithinRadius[index] !== true) {
					// 	updatedIsWithinRadius[index] = true;
					// 	localStorage.setItem(`isWithinRadius-${index}`, 'true');
					// } else if (distance > radius && prevIsWithinRadius[index] !== false) {
					// 	updatedIsWithinRadius[index] = false;
					// 	localStorage.setItem(`isWithinRadius-${index}`, 'false');
					// }
					if (localStorage.getItem(`isWithinRadius-${index}`) === 'true') {
						updatedIsWithinRadius[index] = true;
					} else if (
						currentLocationId === targetLocation.id &&
						prevIsWithinRadius[index] !== true
					) {
						updatedIsWithinRadius[index] = true;
						localStorage.setItem(`isWithinRadius-${index}`, 'true');
					} else if (
						currentLocationId !== targetLocation.id &&
						prevIsWithinRadius[index] !== false
					) {
						console.log('currentLocationId', currentLocationId);
						console.log('targetLocation.id', targetLocation.id);
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
				maximumAge: 0,
			},
		),
	);
	return watchIds;
};
