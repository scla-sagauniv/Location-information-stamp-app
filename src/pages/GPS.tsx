import { useEffect } from 'react';

function GPS() {
	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				console.log('Latitude: ' + position.coords.latitude);
				console.log('Longitude: ' + position.coords.longitude);
			});
		}

		if (navigator.geolocation) {
			navigator.geolocation.watchPosition(
				(position) => {
					const distance = calculateDistanceUsingHaversine(
						position.coords.latitude,
						position.coords.longitude,
						targetLocation.lat,
						targetLocation.lon,
					);

					if (distance < radius) {
						console.log('スタンプ獲得!!');
					} else {
						console.log('範囲外です');
					}
				},
				(error) => console.error('位置情報の取得に失敗しました', error),
				{
					enableHighAccuracy: true,
					maximumAge: 60000,
				},
			);
		} else {
			console.error('この端末では位置情報が取得できません');
		}
	}, []);

	const targetLocation = {
		lat: 33.2382872,
		lon: 130.2961518,
	};
	const radius = 50;

	const deg2rad = (deg: number) => {
		return deg * (Math.PI / 180);
	};

	const calculateDistanceUsingHaversine = (
		lat1: number,
		lon1: number,
		lat2: number,
		lon2: number,
	) => {
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

	return (
		<>
			<div>GPS</div>
		</>
	);
}

export default GPS;
