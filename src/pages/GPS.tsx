import { useGeolocation } from '@/hooks/useGeolocation';
import StampCard from '@/components/StampCard';

function GPS() {
	const targetLocations = [
		{ lat: 33.2382305, lon: 130.2962176 },
		{ lat: 33.24, lon: 130.297 },
		{ lat: 33.2382305, lon: 130.2962176 },
	];
	const radius = 30;

	const stamps = useGeolocation(targetLocations, radius);

	return (
		<div className="h-screen w-screen flex items-center justify-center bg-gray-100">
			<StampCard stamps={stamps.isWithinRadius} />
		</div>
	);
}

export default GPS;
