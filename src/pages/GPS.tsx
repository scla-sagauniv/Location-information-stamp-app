import { useGeolocation } from '../hooks/useGeolocation';

function GPS() {
	const targetLocation = {
		lat: 33.2382305,
		lon: 130.2962176,
	};
	const radius = 30;

	const isWithinRadius = useGeolocation(targetLocation, radius);

	return (
		<>
			<div>
				{isWithinRadius
					? 'スタンプ獲得!!'
					: 'スタンプ獲得まで30m圏内に入ってください'}
			</div>
		</>
	);
}

export default GPS;
