import { useGeolocation } from '@/hooks/useGeolocation';
import StampCard from '@/components/StampCard';

function GPS() {
	const targetLocation = {
		lat: 33.2382305,
		lon: 130.2962176,
	};
	const radius = 30;

	const { isWithinRadius } = useGeolocation(targetLocation, radius);

	return (
		<div className="h-screen w-screen flex items-center justify-center bg-gray-100">
			<StampCard isStamped={isWithinRadius} />
		</div>
	);
}

export default GPS;
