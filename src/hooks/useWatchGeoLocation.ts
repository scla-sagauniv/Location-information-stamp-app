import { useEffect, useState } from 'react';
import { Location } from '@/types';

// GPSの変化で発火
function useWatchGeoLocation() {
	const [location, setLocation] = useState<Location>({ lat: 0, lon: 0 });

	useEffect(() => {
		if ('geolocation' in navigator) {
			// ブラウザのサポートを確認
			const watchId = navigator.geolocation.watchPosition(
				(position) => {
					setLocation({
						lat: position.coords.latitude,
						lon: position.coords.longitude,
					});
					console.log('gps changed');
				},
				(error) => {
					console.error('Error watching position:', error);
				},
				{
					enableHighAccuracy: true,
					timeout: 10000,
					maximumAge: 5000,
				},
			);

			// コンポーネントがアンマウントされたときに監視を停止する
			return () => {
				navigator.geolocation.clearWatch(watchId);
			};
		} else {
			console.error('Geolocation is not supported by this browser.');
		}
	}, []);

	return location;
}

export default useWatchGeoLocation;
