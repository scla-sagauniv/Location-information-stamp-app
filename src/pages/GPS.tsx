import { useGeolocation } from '../hooks/useGeolocation';
import { Button } from '@/components/ui/button';

function GPS() {
	const targetLocation = {
		lat: 33.2382305,
		lon: 130.2962176,
	};
	const radius = 30;

	const isWithinRadius = useGeolocation(targetLocation, radius);

	return (
		<>
			<div className="text-blue-600">
				{isWithinRadius
					? 'スタンプ獲得!!'
					: 'スタンプ獲得まで30m圏内に入ってください'}
			</div>
			<div className="text-blue-700 text-xl">aaaa</div>
			<Button>スタンプを獲得する</Button>
		</>
	);
}

export default GPS;
